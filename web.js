const express = require('express');
const bodyParser = require('body-parser');
const { TfidfVectorizer } = require('scikit-learn');
const { LogisticRegression } = require('scikit-learn');
const fs = require('fs');
const app = express();

// Load data from a JSON file
const rawData = fs.readFileSync('a0.json');
const data = JSON.parse(rawData);

// Create a TF-IDF vectorizer
const tfidfVector = new TfidfVectorizer({ max_features: 1000 });

// Transform text data into TF-IDF features
const X = tfidfVector.fitTransform(data.map(item => item.text));

// Create a Logistic Regression model
const model = new LogisticRegression();

// Fit the model to the data
model.fit(X, data.map(item => item.severity));

app.use(bodyParser.json());

app.post('/predict', (req, res) => {
    try {
        // Get the user's input health condition from the request
        const userInput = req.body.health_condition;

        // Transform the user's input into TF-IDF features
        const userInputVector = tfidfVector.transform([userInput]);

        // Predict the severity
        const prediction = model.predict(userInputVector)[0];

        // Return the prediction as JSON response
        res.json({ severity_prediction: prediction });
    } catch (e) {
        res.status(500).json({ error: e.toString() });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

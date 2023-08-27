const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const apiKey = process.env.OPENAI_API_KEY;

app.use(express.json());

app.post('/predict', async (req, res) => {
  try {
    const customerMessage = req.body.customer_message;
    
    const messages = [
      { 'role': 'system', 'content': 'You are an assistant...' },
      { 'role': 'user', 'content': `Customer message: \`\`\`${customerMessage}\`\`\`\nProduct information: \`\`\`${productInformation}\`\`\`\nAgent response: \`\`\`${finalResponseToCustomer}\`\`\`` }
    ];

    const completion = await getCompletionFromMessages(messages);

    res.json({ completion });
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
});

async function getCompletionFromMessages(messages) {
  try {
    const response = await axios.post('https://api.openai.com/v1/engines/text-davinci-002/completions', {
      messages: messages,
      max_tokens: 100
    }, {
      headers: {
        'Authorization': `Bearer ${apiKey}`
      }
    });

    if (response.status === 200) {
      return response.data.choices[0].message.content;
    } else {
      console.error('Error fetching completion:', response.status, response.statusText);
      return null;
    }
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

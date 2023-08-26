const fs = require('fs');

// Create an array to store data from all JSON files
let concatenatedData = [];

// Loop through and read data from each file
for (let i = 0; i <= 10; i++) {
    const fileName = `a${i}.json`;

    try {
        const data = fs.readFileSync(fileName, 'utf8');
        const jsonData = JSON.parse(data);

        // Concatenate the data arrays
        concatenatedData = concatenatedData.concat(jsonData);
    } catch (error) {
        console.error(`Error reading ${fileName}: ${error.message}`);
    }
}

// Write the concatenated data to severedata.json
fs.writeFileSync('severedata.json', JSON.stringify(concatenatedData, null, 2));

console.log('Data from a0.json to a10.json has been concatenated and saved to severedata.json.');

const fs = require('fs');
const readline = require('readline');

// Function to read JSON data from a file
function readJsonFile(filename) {
    try {
        const data = fs.readFileSync(filename, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error(`Error reading ${filename}: ${err.message}`);
        return [];
    }
}

// Function to write JSON data to a file
function writeToJsonFile(filename, data) {
    try {
        fs.writeFileSync(filename, JSON.stringify(data, null, 2));
        console.log(`Data written to ${filename}`);
    } catch (err) {
        console.error(`Error writing to ${filename}: ${err.message}`);
    }
}

const inputFileName = 'kunj.json'; // Change to your JSON file name
const outputFileName = 'filteredOutput.json'; // Change to the desired output file name

const jsonData = readJsonFile(inputFileName);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a pincode: ', (userPincode) => {
    const firstFiveDigits = userPincode.substring(0, 5);

    // Filter JSON data to find elements with common first 5 digits of the pincode
    const filteredData = jsonData.filter(item => item.pincode.startsWith(firstFiveDigits));

    if (filteredData.length === 0) {
        console.log('NO nearby hospital');
    } else {
        // Write the filtered data to a new JSON file
        writeToJsonFile(outputFileName, filteredData);
    }

    rl.close();
});

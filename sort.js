const readline = require('readline');
const fs = require('fs'); // Import the fs module

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a city: ', (userCity) => {
    rl.question('Enter a pincode: ', (userPincode) => {
        const searchTermCity = userCity.toLowerCase(); // Convert user city input to lowercase
        const firstFiveDigits = userPincode.substring(0, 5); // Extract first 5 digits of pincode

        // Read the hospital data from kunj.json
        fs.readFile('kunj.json', 'utf8', (err, data) => {
            if (err) {
                console.error('Error reading the JSON file:', err);
                rl.close();
                return;
            }

            try {
                const hospitalData = JSON.parse(data); // Parse the JSON data

                // Filter hospital data to find elements with a matching city
                const matchingCityData = hospitalData.filter(item =>
                    item.City.toLowerCase() === searchTermCity
                );

                if (matchingCityData.length === 0) {
                    console.log('No hospitals found in the entered city.');
                } else {
                    // Sort hospitals in the same city by the absolute difference with the user's pincode
                    matchingCityData.sort((a, b) => Math.abs(parseInt(a.Pincode) - parseInt(firstFiveDigits)) - Math.abs(parseInt(b.Pincode) - parseInt(firstFiveDigits)));

                    console.log('Hospitals in the Same City or Nearby:');
                    const closestHospitals = matchingCityData.slice(0, 5);
                    closestHospitals.forEach(item => {
                        console.log(`Hospital: ${item.Hospital}`);
                        console.log(`LocalAddress: ${item.LocalAddress}`);
                        console.log('------------------------');
                    });
                }
            } catch (parseError) {
                console.error('Error parsing JSON:', parseError);
            }

            rl.close();
        });
    });
});

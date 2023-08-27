
const fs = require("fs");

// Read the nubie.json file
const rawData = fs.readFileSync("nubie.json");
const nubieData = JSON.parse(rawData);

// Generate a random index to select a random data entry
function getRandomIndex(max) {
  return Math.floor(Math.random() * max);
}

// Check if the number variable is less than 60
const number = 12 // Replace this with your number variable
const speciality="Cardiology";


if (number < 60) {
  // Select a random data entry from nubieData
  const randomIndex = getRandomIndex(nubieData.length);
  const randomEntry = nubieData[randomIndex];

  // Print the selected data entry
  const first=randomEntry.first_name;
  const last=randomEntry.last_name;
  const mail=randomEntry.email;
  const no=randomEntry.phone_number;
} 
else 
{
    const rawData = fs.readFileSync("DATTAA.json");
    const doctors = JSON.parse(rawData);
    
    // Define the specialty you want to search for
    const specialtyToSearch = speciality; // Replace with your desired specialty
    
    // Filter doctors by the specified specialty
    const doctorsWithSpecialty = doctors.filter((doctor) => {
      return doctor.specialty === specialtyToSearch;
    });
    
    // Check if there are doctors with the specified specialty
    if (doctorsWithSpecialty.length === 0) {
      console.log(`No doctors found with the specialty: ${specialtyToSearch}`);
    } else {
      // Randomly select a doctor with the specified specialty
      const randomIndex = Math.floor(Math.random() * doctorsWithSpecialty.length);
      const randomDoctor = doctorsWithSpecialty[randomIndex];
    
      // Print random doctor information
      const first=randomEntry.first_name;
    const last=randomEntry.last_name;
    const mail=randomEntry.email;
    const no=randomEntry.phone_number;
    }
}

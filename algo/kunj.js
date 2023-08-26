const { Client, PlaceAutocompleteResponse } = require('@googlemaps/google-maps-services-js');

// Replace with your own API key
const API_KEY = 'AIzaSyDO1dFAHOjK0HffkIxBdNK9yThAEspH5N8';

// Initialize the Google Maps JavaScript API client
const client = new Client({});

// Define the address to search for
const address = 'DA-IICT college';

// Perform place autocomplete to get the coordinates of the address
async function getCoordinates() {
    try {
        const response = await client.placeAutocomplete({
            params: {
                input: address,
                key: API_KEY,
            },
            timeout: 1000, // adjust the timeout as needed
        });

        const place = response.data.predictions[0];
        if (!place) {
            console.error('No place found for the given address.');
            return;
        }

        // Extract the place ID
        const placeId = place.place_id;

        // Use the place ID to get details of the place (including coordinates)
        const placeDetails = await client.placeDetails({
            params: {
                place_id: placeId,
                key: API_KEY,
            },
            timeout: 1000, // adjust the timeout as needed
        });

        const location = placeDetails.data.result.geometry.location;
        console.log(`Latitude: ${location.lat}, Longitude: ${location.lng}`);
    } catch (error) {
        console.error('Error:', error);
    }
}

// Call the function to get the coordinates
getCoordinates();
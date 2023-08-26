// Initialize the Google Maps JavaScript API
function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 0, lng: 0 },
        zoom: 12
    });

    const geocoder = new google.maps.Geocoder();
    const placesService = new google.maps.places.PlacesService(map);

    const addressInput = document.getElementById('addressInput');
    const findHospitalsButton = document.getElementById('findHospitalsButton');
    const hospitalsList = document.getElementById('hospitalsList');

    findHospitalsButton.addEventListener('click', () => {
        const address = addressInput.value;

        geocoder.geocode({ address }, (results, status) => {
            if (status === 'OK' && results[0]) {
                const location = results[0].geometry.location;

                // Set the map center to the entered address
                map.setCenter(location);

                // Search for hospitals near the entered address
                const request = {
                    location,
                    radius: 10000, // Adjust the radius as needed
                    type: 'hospital'
                };

                placesService.nearbySearch(request, (results, status) => {
                    if (status === 'OK') {
                        hospitalsList.innerHTML = '';
                        for (let i = 0; i < 20 && i < results.length; i++) {
                            const hospital = results[i];
                            const hospitalName = hospital.name;
                            const hospitalAddress = hospital.vicinity;
                            hospitalsList.innerHTML += `<p>${hospitalName}<br>${hospitalAddress}</p>`;
                        }
                    } else {
                        hospitalsList.innerHTML = 'No hospitals found.';
                    }
                });
            } else {
                alert('Geocode was not successful for the following reason: ' + status);
            }
        });
    });
}

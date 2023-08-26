import './styles.css'

export default function Page(){

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
    return(
        <div>
    <div class="container">
        <h1>Find Nearest Hospitals</h1>
        <input type="text" id="addressInput" placeholder="Enter an address"/>
        <button id="findHospitalsButton">Find Hospitals</button>
        <div id="map"></div>
        <div id="hospitalsList"></div>
    </div>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDO1dFAHOjK0HffkIxBdNK9yThAEspH5N8&libraries=places"></script>
    <script src="script.js"></script>
</div>
    )
}
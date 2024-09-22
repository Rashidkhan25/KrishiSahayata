document.addEventListener("DOMContentLoaded", function() {
    var categoryDropdown = document.getElementById("category");
    var cropDropdown = document.getElementById("crop");
    var enterButton = document.getElementById("enterButton");
    var stateDropdown = document.getElementById("state");
    var cityDropdown = document.getElementById("city");
    var descriptionBox = document.getElementById("descriptionBox");
    var weatherWrapper = document.getElementById('weather_wrapper');
    var weatherGraph = document.getElementById('weatherGraph');

    // Populate states and cities
    var stateCities = {
        "Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Guntur", "Nellore", "Tirupati"],
        "Arunachal Pradesh": ["Itanagar"],
        "Assam": ["Guwahati", "Dibrugarh", "Silchar"],
        "Bihar": ["Patna", "Gaya", "Muzaffarpur"],
        "Chhattisgarh": ["Raipur", "Bhilai", "Bilaspur"],
        "Goa": ["Panaji", "Margao"],
        "Gujarat": ["Ahmedabad", "Surat", "Vadodara", "Rajkot"],
        "Haryana": ["Gurgaon", "Faridabad", "Panipat"],
        "Himachal Pradesh": ["Shimla", "Dharamshala"],
        "Jharkhand": ["Ranchi", "Jamshedpur", "Dhanbad"],
        "Karnataka": ["Bangalore", "Mysore", "Mangalore", "Hubli"],
        "Kerala": ["Thiruvananthapuram", "Kochi", "Kozhikode"],
        "Madhya Pradesh": ["Bhopal", "Indore", "Gwalior", "Jabalpur"],
        "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Nashik"],
        "Manipur": ["Imphal"],
        "Meghalaya": ["Shillong"],
        "Mizoram": ["Aizawl"],
        "Nagaland": ["Kohima"],
        "Odisha": ["Bhubaneswar", "Cuttack", "Rourkela"],
        "Punjab": ["Chandigarh", "Amritsar", "Ludhiana"],
        "Rajasthan": ["Jaipur", "Jodhpur", "Udaipur", "Kota"],
        "Sikkim": ["Gangtok"],
        "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Salem"],
        "Telangana": ["Hyderabad", "Warangal", "Nizamabad"],
        "Tripura": ["Agartala"],
        "Uttar Pradesh": ["Lucknow", "Kanpur", "Varanasi", "Agra"],
        "Uttarakhand": ["Dehradun", "Haridwar"],
        "West Bengal": ["Kolkata", "Howrah", "Siliguri", "Durgapur"]
    };

    // Populate state dropdown
    function populateStates() {
        var states = Object.keys(stateCities);
        states.forEach(state => {
            var option = document.createElement("option");
            option.value = state;
            option.text = state;
            stateDropdown.add(option);
        });
    }

    // Populate cities based on selected state
    stateDropdown.addEventListener("change", function() {
        var selectedState = this.value;
        cityDropdown.innerHTML = ""; // Clear previous city options

        if (stateCities[selectedState]) {
            var cities = stateCities[selectedState];
            cities.forEach(city => {
                var option = document.createElement("option");
                option.value = city;
                option.text = city;
                cityDropdown.add(option);
            });
        }
    });

    populateStates();

    // Update crop description dynamically based on selection
    cropDropdown.addEventListener("change", function() {
        var selectedCrop = this.value;
        descriptionBox.innerHTML = `Information about ${selectedCrop}: This crop is usually grown in ${categoryDropdown.value} season...`; // Example content
    });

    // Event listener to handle the "Get Details" button click
    enterButton.addEventListener("click", function() {
        var selectedCity = cityDropdown.value;
        if (selectedCity) {
            weatherWrapper.innerHTML = `<p>Loading weather data...</p>`;
            fetchWeather(selectedCity);
        }
    });

    function fetchWeather(city) {
        const apiKey = '6bf23a460498b5e80155f16e12e6d455';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.main) {
                    const temp = Math.round(data.main.temp);
                    const humidity = data.main.humidity;
                    const windSpeed = data.wind.speed;
                    const rain = data.rain ? data.rain['1h'] : 0;
                    weatherWrapper.innerHTML = `
                        <h2>Weather Information for ${data.name}</h2>
                        <div>Temperature: ${temp}°C</div>
                        <div>Humidity: ${humidity}%</div>
                        <div>Wind Speed: ${windSpeed} km/h</div>
                        <div class="rain">Rain: ${rain} mm</div>
                    `;
                    drawWeatherGraph([temp, humidity, windSpeed]);
                } else {
                    weatherWrapper.innerHTML = `<p>Weather data not available for ${city}</p>`;
                }
            })
            .catch(error => {
                weatherWrapper.innerHTML = `<p>Failed to load weather data. Please try again later.</p>`;
            });
    }

    function drawWeatherGraph(data) {
        var ctx = weatherGraph.getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Temperature (°C)', 'Humidity (%)', 'Wind Speed (km/h)'],
                datasets: [{
                    label: 'Weather Data',
                    data: data,
                    backgroundColor: ['#ff9800', '#8bc34a', '#ff5722'],
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
});

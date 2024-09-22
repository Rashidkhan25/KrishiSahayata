function openMenu() {
    document.getElementById("menuOverlay").classList.add("menu-active");
}

function closeMenu() {
    document.getElementById("menuOverlay").classList.remove("menu-active");
}
// Setup for the yield overview chart
var ctxYield = document.getElementById('lineChart1').getContext('2d');
            var yieldChart = new Chart(ctxYield, {
                type: 'line',
                data: {
                    labels: ['January', 'February', 'March', 'April', 'May'],
                    datasets: [{
                        label: 'Yield Analysis',
                        data: [12, 19, 3, 5, 2],
                        borderColor: 'red',
                        borderWidth: 2,
                        fill: false
                    }]
                }
            });
  


//bar grap


//bar graph end


//donut chart
window.onload = function() {
  var ctx = document.getElementById('productionChart').getContext('2d');
  
  var productionChart = new Chart(ctx, {
      type: 'bar', // You can change this to 'line', 'pie', etc.
      data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June'],
          datasets: [{
              label: 'Wheat (tons)',
              data: [300, 500, 400, 600, 700, 650],
              backgroundColor: 'rgba(75, 192, 192,0.6)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1
          },
          {
              label: 'Rice (tons)',
              data: [200, 300, 450, 500, 400, 550],
              backgroundColor: 'rgba(255, 159, 64, 0.6)',
              borderColor: 'rgba(255, 159, 64, 1)',
              borderWidth: 1
          },
          {
              label: 'Corn (tons)',
              data: [150, 250, 300, 350, 400, 450],
              backgroundColor: 'rgba(153, 102, 255, 0.6)',
              borderColor: 'rgba(153, 102, 255, 1)',
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          },
          responsive: true,
          plugins: {
              legend: {
                  display: true,
                  position: 'top'
              },
              title: {
                  display: true,
                  text: 'Monthly Crop Production Overview (tons)'
              }
          }
      }
  });
};
  //donut chart end


//weather
function getWeather() {
  const apiKey = 'ea669280e7d23b6cd2c0795f80e29376';
  const city = document.getElementById('city').value;

  if (!city) {
      alert('Please enter a city');
      return;
  }

  const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

  // Fetch current weather
  fetch(currentWeatherUrl)
      .then(response => response.json())
      .then(data => {
          displayWeather(data);
      })
      .catch(error => {
          console.error('Error fetching current weather data:', error);
          alert('Error fetching current weather data. Please try again.');
      });

  // Fetch hourly forecast
  fetch(forecastUrl)
      .then(response => response.json())
      .then(data => {
          displayHourlyForecast(data.list);
      })
      .catch(error => {
          console.error('Error fetching hourly forecast data:', error);
          alert('Error fetching hourly forecast data. Please try again.');
      });
}

function displayWeather(data) {
  const tempDivInfo = document.getElementById('temp-div');
  const weatherInfoDiv = document.getElementById('weather-info');
  const weatherIcon = document.getElementById('weather-icon');
  const hourlyForecastDiv = document.getElementById('hourly-forecast');

  // Clear previous content
  weatherInfoDiv.innerHTML = '';
  hourlyForecastDiv.innerHTML = '';
  tempDivInfo.innerHTML = '';

  // Check if city not found
  if (data.cod === '404') {
      weatherInfoDiv.innerHTML = `<p>${data.message}</p>`;
  } else {
      const cityName = data.name;
      const temperature = Math.round(data.main.temp - 273.15); // Convert to Celsius
      const description = data.weather[0].description;
      const iconCode = data.weather[0].icon;
      const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;

      // Update weather information
      const temperatureHTML = `<p>${temperature}°C</p>`;
      const weatherHtml = `<p>${cityName}</p><p>${description}</p>`;

      tempDivInfo.innerHTML = temperatureHTML;
      weatherInfoDiv.innerHTML = weatherHtml;
      weatherIcon.src = iconUrl;
      weatherIcon.alt = description;

      weatherIcon.style.display = 'block'; // Ensure icon is visible
  }
}

function displayHourlyForecast(hourlyData) {
  const hourlyForecastDiv = document.getElementById('hourly-forecast');
  const next24Hours = hourlyData.slice(0, 8); // Display the next 24 hours (3-hour intervals)

  // Clear any previous forecast data
  hourlyForecastDiv.innerHTML = '';

  next24Hours.forEach(item => {
      const dateTime = new Date(item.dt * 1000); // Convert timestamp to milliseconds
      const hour = dateTime.getHours();
      const temperature = Math.round(item.main.temp - 273.15); // Convert to Celsius
      const iconCode = item.weather[0].icon;
      const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;

      // Display hourly weather data
      const hourlyItemHtml = `
          <div class="hourly-item">
              <span>${hour}:00</span>
              <img src="${iconUrl}" alt="Hourly Weather Icon">
              <span>${temperature}°C</span>
          </div>
      `;

      hourlyForecastDiv.innerHTML += hourlyItemHtml;
  });
}

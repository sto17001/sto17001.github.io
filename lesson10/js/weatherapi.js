const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=bb98ec60049766ba796288b29310adc3&units=imperial";
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        document.getElementById("currentWeather").textContent = jsObject.weather[0].description;
        document.getElementById("currentTemperature").textContent = jsObject.main.temp;
        document.getElementById("humidity").textContent = jsObject.main.humidity;
        document.getElementById("windSpeed").textContent = jsObject.wind.speed;

        let temperature = parseFloat(jsObject.main.temp);
        let windSpeed = parseFloat(jsObject.wind.speed);
        if (temperature <= 50.0 && windSpeed > 3.0) {
            document.getElementById("windChillOutput").innerHTML = windChill(currentTemperature, windSpeed).toFixed(0);
        } else {
            document.getElementById("windChillOutput").innerHTML = "N/A";
        }

        function windChill(t, s) {
            let equation = (35.74) + (0.6215 * t) - (35.75 * Math.pow(s, 0.16)) + (0.4275 * t * Math.pow(s, 0.16));
            return equation;
        }
    });
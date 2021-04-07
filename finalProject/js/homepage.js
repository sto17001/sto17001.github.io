const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=43.8231&lon=-111.7924&exclude=hourly,minutely,daily,alerts&appid=bb98ec60049766ba796288b29310adc3&units=imperial";
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        document.getElementById("currentWeather").textContent = jsObject.current.description;
        document.getElementById("currentTemperature").textContent = jsObject.current.temp;
        document.getElementById("humidity").textContent = jsObject.current.humidity;
    });

const apiURLforecast = "https://api.openweathermap.org/data/2.5/onecall?lat=43.8231&lon=-111.7924&exclude=hourly,minutely,current,alerts&appid=bb98ec60049766ba796288b29310adc3&units=imperial";
fetch(apiURLforecast)
    .then((response) => response.json())
    .then((jsObject) => {
        const dayOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

        for (let day = 0; day <= 2; day++) {
            let d = new Date(weather.day);
            document.getElementById(`dayOfWeek${day+1}`).textContent = dayOfWeek[d.getDay()];
            document.getElementById(`forecastTemperature${day+1}`).textContent = daily.temp.day;

            const imgalt = day.weather[0].description;
            const imagsrc = 'https://openweathermap.org/img/wn/' + day.weather[0].icon + '@2x.png';
            document.getElementById(`icon${day+1}`).setAttribute('src', imagsrc);
            document.getElementById(`icon${day+1}`).setAttribute('alt', imgalt);
        }

    });
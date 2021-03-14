const apiURLforecast = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=bb98ec60049766ba796288b29310adc3&units=imperial";
fetch(apiURLforecast)
    .then((response) => response.json())
    .then((jsObject) => {
        let day = 1;
        const dayofWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        jsObject.list.forEach(element => {
            if (element.dt_txt.includes("18:00:00")) {
                let d = new Date(element.dt_txt);
                document.getElementById('dayOfWeek${day}').textContent = dayofWeek[d.getDay()];

                document.getElementById('forecastTemperature${day}').textContent = element.main.temp;

                let imagesrc = 'https://openweathermap.org/img/wn/' + element.weather[0].icon + '@2x.png';
                let imgalt = element.weather[0].description;
                document.getElementById('icon${day}').setAttribute('src', imagesrc);
                document.getElementById('icon${day}').setAttribute('alt', imgalt);

                day++;
            }
        });
    });
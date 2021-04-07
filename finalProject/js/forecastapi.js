const apiURLforecast = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=bb98ec60049766ba796288b29310adc3&units=imperial";
fetch(apiURLforecast)
    .then((response) => response.json())
    .then((jsObject) => {
        const dayOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
        let newList = jsObject.list.filter(x => x.dt_txt.includes("18:00:00"));

        for (let day = 0; day <= 4; day++) {
            let d = new Date(newList[day].dt_txt);
            document.getElementById(`dayOfWeek${day+1}`).textContent = dayOfWeek[d.getDay()];
            document.getElementById(`forecastTemperature${day+1}`).textContent = newList[day].main.temp;

            const imgalt = newList[day].weather[0].description;
            const imagsrc = 'https://openweathermap.org/img/wn/' + newList[day].weather[0].icon + '@2x.png';
            document.getElementById(`icon${day+1}`).setAttribute('src', imagsrc);
            document.getElementById(`icon${day+1}`).setAttribute('alt', imgalt);
        }

    });

const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject['towns'];

    const prestonfilter = towns.filter(x => x.name == 'Preston');
    let prestonEvents = prestonfilter[0].events;
    let ul = document.createElement('ul'); 

    prestonEvents.forEach(info => {
    let listItem = document.createElement('li');
    listItem.innerHTML = info;
    ul.appendChild(listItem);
  }); 

  document.getElementById("prestonEvents").appendChild(ul);
});
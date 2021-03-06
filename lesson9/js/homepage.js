const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';


fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {

        const towns = jsonObject['towns'];
        const townCard = document.querySelector('.townCard');
        const townCardFilter = towns.filter(town => town.name == "Preston" || town.name == "Fish Haven" || town.name == "Soda Springs");

        townCardFilter.forEach(town => {

            let card = document.createElement('section');
            let div = document.createElement('div');
            let h2 = document.createElement('h2');
            let p1 = document.createElement('h3');
            let p2 = document.createElement('p');
            let p3 = document.createElement('p');
            let p4 = document.createElement('p');
            let image = document.createElement('img');

            h2.innerHTML = `${town.name}`;
            p1.innerHTML = `${town.motto}`;
            p2.innerHTML = `Year Founded: ${town.yearFounded}`;
            p3.innerHTML = `Population: ${town.currentPopulation}`;
            p4.innerHTML = `Annual Rain Fall: ${town.averageRainfall}`;
            image.setAttribute('src', `images/` + town.photo);
            image.setAttribute('alt', `${town.name} image`);
            div.append(h2, p1, p2, p3, p4);
            card.append(div, image);
            townCard.append(card);
        });
    });
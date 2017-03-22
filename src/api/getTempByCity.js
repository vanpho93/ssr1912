const url = 'http://api.openweathermap.org/data/2.5/weather?appid=c4e735ea8bd7e7b6dc8368c752517b2d&units=metric&q=';

const getTempyCity = (cityName) => (
    fetch(url + cityName)
    .then(res => res.json())
);

export default getTempyCity;

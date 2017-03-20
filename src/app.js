import Weather from './components/Weather';

const React = require('react');
const ReactDOM = require('react-dom');

ReactDOM.render(
    <Weather />,
    document.getElementById('root')
);

// yarn add 
// babel-core 
// babel-loader 
// babel-preset-es2015 
// babel-preset-react
// -dev

// { 
    /*<Weather> -> state city, temp
    <WeatherForm /> -> form button
    <WeatherMessage props/> -> Saigon hien tai 30 do C
// </Weather>*/ 
//}

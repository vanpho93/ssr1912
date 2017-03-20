import React from 'react';
import WeatherForm from './WeatherForm';
import WeatherMessage from './WeatherMessage';

export default class Weather extends React.Component {
    render() {
        return ( 
            <div>
                <WeatherForm />
                <WeatherMessage />
            </div>
        );
    }
}

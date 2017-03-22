import React from 'react';
import WeatherForm from './WeatherForm';
import WeatherMessage from './WeatherMessage';

export default class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: 'Saigon',
            temp: 30,
            isLoading: false
        };
    }
    render() {
        const { city, temp, isLoading } = this.state;
        return ( 
            <div>
                <WeatherForm parent={this} />
                <WeatherMessage 
                    city={city} 
                    temp={temp} 
                    isLoading={isLoading} 
                />
            </div>
        );
    }
}

import React from 'react';

export default class WeatherForm extends React.Component {
    render() {
        return ( 
            <div>
                <input 
                    type="text" 
                    placeholder="Enter your city name" 
                    ref="txtCity"
                />
                <br /><br />
                <button>Get Weather</button>
            </div>
        );
    }
}

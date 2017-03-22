import React from 'react';

const url = 'http://api.openweathermap.org/data/2.5/weather?appid=c4e735ea8bd7e7b6dc8368c752517b2d&units=metric&q=Saigon';

export default class WeatherForm extends React.Component {
    async getTemp() {
        const { parent } = this.props;
        const cityName = this.refs.txtCity.value;
        parent.state.city = cityName;
        parent.setState(parent.state);
        $.get(url, data => console.log(data));
    }

    render() {
        return ( 
            <div>
                <input 
                    type="text" 
                    placeholder="Enter your city name" 
                    ref="txtCity"
                />
                <br /><br />
                <button onClick={this.getTemp.bind(this)}>Get Weather</button>
            </div>
        );
    }
}

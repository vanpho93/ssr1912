import React from 'react';

export default class WeatherForm extends React.Component {
    getTemp() {
        const { parent } = this.props;
        const cityName = this.refs.txtCity.value;
        parent.state.city = cityName;
        parent.setState(parent.state);
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

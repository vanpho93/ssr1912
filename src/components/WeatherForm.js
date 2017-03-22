import React from 'react';

const url = 'http://api.openweathermap.org/data/2.5/weather?appid=c4e735ea8bd7e7b6dc8368c752517b2d&units=metric&q=';

export default class WeatherForm extends React.Component {
    getTemp() {
        const { parent } = this.props;
        const cityName = this.refs.txtCity.value;
        
        parent.state.isLoading = true;
        parent.setState(parent.state);

        $.ajax({
            type: 'get',
            url: url + cityName,
            success(data) {
                const { temp } = data.main;
                parent.state.city = cityName;
                parent.state.temp = temp;
                parent.state.isLoading = false;
                parent.setState(parent.state);
            },
            error(request) {
                alert(request.responseJSON.message);
                parent.state.isLoading = false;
                parent.setState(parent.state);
            }
        });
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

import React from 'react';
import getTempByCity from '../api/getTempByCity';

export default class WeatherForm extends React.Component {
    async getTemp() {
        const { parent } = this.props;
        const cityName = this.refs.txtCity.value;
        
        parent.state.isLoading = true;
        parent.setState(parent.state);

        const temp = await getTempByCity(cityName);
        parent.state.city = cityName;
        parent.state.temp = temp;
        parent.state.isLoading = false;
        parent.setState(parent.state);
        console.log(temp);
        
        // .then(response => {
        //     try {
        //         const { temp } = response.main;
        //         parent.state.city = cityName;
        //         parent.state.temp = temp;
        //     } catch (e) {
        //         alert(response.message);
        //     } finally {
        //         parent.state.isLoading = false;
        //         parent.setState(parent.state);
        //     }
        // });
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

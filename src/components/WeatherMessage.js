import React from 'react';

export default class Weather extends React.Component {
    render() {
        const { city, temp } = this.props;
        return ( 
            <div>
                <h3>{city} {temp} do C</h3>
            </div>
        );
    }
}

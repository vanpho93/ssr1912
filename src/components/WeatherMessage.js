import React from 'react';

export default class Weather extends React.Component {
    render() {
        const { city, temp, isLoading } = this.props;
        const msg = isLoading ? <h3>Loading...</h3> : <h3>{city} {temp} do C</h3>;
        return ( 
            <div>
                {msg}
            </div>
        );
    }
}

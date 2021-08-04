import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Card from 'react-bootstrap/Card'
import WeatherDay from './render/weatherDay';


class Weather extends React.Component {

    render() {
        return (
            <>

                {
                    this.props.showCard &&
                    this.props.weather.map(element => {
                        return ( 
                            <>

                            <WeatherDay weatherDayInfo = {element}/>
                            </>
                            
                        )
                    })
                }


            </>
        )
    }


}

export default Weather;
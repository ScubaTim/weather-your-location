import React, { Component } from 'react';
import './App.scss';
import { Row, Col } from 'reactstrap';
import WeatherDisplay from '../WeatherDisplay';

class App extends Component {
    state = {
        lat: null,
        lon: null,
        temp: null,
        highTemp: null,
        lowTemp: null,
        percip: null
    }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude, lon: position.coords.longitude }),
        );
    }
    /* ACTUAL API 
    getWeather = async () => {
        //Get Weather data from API with coordinates from state
        const response = await fetch(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&appid=fdca481f9e858844aede00aa6a7749c2`).catch(err => console.log(err));
        const weather = await response.json()
        // Set current tempurature: weather.main.temp is the current tempurature in Kelvin, convert it to Farenheit
        const tempInF = Math.floor(weather.main.temp * 9 / 5 - 459.67);
        //Update the state with current Tempurature in F
        this.setState({ temp: tempInF })
    }
    */
    /*
    //test
    getWeather = () => {
        this.setState({ temp: '50F' });
        console.log(this.state.temp);
    }
    */
    clickHandler = () => {
        //this.getWeather();
        console.log('clicked');
    }

    renderContent = () => {
        if (this.state.lon && this.state.lat) {
            return (
                <div>
                    <Row>
                        <Col>
                            <WeatherDisplay
                                lat={this.state.lat}
                                lon={this.state.lon}
                                temp={this.state.temp}
                                onClick={this.clickHandler}
                            />
                        </Col>
                    </Row>
                </div>
            )
        } else {
            return (<h1 className="text-center">Acquiring Device Coordinates</h1>)
        }
    }

    render() {
        return this.renderContent();
    }
};

export default App;
import React, { Component } from 'react';
import './App.scss';
import { Row, Col } from 'reactstrap';
import LandingButton from '../LandingButton';
import WeatherDisplay from '../WeatherDisplay';

class App extends Component {
    state = {
        lat: null,
        lon: null,
        temp: null,
        highTemp: null,
        lowTemp: null,
        humidity: null,
        message: ''
    }

    getLocation = () => {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude, lon: position.coords.longitude }),
        );
    }

    getWeather = async () => {
        if (this.state.lat) {
            const response = await fetch(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&appid=0317b02bce728aa1f3b87d5d6ad88a5d`).catch(err => console.log(err));
            const weather = await response.json()
            const tempInF = Math.floor(weather.main.temp * 9 / 5 - 459.67);
            const maxInF = Math.floor(weather.main.temp_max * 9 / 5 - 459.67);
            const minInF = Math.floor(weather.main.temp_min * 9 / 5 - 459.67);
            const humidity = weather.main.humidity;
            const message = weather.weather[0].description.toUpperCase()
            this.setState({ temp: tempInF, highTemp: maxInF, lowTemp: minInF, humidity: humidity, message: message })
        }
    }

    handleLaunch = () => {
        this.getWeather();
        if (this.state.lat && !this.state.humidity) {
            return (
                <Row className="text-center">
                    <Col>
                        <h1 style={{ marginTop: '25vh' }}>Loading weather data....</h1>
                    </Col>
                </Row>
            )
        }
    }

    renderContent = () => {
        //Loaded With all null, start finding location
        this.getLocation();
        //If no location yet, show finding location
        if (!this.state.lat) {
            return (
                <Row className="text-center display-font">
                    <Col>
                        <h1 style={{ marginTop: '25vh' }}>ACQUIRING GPS COORDINATES....</h1>
                    </Col>
                </Row>
            )
        }
        //If location found show get weather button
        if (this.state.lat && !this.state.humidity) {
            return (
                <Row className="text-center">
                    <Col>
                        <LandingButton
                            //Landing button triggers weather API call
                            handleLaunch={this.handleLaunch}
                        />
                    </Col>
                </Row>
            );
        }
        //If location and weather, show weather display component
        if (this.state.lat && this.state.humidity) {
            return (
                <div>
                    <Row>
                        <Col>
                            <WeatherDisplay
                                lat={this.state.lat}
                                lon={this.state.lon}
                                temp={this.state.temp}
                                highTemp={this.state.highTemp}
                                lowTemp={this.state.lowTemp}
                                humidity={this.state.humidity}
                                message={this.state.message}
                            />
                        </Col>
                    </Row>
                </div>
            );
        }
    }

    render() {
        return this.renderContent();
    }
};

export default App;



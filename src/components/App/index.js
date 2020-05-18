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
        percip: ''
    }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude, lon: position.coords.longitude }),
        );
    }

    getWeather = async () => {
        //const response = await fetch(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&appid=0317b02bce728aa1f3b87d5d6ad88a5d`).catch(err => console.log(err));
        //const weather = await response.json()
        //const tempInF = Math.floor(weather.main.temp * 9 / 5 - 459.67);
        this.setState({ temp: 'temp', highTemp: '100', lowTemp: '100', percip: '75%' })
    }

    handleLaunch = () => {
        this.getWeather();
    }

    renderContent = () => {
        if (!this.state.temp)
            return (
                <Row className="text-center">
                    <Col>
                        <LandingButton
                            handleLaunch={this.handleLaunch}
                        />
                    </Col>
                </Row>
            );

        if (!this.state.lat) {
            return (
                <Row className="text-center">
                    <Col>
                        <h1 style={{ marginTop: '25vh' }}>Loading...</h1>
                    </Col>
                </Row>
            )
        }

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
                            percip={this.state.percip}
                        />
                    </Col>
                </Row>
            </div>
        );
    }

    render() {
        return this.renderContent();
    }
};

export default App;



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
        humidity: ''
    }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude, lon: position.coords.longitude }),
        );
    }

    getWeather = async () => {
        if (this.state.lat) {
            const response = await fetch(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&appid=0317b02bce728aa1f3b87d5d6ad88a5d`).catch(err => console.log(err));
            const weather = await response.json()
            console.log(weather);
            const tempInF = Math.floor(weather.main.temp * 9 / 5 - 459.67);
            const maxInF = Math.floor(weather.main.temp_max * 9 / 5 - 459.67);
            const minInF = Math.floor(weather.main.temp_min * 9 / 5 - 459.67);
            const humidity = Math.floor(weather.main.humidity)
            this.setState({ temp: tempInF, highTemp: maxInF, lowTemp: minInF, humidity: humidity })
        }
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
                            humidity={this.state.humidity}
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



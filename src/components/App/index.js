import React, { Component } from 'react';
import './App.scss';
import { Row, Col } from 'reactstrap';
import WeatherDisplay from '../WeatherDisplay';

class App extends Component {
    state = {
        lat: null,
        lon: null
    }

    componentDidMount() {
        const getLocation = () => {
            if ('geolocation' in navigator) {
                navigator.geolocation.getCurrentPosition((position) => {
                    this.setState({ lat: position.coords.latitude, lon: position.coords.longitude });
                });
            } else {
                alert("Geolocation Failed. This usually means access was denied or HTTPS isn't running.");
            }
        }
        getLocation();

        /*  ////Sadness////
        const getWeather = async () => {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat={${this.state.lat}}&lon={${this.state.lon}}&appid={5898622079e2a6f63e6739d881a756b4}`);
            const weather = await response.url;
            console.log(weather);
        }
        getWeather()
            .catch(error => {
                console.log("There was an error:", error);
            });
        */
    }

    handleClick = () => {
        console.log('button clicked');
    }

    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <WeatherDisplay
                            lat={this.state.lat}
                            lon={this.state.lon}
                            handleClick={this.handleClick}
                        />
                    </Col>
                </Row>
            </div>
        )
    }
};

export default App;
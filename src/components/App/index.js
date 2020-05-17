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

    getWeather = async () => {
        const response = (await fetch(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&appid=fdca481f9e858844aede00aa6a7749c2`).catch(err => console.log(err)));
        const weather = response.json()
        console.log(weather);
    }

    renderContent = () => {
        if (this.state.lon && this.state.lat) {
            this.getWeather();
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
        } else {
            return (<h1 className="text-center">Acquiring Device Coordinates</h1>)
        }
    }

    render() {
        return this.renderContent();
    }
};

export default App;
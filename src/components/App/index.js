import React, { Component } from 'react';
import '../../apis/geolocation';
import './App.scss';
import { Row, Col } from 'reactstrap';
import WeatherDisplay from '../WeatherDisplay';

class App extends Component {
    state = {
        lat: null,
        lon: null
    }

    componentDidMount() {
        const getLocation = async () => {
            if ('geolocation' in navigator) {
                await navigator.geolocation.getCurrentPosition((position) => {
                    this.setState({ lat: position.coords.latitude, lon: position.coords.longitude });
                });
            } else {
                await console.log("Geolocation Failed. This usually means access was denied or HTTPS isn't running.");
            }
        }
        getLocation();
    }




    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <WeatherDisplay
                            lat={this.state.lat}
                            lon={this.state.lon}
                        />
                    </Col>
                </Row>
            </div>
        )
    }
};

export default App;
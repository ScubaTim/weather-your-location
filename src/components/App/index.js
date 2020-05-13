import React, { Component } from 'react';
import '../../apis/geolocation';
import { Row, Col } from 'reactstrap';
import { getLocation } from './App.scss';
import WeatherDisplay from '../WeatherDisplay';

class App extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <WeatherDisplay />
                    </Col>
                </Row>
            </div>
        )
    }
};

export default App;
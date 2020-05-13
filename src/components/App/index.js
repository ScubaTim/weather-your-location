import React, { Component } from 'react';
import '../../apis/geolocation';
import { Row, Col } from 'reactstrap';
import WeatherDisplay from '../WeatherDisplay';
import { getLocation } from '../../apis/geolocation/index';

class App extends Component {
    componentDidMount() {
        getLocation()
    }
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
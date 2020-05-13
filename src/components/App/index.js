import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import './App.scss';
import WeatherDisplay from '../WeatherDisplay';

class App extends Component {
    render() {
        return (
            <div>
                <Row className="text-center">
                    <Col>
                        <WeatherDisplay />
                    </Col>
                </Row>
            </div>
        )
    }
};

export default App;
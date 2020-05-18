import React from 'react';
import { Row, Col, Table } from 'reactstrap';
import './WeatherDisplay.scss';

const WeatherDisplay = (props) => {
    return (
        <div className="main-display">
            <div className="mx-4">
                <Row>
                    <Col>
                        <h1 className="display-font">Current Weather</h1>
                        <p className="small-text text-center mb-3">Longitude: {props.lon}  Latitude: {props.lat} </p>
                    </Col>
                </Row>
                <Row className="text-center my-2">
                    <Col>
                        <strong className="light-text display-font">CURRENT CONDITIONS: {props.message}</strong>
                    </Col>
                </Row>
                <Row>
                    <Col className="ml-3">
                        <Table className="ml-3" size="sm" borderless>
                            <thead>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Temperature:</strong> {props.temp}&#176;F</td>
                                    <td><strong>High:</strong> {props.highTemp}&#176;F</td>
                                </tr>
                                <tr>
                                    <td><strong>Humidity:</strong> {props.humidity}%</td>
                                    <td><strong>Low:</strong> {props.lowTemp}&#176;F</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default WeatherDisplay;
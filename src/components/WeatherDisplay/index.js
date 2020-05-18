import React from 'react';
import { Row, Col, Table } from 'reactstrap';
import './WeatherDisplay.scss';

const WeatherDisplay = (props) => {
    console.log(props)
    return (
        <div className="main-display">
            <div className="mx-4">
                <Row>
                    <Col className="text-center">
                        <h1 className="display-font">Current Weather</h1>
                        <strong>In {props.city}</strong>
                        <p className="small-text">Longitude: {props.lon}  Latitude: {props.lat} </p>
                    </Col>
                </Row>
                <Row className="text-center my-4">
                    <Col>
                        <img src={`https://openweathermap.org/img/wn/${props.icon}@2x.png`} alt="weather icon"></img>
                        {props.message}
                    </Col>
                </Row>
                <Row>
                    <Col className="ml-3">
                        <Table className="ml-3" size="sm" borderless>
                            <thead>
                            </thead>
                            <tbody className="testborder">
                                <tr>
                                    <td><strong>Temperature:</strong> {props.temp}&#176;F</td>
                                    <td><strong>High:</strong> {props.highTemp}&#176;F</td>
                                </tr>
                                <tr>
                                    <td><strong>Humidity:</strong> {props.humidity}%</td>
                                    <td><strong>Low:</strong> {props.lowTemp}&#176;F</td>
                                </tr>
                                <tr>
                                    <td><strong>Wind Speed:</strong> {props.windSpeed}mph</td>
                                    <td><strong>Direction:</strong> {props.windDirection}&#176;</td>
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
import React from 'react';
import { Row, Col, Table } from 'reactstrap';
import './WeatherDisplay.scss';

const WeatherDisplay = (props) => {
    console.log(props)
    return (
        <div className="main-display">
            <div>
                <Row>
                    <Col className="text-center mb-2">
                        <h1 className="display-font">Current Weather</h1>
                        <p className="small-text">Longitude: {props.lon}  Latitude: {props.lat} </p>
                        <strong>In {props.city}</strong>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="center">
                            <img src={`https://openweathermap.org/img/wn/${props.icon}@2x.png`} alt="weather icon"></img>
                            <strong>{props.message}</strong>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Table className="ml-4 pl-1" size="sm" borderless>
                            <thead>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Temperature:</strong> {props.temp}&#176; F</td>
                                    <td><strong>Feels Like:</strong> {props.feelsLike}&#176; F</td>
                                </tr>
                                <tr>
                                    <td><strong>Humidity:</strong> {props.humidity}%</td>
                                    <td><strong>Pressure:</strong> {props.pressure} hPa</td>
                                </tr>
                                <tr>
                                    <td><strong>Wind Speed:</strong> {props.windSpeed} mph</td>
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
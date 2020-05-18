import React from 'react';
import { Row, Col, Table } from 'reactstrap';
import './WeatherDisplay.scss';

const WeatherDisplay = (props) => {
    console.log(props);
    return (
        <div className="main-display">
            <div className="pb-2 mx-4">
                <Row>
                    <Col>
                        <h1 className="display-font">Current Weather</h1>
                        <p className="small-text text-center">For:</p>
                        <p className="small-text text-center">Longitude: {props.lon}  Latitude: {props.lat} </p>
                    </Col>
                </Row>
                <Row className="text-center mt-3 mb-2">
                    <Col>
                        <h5 className="display-font light-text">It is currently raining outside.</h5>
                    </Col>
                </Row>
                <Row className="mx-2">
                    <Col>
                        <Table className="ml-3" size="sm" borderless>
                            <thead>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Temperature:</strong> {props.temp}&#176;F</td>
                                    <td><strong>High:</strong> {props.highTemp}&#176;F</td>
                                </tr>
                                <tr>
                                    <td><strong>Percipitation:</strong> {props.percip}</td>
                                    <td><strong>Low:</strong> {props.lowTemp}&#176;F</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </div>

        </div>
    )
}

export default WeatherDisplay;
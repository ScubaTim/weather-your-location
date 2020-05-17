import React from 'react';
import { Row, Col, Table, Button } from 'reactstrap';
import './WeatherDisplay.scss';

const WeatherDisplay = (props) => {
    return (
        <div className="main-display">
            <div className="my-1 pb-2 mx-4">
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
                <Row className="mx-2 px-5">
                    <Col>
                        <Table size="sm" borderless>
                            <thead>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Temperature:</strong> 90&#176;F</td>
                                    <td><strong>High:</strong> 90&#176;F</td>
                                </tr>
                                <tr>
                                    <td><strong>Percipitation:</strong> 50%</td>
                                    <td><strong>Low:</strong> 20&#176;F</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
                <Row className="mx-2 mt-3 mb-2">
                    <Col>
                        <Button
                            onClick={props.handleClick}
                            className="btn p-2"
                            color="primary"
                            block
                        >Get Weather</Button>
                    </Col>
                </Row>
            </div>

        </div>
    )
}

export default WeatherDisplay;
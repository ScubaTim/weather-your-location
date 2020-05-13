import React from 'react';
import { Row, Col, Table, Button } from 'reactstrap';
import './WeatherDisplay.scss';

const WeatherDisplay = (props) => {
    return (
        <div className="main-display">
            <Row>
                <Col className="mt-4 mb-3">
                    <h1>Current Weather</h1>
                </Col>
            </Row>
            <Row>
                <Col className="mx-5 my-2">
                    <Table >
                        <thead>
                            <tr>
                                <th>Temperature</th>
                                <th>High</th>
                                <th>Low</th>
                                <th>Percipitation</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>90F</td>
                                <td>9000F</td>
                                <td>20F</td>
                                <td>100%</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <Row className="mx-2">
                <Col className="mx-4 mb-5">
                    <Button className="btn mb-1 p-2" color="primary" block >Get Weather</Button>
                </Col>
            </Row>
        </div>
    )
}

export default WeatherDisplay;
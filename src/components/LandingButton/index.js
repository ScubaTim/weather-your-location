import React from 'react';
import { Button } from 'reactstrap';
import './LandingButton.scss';

const LandingButton = (props) => {
    return (
        <Button 
            onClick={props.handleLaunch}
            className="landing-button"
            color="primary"
        >Get Local Weather</Button>
    );
}

export default LandingButton;
import React from 'react';
import './BlackButton.css';
import { Button } from 'react-bootstrap';

class BlackButton extends React.Component {
    render() {
        let classes = "black-button " + this.props.className;

      return (
        <Button className={classes}>
            {this.props.text}
        </Button>
      );
    }
}

export default BlackButton;
import React from 'react';
import './BlackButton.css';
import { Button } from 'react-bootstrap';

class BlackButton extends React.Component {

    constructor(props) {
        super(props);
        // this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick = function(e) {
        //this.props.onChangeValue(e.target.value);
    }
  
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
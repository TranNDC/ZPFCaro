import React from 'react';
import './RectButton.css';
import { Button } from 'react-bootstrap';

class RectButton extends React.Component{

    constructor(props) {
      super(props);
      // this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick = function(e) {
      // this.props.onChangeValue(e.target.value);
    }

    render() {
      let classes = this.props.className + " rect-btn";
      
      if (this.props.textColor == 'black') {
        classes += " text-black small-width";
      }

      if (this.props.background == 'gray') {
        classes += " background-gray";
      }

      return <Button className={classes}>{this.props.text}</Button>;
  }
}

export default RectButton;
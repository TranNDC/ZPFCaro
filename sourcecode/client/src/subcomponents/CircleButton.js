import React from 'react';
import './CircleButton.css';
import { Button } from 'react-bootstrap';

class CircleButton extends React.Component {

    constructor(props) {
        super(props);
        // this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick = function(e) {
        //this.props.onChangeValue(e.target.value);
    }
  
    render() {
        let classes = this.props.className + " circleButton ";

        switch (this.props.type) {
            case 'profile':
                classes += "fa fa-user";
                break;
            case 'rules':
                classes += "fa fa-book";
                break;
            case 'info':
                classes += "fa fa-info";
                break;
            case "settings":
                classes += "fa fa-cog";
                break;
            case 'logout':
                classes += "fa fa-sign-out";
                break;
            default:
                break;
        }

      return (
        <Button className={classes}></Button>
      );
    }
}

export default CircleButton;
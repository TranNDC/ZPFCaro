import React from 'react';

import './CircleButton.css';

import { Button } from 'react-bootstrap';

class CircleButton extends React.Component{

    constructor(props){
      super(props);
    //   this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick = function(e){
    //this.props.onChangeValue(e.target.value);
    }
  
    render(){
        let classes = "circleButton";
        let icon;
        switch (this.props.type) {
            case 'settings':
                icon = <i class="fa fa-cog"></i>;
                break;
            case 'profile':
                icon = <i class="fa fa-user"></i>;
                break;
            case 'logout':
                icon = <i class="material-icons">exit_to_app</i>;
                break;
            case 'info':
                icon = <i class="fa fa-info"></i>;
                break;
            case 'rules':
                icon = <i class="fa fa-book"></i>;
                break;
            default:
                break;
        }
      return (<Button className={classes}>
       {this.props.icon}
      </Button>);
  }
}

export default CircleButton;
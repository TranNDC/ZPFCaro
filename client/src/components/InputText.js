import React from 'react';
import ReactDOM from 'react-dom';
import './InputText.css';

import { InputGroup, FormControl, Button, Form, Container } from 'react-bootstrap';

class InputText extends React.Component{

  constructor(props){
    super(props);
    // this.handleClick = this.handleClick.bind(this);
  }

  handleClick = function(e){
    // this.props.onChangeValue(e.target.value);
  }

  render(){
    return (
  <InputGroup className="mb-3 input-text">
    <InputGroup.Prepend>
      <InputGroup.Text id="basic-addon1">
      {this.props.icon}
      </InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl
      placeholder={this.props.placeholder}
      type={this.props.type}
      onChange={this.handleClick}
    />
  </InputGroup>

      );  
    }

}

export default InputText;
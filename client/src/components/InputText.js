import React from 'react';
import './InputText.css';
import { InputGroup, FormControl, Button, Form, Container } from 'react-bootstrap';

class InputText extends React.Component {

  constructor(props) {
    super(props);
    // this.handleClick = this.handleClick.bind(this);
  }

  handleClick = function(e) {
    // this.props.onChangeValue(e.target.value);
  }

  render() {
    return (
      <InputGroup className="input-text">
        <InputGroup.Prepend>
          <InputGroup.Text>
            <img src={this.props.icon} alt={this.props.alt} height="40" width="40"/>
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
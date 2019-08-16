import React from 'react';
import './EditText.css';
import { InputGroup, FormControl } from 'react-bootstrap';

class EditText extends React.Component {

    constructor(props) {
      super(props);
      // this.handleClick = this.handleClick.bind(this);
    }

    render() {
        let icon, alt, placeholder, type, pattern, title, required, value, disabled;

        if (this.props.type === "newpassword") {
            icon = require("../media/icon-seen.png");
        }
        else {
            icon = require("../media/icon-edit.png");
            disabled = "disabled";
        }
        
        switch (this.props.type) {
            case "password":
                alt = "icon-password";
                type = "password";
                placeholder = "***************";
                pattern = ".{6,}";
                title = "Password contains at least 6 characters";
                required = "required";
                break;
            case "newpassword":
                alt = "icon-password";
                type = "password";
                placeholder = "New Password";
                pattern = ".{6,}";
                title = "Password contains at least 6 characters";
                required = "required";
                break;
            case "email":
                alt = "icon-email";
                type = "email";
                value = this.props.email;
                pattern = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$";
                required = "required";
                break;
            case "displayedname":
                alt = "icon-displayed-name";
                type = "text";
                value = this.props.displayedname;
                pattern = ".{5,25}";
                title = "Displayed name contains 5 to 25 characters";
                required = "required";
                break;
            default:
                break;
        }

        return (
            <InputGroup className="input-text">
                <FormControl disabled={disabled}
                    placeholder={placeholder}
                    type={type}
                    pattern={pattern}
                    title={title}
                    value={value}
                    required={required}
                    onChange={this.handleClick}
                />
                <InputGroup.Append>
                    <InputGroup.Text>
                        <a href="#">
                            <img src={icon} alt={alt}/>
                        </a>
                    </InputGroup.Text>
                </InputGroup.Append>
            </InputGroup>
        );
    }
}

export default EditText;
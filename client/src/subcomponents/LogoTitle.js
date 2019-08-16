import React from 'react';
import './LogoTitle.css';

class LogoTitle extends React.Component {

    constructor(props) {
        super(props);
        // this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return (
            <div className="logo-title">
                <img src={require("../media/logo.png")} alt="ZPF Caro Logo" />                
                <div className="content-div">
                    <span className="content">{this.props.text}</span>
                </div>
            </div>
        );
    }
}

export default LogoTitle;
import React from 'react';
import './TableTitle.css';

class TableTitle extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="tt-title">
                <label className="tt-label">{this.props.text}</label> 
            </div>
        );
    }
}

export default TableTitle;
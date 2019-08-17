import React from 'react';
import './UserAvatar.css';

class UserAvatar extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <img className="ua-avatar" src={this.props.avatar} alt="profile avatar"/>
        );
    }
}

export default UserAvatar;
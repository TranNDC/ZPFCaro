import React from 'react';
import './LeaderBoardInfoRow.css';
import { Row, Col } from 'react-bootstrap';

class LeaderBoardInfoRow extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let icon, alt, points;
        points = Number(this.props.points).toLocaleString('en');

        switch (this.props.rank) {
            case 1:
                icon = require('../media/1st.png');
                alt = "icon-1st";
                break;
            case 2:
                icon = require('../media/2nd.png');
                alt = "icon-2nd";
                break;
            case 3:
                icon = require('../media/3rd.png');
                alt = "icon-3rd";
                break;
            case 4:
                icon = require('../media/4th.png');
                alt = "icon-4th";
                break;
            case 5:
                icon = require('../media/5th.png');
                alt = "icon-5th";
                break;
            case 6: 
                icon = require('../media/6th.png');
                alt = "icon-6th";
                break;
            default: break;
        }

        return (
            <div className="lbir-background">
                <div className="lbir-title">
                    <img className="lbir-img" src={require('../media/1st.png')} alt={alt}/>
                    <label className="lbir-label">{this.props.displayedname}</label>
                    <label className="lbir-points">{points} pts</label>
                </div>
            </div>
        );
    }
}

export default LeaderBoardInfoRow;
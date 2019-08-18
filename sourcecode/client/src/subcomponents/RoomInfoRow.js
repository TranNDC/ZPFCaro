import React from 'react';
import './RoomInfoRow.css';
import { Row, Col } from 'react-bootstrap';

class RoomInfoRow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let className = this.props.className + " rir-row";
        let betpts = Number(this.props.betpoints).toLocaleString('en');

        return (
            <Row className={className}>
                <Col xs="1" className="rir-rID">
                    <label className="rir-labelRID">{this.props.roomid}</label>
                </Col>
                <Col xs="7" className="rir-name">
                    <label className="rir-labelRoomName">{this.props.roomname}</label>
                    <label className="rir-labelDisplayedName">> {this.props.displayedname}</label>
                </Col>
                <Col xs="3" className="rir-points">
                    {(() => {
                        if (this.props.betpoints != 0)  {
                            return (
                                <div>
                                    <img src={require("../media/rupee.png")} alt="bet-points-icon" className="rir-imgRupee"></img>
                                    <label className="rir-labelPoints">{betpts} pts</label>
                                </div>
                            );
                        }
                    }) ()}
                </Col>
                <Col xs="1" className="rir-password">
                    {(() => {
                        if (this.props.password != null) {
                            return (
                                <img src={require("../media/icon-room-password.png")} className="rir-imgPassword"></img>
                            );
                        }
                    }) ()}
                </Col>
            </Row>
        );
    }
}

export default RoomInfoRow;
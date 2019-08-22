import React from 'react';
import RoomInfoRow from '../subcomponents/RoomInfoRow';
import TableTitle from '../subcomponents/TableTitle';
import './GameRooms.css';
import { Row } from 'react-bootstrap';

class GameRooms extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const ListGameRoom = [
            {id: "R01", roomName: "Vao day solo nhe anh em", hostId: 5, hostDisplayedName: "Trần Kiến Quốc",  betPoints: 500000, hasPassword: "123123", isPlaying: 0},
            {id: "R02", roomName: "Quanh cho no chet cha no luon1", hostId: 1, hostDisplayedName: "Nguyen Do Cat Tran",  betPoints: 0, hasPassword: null, isPlaying: 0},
            {id: "R03", roomName: "Chien het minh !!!!", hostId: 2, hostDisplayedName: "Tran Trong Phuc",  betPoints: 30000, hasPassword: null, isPlaying: 0},
            {id: "R04", roomName: "Chan qua, choi cho het chan ne", hostId: 6, hostDisplayedName: "Nguyen Minh Toan",  betPoints: 0, hasPassword: "123123", isPlaying: 0},
            {id: "R05", roomName: "Yolo !!!!!!!!!!!!!", hostId: 10, hostDisplayedName: "Ly Hai Duyen",  betPoints: 3000, hasPassword: null, isPlaying: 0},
                {id: "R05", roomName: "012345678901234567890123456789", hostId: 10, hostDisplayedName: "Ly Hai Duyen",  betPoints: 3000, hasPassword: null, isPlaying: 0},
                {id: "R05", roomName: "Yolo !!!!!!!!!!!!!", hostId: 10, hostDisplayedName: "Ly Hai Duyen",  betPoints: 3000, hasPassword: null, isPlaying: 0},
                {id: "R05", roomName: "Yolo !!!!!!!!!!!!!", hostId: 10, hostDisplayedName: "Ly Hai Duyen",  betPoints: 3000, hasPassword: null, isPlaying: 0},
                {id: "R05", roomName: "Yolo !!!!!!!!!!!!!", hostId: 10, hostDisplayedName: "Ly Hai Duyen",  betPoints: 3000, hasPassword: null, isPlaying: 0},
                {id: "R05", roomName: "Yolo !!!!!!!!!!!!!", hostId: 10, hostDisplayedName: "Ly Hai Duyen",  betPoints: 3000, hasPassword: null, isPlaying: 0},
                {id: "R05", roomName: "Yolo !!!!!!!!!!!!!", hostId: 10, hostDisplayedName: "Ly Hai Duyen",  betPoints: 3000, hasPassword: null, isPlaying: 0},
                {id: "R05", roomName: "Yolo !!!!!!!!!!!!!", hostId: 10, hostDisplayedName: "Ly Hai Duyen",  betPoints: 3000, hasPassword: null, isPlaying: 0},
                {id: "R05", roomName: "Yolo !!!!!!!!!!!!!", hostId: 10, hostDisplayedName: "Ly Hai Duyen",  betPoints: 3000, hasPassword: null, isPlaying: 0},
                {id: "R05", roomName: "Yolo !!!!!!!!!!!!!", hostId: 10, hostDisplayedName: "Ly Hai Duyen",  betPoints: 3000, hasPassword: null, isPlaying: 0},
                {id: "R05", roomName: "Yolo !!!!!!!!!!!!!", hostId: 10, hostDisplayedName: "Ly Hai Duyen",  betPoints: 3000, hasPassword: null, isPlaying: 0},
                {id: "R05", roomName: "Yolo !!!!!!!!!!!!!", hostId: 10, hostDisplayedName: "Ly Hai Duyen",  betPoints: 3000, hasPassword: null, isPlaying: 0},
                {id: "R05", roomName: "Yolo !!!!!!!!!!!!!", hostId: 10, hostDisplayedName: "Ly Hai Duyen",  betPoints: 3000, hasPassword: null, isPlaying: 0},
                {id: "R05", roomName: "Yolo !!!!!!!!!!!!!", hostId: 10, hostDisplayedName: "Ly Hai Duyen",  betPoints: 3000, hasPassword: null, isPlaying: 0},
                {id: "R05", roomName: "Yolo !!!!!!!!!!!!!", hostId: 10, hostDisplayedName: "Ly Hai Duyen",  betPoints: 3000, hasPassword: null, isPlaying: 0},
            {id: "R-HIDE", roomName: "Em ga lam, nhe tay voi em", hostId: 9, hostDisplayedName: "Tran Minh An",  betPoints: 0, hasPassword: null, isPlaying: 1}
        ];

        return (
            <div>
                <TableTitle text="GAME ROOM" className="gr-spacing-bottom" />
                <Row className="gr-row">
                    {
                        ListGameRoom.map((ele) => {
                            if (ele.isPlaying == 0) {
                                return (
                                    <RoomInfoRow roomid={ele.id} roomname={ele.roomName} displayedname={ele.hostDisplayedName} betpoints={ele.betPoints} password={ele.hasPassword} className="spacing" />
                                );
                            }
                        })
                    }
                </Row>
            </div>
        );
    }
}

export default GameRooms;
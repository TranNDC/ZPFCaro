import React from 'react';
import LeaderBoardInfoRow from '../subcomponents/LeaderBoardInfoRow';
import TableTitle from '../subcomponents/TableTitle';
import './LeaderBoard.css';

class LeaderBoard extends React.Component {
    constructor(props) {
        super(props);  
    }

    render() {
        return (
            <div>
                <TableTitle text="LEADERBOARD" className="spacing"/>
                <LeaderBoardInfoRow rank="1" displayedname="Trần Kiến Quốc" points="1000000" className="spacing" />
                <LeaderBoardInfoRow rank="2" displayedname="Trần Kiến Quốc" points="800000" className="spacing" />
                <LeaderBoardInfoRow rank="3" displayedname="Trần Kiến Quốc" points="754812" className="spacing" />
                <LeaderBoardInfoRow rank="4" displayedname="Trần Kiến Quốc" points="600000" className="spacing" />
                <LeaderBoardInfoRow rank="5" displayedname="Trần Kiến Quốc" points="325105" className="spacing" />
                <LeaderBoardInfoRow rank="6" displayedname="Trần Kiến Quốc" points="258124" className="spacing" />
            </div>
        );
    }
}

export default LeaderBoard;
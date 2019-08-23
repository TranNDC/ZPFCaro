import React from 'react';
import './EndGameBox.css';
import '../subcomponents/RectButton.css';
import { Modal, Button } from 'react-bootstrap';

class EndGameBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showEndGameModal: this.props.stateEGB };

        this.quitGame = this.quitGame.bind(this);
        this.continueGame = this.continueGame.bind(this);
    }

    quitGame() {
        this.setState({ showEndGameModal: false });
        /* Process Quit Game
           .................
        */
    }

    continueGame() {
        this.setState({ showEndGameModal: false });
        /* Process Continue Game
           .....................
        */
    }

    render() {
        let headingEndGame = this.props.headingEndGame;
        let titleEndGame = this.props.titleEndGame;
        let subTitleEndGame = this.props.subTitleEndGame;

        return (
            <Modal show={this.state.showEndGameModal} className="endgamebox-heightmodal animated tada">
                <div id="endgamebox-heading">
                    <span>{headingEndGame}</span>
                </div>
                <div className="endgamebox-labelContent">
                    <div>
                        <label className="endgamebox-label endgamebox-titleEndGame">{titleEndGame}</label>
                        <label className="endgamebox-label endgamebox-askContinue">{subTitleEndGame}</label>
                    </div>
                </div>
                <div className="endgamebox-margintop">
                    <Button className="endgamebox-rect-btn endgamebox-quit" onClick={this.quitGame}>Quit</Button>
                    {this.props.isContinue && <Button className="endgamebox-rect-btn endgamebox-continue endgamebox-marginLeft" onClick={this.continueGame}>Continue</Button>}
                </div>
            </Modal>
        );
    }
}

export default EndGameBox;
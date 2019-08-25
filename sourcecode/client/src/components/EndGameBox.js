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

        let headingEndGame;
        let titleEndGame;
        let subTitleEndGame;
        let isContinue;
        switch (this.props.type) {
          case "win":
            headingEndGame = "YOU WIN";
            titleEndGame = "Congratulations, you won the game!";
            // subTitleEndGame= 'Do you want to play new game?'
            isContinue = false;
            break;
          case "lose":
            headingEndGame = "YOU LOSE";
            titleEndGame = "Don't be sad, try harder!";
            isContinue = false;
            // subTitleEndGame= 'Do you want to play new game?'
            break;
           case "draw":
                headingEndGame = "DRAW GAME";
                titleEndGame = "Both of you do great!";
                isContinue = false;
                // subTitleEndGame= 'Do you want to play new game?'
                break;
        }

        return (
            <Modal show={this.props.stateEGB} className="endgamebox-heightmodal animated tada">
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
                    {isContinue && <Button className="endgamebox-rect-btn endgamebox-continue endgamebox-marginLeft" onClick={this.continueGame}>Continue</Button>}
                </div>
            </Modal>
        );
    }
}

export default EndGameBox;
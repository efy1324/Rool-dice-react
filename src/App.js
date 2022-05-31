import React from 'react';
import './App.css';
import Button from './components/Button/btn';
import Dice from './components/Dice/Dice';
import InputNum from './components/Input/input';
import Players from './components/Player/Players';




class App extends React.Component {
  state = {
    currentPlayer: false, player1score: 0, winNum: 100,
    player1currentScore: 0, player2score: 0, player2currentScore: 0, dice1: null, dice2: null
  }
  onClickEventNewGame = (e) => {
    console.log(e);
    this.setState({ player1currentScore: 0, player1score: 0, player2score: 0, player2currentScore: 0 });
    this.setState({ currentPlayer: true });
  }

  insertDiceData = (diceData) => {
    let num1 = diceData[0];
    let num2 = diceData[1];
    console.log(diceData);
    this.setState({ dice1: diceData[0], dice2: diceData[1] })
    if (num1 === 6 && num2 === 6) {
      this.setState({ player1currentScore: 0, player2currentScore: 0 });
      this.setState(prevState => {
        return { currentPlayer: !prevState.currentPlayer };
      });
    }
    else if (this.state.currentPlayer) {
      this.setState(prevState => {
        return { player1currentScore: prevState.player1currentScore + num1 + num2 };
      });
    } else {
      this.setState(prevState => {
        return { player2currentScore: prevState.player2currentScore + num1 + num2 };
      });
    }
  }

  
  onClickEventHold = (e) => {
    if (this.state.currentPlayer) {
      this.setState(prevState => {
        return { player1score: prevState.player1score + prevState.player1currentScore, player1currentScore: prevState.player1currentScore = 0 };
      });
    } else {
      this.setState(prevState => {
        return { player2score: prevState.player2score + prevState.player2currentScore, player2currentScore: prevState.player2currentScore = 0 };
      });
    }
    this.setState(prevState => {
      return { currentPlayer: !prevState.currentPlayer };
    });
  }
  gettinInputFromUser = (input) => {
    this.setState({ winNum: input });
  }
  winOrloseGame = () => {
    const winNum = this.state.winNum;
    const player1 = this.state.player1score;
    const player2 = this.state.player2score;
    if (player1 === winNum) {
      alert("player1 is the winner")
    } else if (player2 === winNum) {
      alert("player2 is the winner")
    } else if (player1 > winNum) {
      alert("player2 is the winner")
    } else if (player2 > winNum) {
      alert("player1 is the winner")
    }
  }
 

  render() {
    this.winOrloseGame();
    return (
      <div className='page'>
        <div className='player1'>
          <Players
            playerTitleName="PLAYER 1"
            playerCurrentScore={this.state.player1currentScore}
            playerScore={this.state.player1score} />
        </div>
        <div className='middle'>
          <Button btnText="NEW GAME" icon={"plus"} onClickEvent={this.onClickEventNewGame} />
          <Button btnText="HOLD" icon={""} onClickEvent={this.onClickEventHold} />
          <Dice gettindata={this.insertDiceData} />
          {/* {this.state.dice1}
          <br />
          {this.state.dice2} */}
          <InputNum gettinInput={this.gettinInputFromUser} />
        </div>
        <div className='player2'>
          <Players
            playerTitleName="PLAYER 2"
            playerCurrentScore={this.state.player2currentScore}
            playerScore={this.state.player2score} />
        </div>
      </div>
    );
  }
}
// hold function that will add current score to score and passing the turn to the other player
// newGame function that will bring back to the deafult values of score and currentScore.
// how to do one turn to each player1 
// score = 0 onClickHold setState(score: score +currentScore) if score ===input.value the player win 
// else if score >input.value player lose
// current score = setState currentScore: currenstScore + dice1 + dice2 every click on Rool Dice if dice1 &&dice2 ===6
// currentScore = 0

//
export default App;


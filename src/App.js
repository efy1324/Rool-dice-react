import React from 'react';
import './App.css';
import Button from './components/Button/btn';
import Dice from './components/Dice/Dice';
import InputNum from './components/Input/input';
import Players from './components/Player/Players';




class App extends React.Component {
  state = {}
  onClickEventNewGame = (e) => {
    console.log(e);
  }
  render() {
    return (
      <div className='page'>
        <div>
          <Players playerTitleName="PLAYER 1" playerCurrentScore="100" playerScore="50" />
        </div>
        <div>
        <Button btnText="NEW GAME" icon={""} onClickEvent={this.onClickEventNewGame} />
        <Button btnText="ROLL DICE" icon={""} />
        <Button btnText="HOLD" icon={""} />
        <InputNum />
        <Dice />
        </div>
        <div>
          <Players playerTitleName="PLAYER 2" playerCurrentScore="90" playerScore="99" />
        </div>
      </div>
    );
  }
}

export default App;


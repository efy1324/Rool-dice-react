import React from 'react';
import Button from '../Button/btn';
import './Dice.css'

class Dice extends React.Component {
  state = { num: null, num1: null }
  numbers = [1, 2, 3, 4, 5, 6];
  numberso = [1, 2, 3, 4, 5, 6];
  rollDice = (numbers, numberso) => {
    const choosenNum = Math.floor(Math.random(numbers) * 6) + 1
    const choosenNum1 = Math.floor(Math.random(numberso) * 6) + 1
    console.log(choosenNum1, choosenNum);
    this.setState({ num: choosenNum, num1: choosenNum1 });
    this.props.gettindata([choosenNum, choosenNum1]);
  }
  render() {
    return (
      <div className='diceholder' >
        <Button onClickEvent={this.rollDice} btnText="ROLL DICE" />
        {/* you got: dice1: {this.state.num}  
         dice2: {this.state.num1} */}
        <div className='dicesImg'>
          <span className={`num${this.state.num}`}>{this.state.num}</span>
          <br />
          <span className={`num${this.state.num1}`}>{this.state.num1}</span>
        </div>
      </div>
    );
  }
}

export default Dice;
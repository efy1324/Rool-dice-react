import React from 'react';


class Dice extends React.Component {
  state = { num: "" }
  rollDice = (numbers) => {
    const choosenNum = Math.floor(Math.random(numbers) * 6)
    switch (choosenNum) {
      case 1:
        this.setState({num: "one"})
        break;
    
      case 2:
        this.setState({num: "two"})
        break;
    
      case 3:
        this.setState({num: "three"})
        break;
    
      case 4:
        this.setState({num: "four"})
        break;
    
      case 5:
        this.setState({num: "five"})
        break;
    
      case 6:
        this.setState({num: "six"})
        break;
    }
    return choosenNum;
  }
  render() {
    return (
      <div onClick={this.rollDice} className={this.state.num}>
      you got:  {this.state.num}
      </div>
    );
  }
}

export default Dice;
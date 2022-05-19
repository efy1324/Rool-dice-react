import React from 'react';
import CurrentScore from './CurrentScore';
import Score from './score';
import Title from './Title';


class Players extends React.Component {
  state = {}
  render() {
    return (
      <div>
        <Title titleName={this.props.playerTitleName} />
        <CurrentScore numCurrentScore  = {this.props.playerCurrentScore} />
        <Score numScore = {this.props.playerScore} />
      </div>
    );
  }
}

export default Players;
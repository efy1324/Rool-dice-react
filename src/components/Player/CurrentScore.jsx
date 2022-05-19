import React from 'react';


class CurrentScore extends React.Component {
  state = {}
  render() {
    return (
      <div>
        <h5>CurrentScore: {this.props.numCurrentScore}</h5>
      </div>
    );
  }
}

export default CurrentScore;
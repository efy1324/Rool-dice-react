import React from 'react';


class Score extends React.Component {
  state = {  } 
  render() { 
    return (
      <div>
        <h4>Total score: {this.props.numScore}</h4>
        </div>
    );
  }
}
 
export default Score ;
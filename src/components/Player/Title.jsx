import React from 'react';

class Title extends React.Component {
  state = {  } 
  render() { 
    return (
      <div>
      <h6> {this.props.titleName}</h6>
      </div>
    );
  }
}
 
export default Title;
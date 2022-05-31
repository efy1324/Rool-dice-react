import React from 'react';
import './input.css'


class InputNum extends React.Component {
  state = { userInput: 100}
  onInputChange = (e) => {
    this.setState({ userInput: e.target.value },
       ()=> {this.props.gettinInput(this.state.userInput)});
  }
  
  render() {
    return (
      <>
        <input className='inputnum' onChange={this.onInputChange} type="text" value={this.state.userInput} />
       
      </>
    );
  }
}

export default InputNum;
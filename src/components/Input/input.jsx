import React from 'react';



class InputNum extends React.Component {
  state = { userInput: "20" }
  onInputChange = (e) => {
    console.log(1);
    this.setState({ userInput: e.target.value }, ()=> {console.log(this.state)});
  }
  render() {
    return (
      <>
        <input onChange={this.onInputChange} type="text" value={this.state.userInput} />
        {this.state.userInput}
      </>
    );
  }
}

export default InputNum;
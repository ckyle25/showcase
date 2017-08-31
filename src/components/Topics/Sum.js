import React, {Component} from 'react';

class Sum extends Component {
constructor(){
  super();
  this.state = {
    number1: 0,
    number2: 0,
    sum: null
  }
}

sumNums(){
  let total = parseInt(this.state.number1) + parseInt(this.state.number2);
  this.setState({
    sum: total
  })
}

inputUpdate1(num1){
  this.setState({
    number1: num1
  })
}

inputUpdate2(num2){
  this.setState({
    number2: num2
  })
}

  render() {
    return (
      <div className="puzzleBox sumPB">
        <h4>Sum</h4>
        <input className="inputLine" onChange={(a) => this.inputUpdate1(a.target.value)}></input>
        <input className="inputLine" onChange={(a) => this.inputUpdate2(a.target.value)}></input>
        <button className="confirmationButton" onClick={() => this.sumNums()}>Add</button>
        <span className="resultsBox">Sum:{this.state.sum}</span>
      </div>
    );
  }
}

export default Sum;

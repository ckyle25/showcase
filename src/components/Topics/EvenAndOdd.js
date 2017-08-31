import React, {Component} from 'react';

class EvenAndOdd extends Component {
  constructor(){
    super();
    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: ''
    }
  }

updateInput(val){
  this.setState({
    userInput: val
  })
}

splitList(){
  let tempArr = this.state.userInput.split(',')

  let evensArr = tempArr.filter((val) => {
    if(val % 2 === 0){
      return val;
    }
  })

  let oddArr = tempArr.filter((val) => {
    if(val % 2 !== 0){
      return val;
    }
  })

  this.setState({
    evenArray: evensArr,
    oddArray: oddArr
  })
}

  render() {
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4>Evens and Odds</h4>
        <input className="inputLine" onChange={(a) => this.updateInput(a.target.value)}></input>
        <button className="confirmationButton" onClick={() => this.splitList()}>Split</button>
        <span className="resultsBox">Evens:{JSON.stringify(this.state.evenArray)}</span>
        <span className="resultsBox">Odds:{JSON.stringify(this.state.oddArray)}</span>
      </div>
    );
  }
}

export default EvenAndOdd;

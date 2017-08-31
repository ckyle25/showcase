import React, {Component} from 'react';

class Palindrome extends Component {
  constructor(){
    super();
    this.state = {
      userInput:'',
      palindrome:''
    }
  }

checkPalindrome(str){
  let palYN = str==str.split('').reverse().join('') ? 'Yes':'No'

  this.setState({
    palindrome: palYN
  })
}

inputUpdate(str){
  this.setState({
    userInput: str
  })
}

  render() {
    return (
      <div className="puzzleBox palindromePB">
        <h4>Palindrome</h4>
        <input className="inputLine" onChange={(a) => this.inputUpdate(a.target.value)}></input>
        <button className="confirmationButton" onClick={() => this.checkPalindrome(this.state.userInput)}>Check</button>
        <span className="resultsBox">Palindrome:{this.state.palindrome}</span>
      </div>
    );
  }
}

export default Palindrome;

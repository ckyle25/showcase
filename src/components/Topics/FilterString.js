import React, {Component} from 'react';

class FilterString extends Component {
  constructor(){
    super();
    this.state = {
      unFilteredArray: ['James', 'Jessica', 'Melody', 'Tyler', 'Blake', 'Jennifer', 'Mark', 'Maddy'],
      userInput:'',
      filteredArray:[]
    }
  }

updateArray(str){
  let curArr = this.state.unFilteredArray
  let newArr = curArr.filter((val) => {
    return val.includes(str);
  })

  this.setState({
    filteredArray: newArr
  })
}

  inputUpdate(str){
    this.setState({
      userInput: str
    })
  }

  render() {
    return (
      <div className="puzzleBox FilterStringPB">
        <h4>Filter String</h4>
        <span className="puzzleText">Original: {JSON.stringify(this.state.unFilteredArray)}</span>
        <input className="inputLine" onChange={(a) => this.inputUpdate(a.target.value)}></input>
        <button className="confirmationButton" onClick={() => this.updateArray(this.state.userInput)}>Filter</button>
        <span className="resultsBox filterStringRB">{JSON.stringify(this.state.filteredArray)}</span>
      </div>
    );
  }
}

export default FilterString;

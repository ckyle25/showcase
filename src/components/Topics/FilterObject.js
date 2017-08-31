import React, {Component} from 'react';

class FilterObject extends Component {
constructor(){
  super();
  this.state = {
    unFilteredArray: [
        {
          name: 'Jimmy Joe',
          title: 'Hack0r',
          age: 12,
        },
        {
          name: 'Jeremy Schrader',
          age: 24,
          hairColor: 'brown'
        },
        {
          name: 'Carly Armstrong',
          title: 'CEO',
        }
                      ],
    userInput: '',
    filteredArray: []
  }
}

updateArray(str){
  let curArr = this.state.unFilteredArray
  let newArr = curArr.filter((obj) => {
    return obj.hasOwnProperty(str)
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
      <div className="puzzleBox filterObjectPB">
        <h4>Filter Object</h4>
        <span className="puzzleText">Original: {JSON.stringify(this.state.unFilteredArray)}</span>
        <input className="inputLine" onChange={(a) => this.inputUpdate(a.target.value)}></input>
        <button className="confirmationButton" onClick={() => this.updateArray(this.state.userInput)}>Filter</button>
        <span className="resultsBox filterObjectRB">{JSON.stringify(this.state.filteredArray)}</span>
      </div>
    );
  }
}

export default FilterObject;

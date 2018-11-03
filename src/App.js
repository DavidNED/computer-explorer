import React, { Component } from 'react';
import './App.css';
import './index';
const redux = require('redux')


const data =   {


    "Ivel Z3": {
      name: "Ivel Z3",
      manufacturer: "Ivasim",
      year: 1969,
      origin: "Croatia"
    },
    "Bally Astrocade": {
      name: "Bally Astrocade",
      manufacturer: "Bally Consumer Products",
      year: 1977,
      origin: "USA"
    },
    "Sord M200 Smart Home Computer": {
      name: "Sord M200 Smart Home Computer",
      manufacturer: "Sord Computer Corporation",
      year: 1971,
      origin: "Japan"
    },
    "Commodore 64": {
      name: "Commodore 64",
      manufacturer: "Commodore",
      year: 1982,
      origin: "USA"
    }
  }

  const selectData = () => {
  const option = document.getElementById('select').children;
    if (option.id === 'two'){
      return data['Ivel Z3']
    }
  
  }



const initialState = [];

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
  case 'ADD_MODEL':
    return [
      ...state,
      action.payload
    ]

  default:
    return state
  }
}
const store = redux.createStore(reducer)
const action = {
  type: 'ADD_MODEL',
  payload: {
    
  }
}

 
redux.createStore(reducer)
store.dispatch(action)

   
    
class App extends Component {
    constructor(props) {
    super(props)
    this.state = {value: 'Default'};console.log(this.state)
  

    this.updateSelection = this.updateSelection.bind(this);
}
  
updateSelection(event) {
  this.setState({value: event.target.value})}




  




  render() {
    return (
     <div className="App">
        <div className="computer-models">
        
        <select id="select" onChange={this.updateSelection} value={this.state.value}> 
    
          <option id="one" value="">-- pick a model --</option>
          <option id="two" value="Bally Astrocade">Bally Astrocade (1977)</option>
          <option id="three" value="Sord M200 Smart Home Computer">Sord M200 Smart Home Computer (1971)</option>
          <option id="four" value="Commodore 64">Commodore 64 (1982)</option>
          <option id="five" value="Ivel Z3">Ivel Z3 (1969)</option>
          
        
        </select>

        <button id="btn" onClick={reducer}>Add</button>
      
    
    </div>
    </div>
    );
       
  }
}


export default App;

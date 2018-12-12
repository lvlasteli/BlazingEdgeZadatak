import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//importing home component
import { Home } from "./components/Home";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colorhex: [],
      userInput: ''
    }
    this.LoadData=this.LoadData.bind(this);
    this.LoadData();
    this.LoadData();
    
  }
  LoadData() {
    fetch("http://www.colr.org/json/color/random")
    .then((res) => res.json())
    .then((data) => {
      this.setState(prevState => ({
        colorhex: [...prevState.colorhex, "#"+data.colors[0].hex]
      }));
    });
  }
  // componentWillMount () {
  //   //save 2 colors in state
  //   this.LoadData();
  //   this.LoadData();
  // }
  onUserInput(text) {
    this.setState({
      userInput: text.target.value
    });
  }
  render() {
    let comp;
    if(this.state.colorhex.length===2) {
      comp = (<Home listofrandomcolors={this.state.colorhex} userInput={this.state.userInput}/>)
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          Insert colors name:
          <input type="text" onChange={(event)=> this.onUserInput(event)}></input>
          {comp}
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {cardContract} from './EthereumSetup';

class App extends Component {



  constructor(props){
    super(props)
    this.state={
      "contacts": {}
    }
  }

  componentWillMount(){
    var data = cardContract.getCard()
    //console.log(JSON.parse(String(data)));
    this.setState({
      contacts: JSON.parse(String(data))
    })

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Business Card Smart Contract</h1>
        </header>
        <div>
        <h2>
          <h1>{this.state.contacts.name}</h1><br/>
          <span>{this.state.contacts.desc}</span><br/>
          <span>{this.state.contacts.email}</span><br/>
          <span><a href="{'http://'+this.state.contacts.www}" target="_blank">{this.state.contacts.www}</a></span>
        </h2>
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ListTodo from './Components/ListTodo'
import InputTodo from './Components/InputTodo'

class App extends Component {
  var1 = 'test1'
  state = {
    list: []
  }
  render() {
    console.log(this.state)
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          <InputTodo
            onSubmit={this._onSubmit.bind(this)} />
        </div>
        <ListTodo
          list={this.state.list}
          onDelete={this._onDelete.bind(this)}/>
      </div>
    );
  }
  _onSubmit(value) {
    if(!value)return
    const newItem = [...this.state.list]
    newItem.push(value)
    this.setState({list: newItem})
  }
  _onDelete(value) {
    if(!value)return
    const newItem = [...this.state.list]
    newItem.splice(value, 1)
    this.setState({list: newItem})
  }
}

export default App;

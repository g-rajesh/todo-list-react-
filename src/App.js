import React, {Component} from 'react';

import Display from './Components/DisplayList/DisplayList';
import Form from './Components/Form/Form';
import './App.css';

class App extends Component{

  state = {
    lists : []
  }

  addLists = (task) => {
    const newList = [...this.state.lists,task];
    this.setState({lists : newList});
  }

  deleteLists = (id) => {
    console.log(this.state.lists);
    const copy = [...this.state.lists];
    const filteredList = copy.filter(list => {
      return id !== list.id;
    });
    this.setState({lists : filteredList});
  }

  render(){
    return (
      <div className="App">
        <h2>Todo List</h2>
        <Display lists={this.state.lists} deleteList={this.deleteLists} />
        <Form add={this.addLists} length={this.state.lists.length} />
      </div>
    );
  }
}

export default App;
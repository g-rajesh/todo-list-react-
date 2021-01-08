import React, {Component} from 'react';

import styles from './Form.module.css';

class Form extends Component{

  state = {
    task : '',
    id : null
  }

  addHandler = (e) => {

    const len = this.props.length;
    console.log(len);
    this.setState({id : len});
    console.log(this.state);
    this.props.add(this.state);
    document.querySelector('#task').value = '';
    this.setState({task : ''})

    e.preventDefault();
  }

  changeHandler = (e) => {
    this.setState({task : e.target.value});
  }

  render(){
    return (
      <div className={styles.Form}>
        <h3>Add Tasks</h3>
        <form onSubmit={this.addHandler}>
          <input type="text" onChange={this.changeHandler} value={this.state.task} name="task" id="task" placeholder="Add task here..." autoComplete="off" />
          <button>Add</button>
        </form>
      </div>
    );
  }
}

export default Form;
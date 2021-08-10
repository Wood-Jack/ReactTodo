import React, { Component } from 'react';

class App extends Component {

  render() {
    return (
      <div className='container'>
        <textarea className="create-todo-text">I want to..</textarea>
        <select className="create-todo-priority">
          <option value="1"></option>
        </select>

        <a className="edit-todo"></a>

        <a className="delete-todo"></a>

        <textarea className="update-todo-text"></textarea>

        <select className="update-todo-priority"></select>

        <button className= "update-todo"></button>

      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';

class App extends Component {

  render(){

    return(

      <div className='container'>
        <div class= "grid">
          <div className= "panel-body left">
            <div class="label-bar"><h3>To do List</h3></div>

            <textarea className="create-todo-text container"> I want to..</textarea>
            <ul id ="list">
    

            </ul>
            

            <select className="create-todo-priority">
              <option value="1">Priority List</option>
            </select>
            
          </div>

          <button  type="button" class= "btn btn-primary btn-success">+ Add Button</button>

          <div className= "panel-body container">

            <a className="edit-todo">Edits todo</a>
            <a className="delete-todo">Deletes todo</a>

            <textarea className="update-todo-text">New updates to do text</textarea>

            <select className="update-todo-priority">Update Priority</select>

            <button className= "update-todo">updates todo</button> 


          </div>

        </div>
      </div>
    );
  }
}

export default App;

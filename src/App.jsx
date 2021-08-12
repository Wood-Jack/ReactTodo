
import React, { Component } from 'react';

class App extends React.Component {

  constructor(props){

    super(props);

    this.state ={todo:[{list:undefined}]}

    
  }
  
 
  render(){

    return(
      
      <div className='container d-flex justify-content-center mt-5'>
        
          <div className= "panel-body " id="pbody1">
            <div class="label-bar " id="label"><h3>Add New Todo</h3></div>

            <p className="pt-4 mb-1">I want too..</p>
            <textarea className="create-todo-text container"></textarea>
            <ul id ="list">
              
              {/* {this.state.todos.map(todo => {
                return <li> todo </li>
              }} */}
              <li class="task">
                <p class="text"></p>
                <i class="far fa-trash-alt"></i>
              </li>
            </ul> 

            <p className="pt-4 mb-1">How much priority is this?</p>
            <select className="create-todo-priority"> 
              <option value="1">Priority List</option> 
            </select> 
            <footer id="bottom">
            <button  type="button" className= "btn btn-primary btn-success">Add</button>
            </footer>
          </div>

          

          <div className= "panel-body justify-content-center ml-4 h-25 w-50" id="pbody2">
            <div class="label-bar" id="label" ><h3>View Todos</h3></div>
            <p className="pt-4 mb-1">Description</p>
            <textarea className="update-todo-text container">New updates to do text</textarea>
            
            <div className= "container-fluid" id="bttm-bar">

              <row className= "d-flex justify-content-end">
              <a className="edit-todo " > <i className="far fa-edit"></i> </a>
              <a className="delete-todo ml-1" >  <i className="far fa-trash-alt"></i> </a></row>

              <p className="pt-4 mb-1">Priority</p> 
              <select className="update-todo-priority fixed-bottom" >Update Priority</select>
              <button className= "update-todo">updates todo</button>
            </div>

          </div>
      </div>
    );
  }
}

export default App;

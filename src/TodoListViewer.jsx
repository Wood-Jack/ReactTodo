
import React, { Component } from 'react'
import Object from './Object'


/*
Todolist.jsx is a file that can edit and 
view the todo notes of the app. 

*/

class TodoListViewer extends React.Component{


    render(){
       
        return (

        <div className="h-50 col-lg-8">
          <div className="card  m-2">
            <div className="card-header" id="pbody2">View To Do Items</div>
              <div className="card-body">
                <ul className="list-group list-group-flush list-unstyled">
                  {this.props.listNote.map(todos => (
                  <Object
                    key={todos.num}
                    note={todos.note}
                    priority={todos.priority}
                    complete={todos.complete}
                    beingEdited={todos.beingEdited}
                    num={todos.num}
                    editing={this.props.editing}
                    addNoteArr={this.props.addNoteArr}
                    completedTodo={this.props.completedTodo}
                    updateTodoList={this.props.updateTodoList}
                    deleteListArr={this.props.deleteListArr}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>

        ); 
    }


}

export default TodoListViewer;
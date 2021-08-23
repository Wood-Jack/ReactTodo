
import React, { Component } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

class App extends React.Component{

  constructor(props){

    super(props);
    this.state= {listNote:[]};
    this.addNoteArr = this.addNoteArr.bind(this);
    this.deleteListArr = this.deleteListArr.bind(this);
    this.handleCallBack = this.handleCallBack.bind(this);
    this.editing= this.editing.bind(this);
    this.updateTodoList= this.updateTodoList.bind(this);

  }

  //using this function I gain access from the child then able to go to parent class.
  handleCallBack =  (addTodoData) =>{

    this.setState({notes: addTodoData.notes , priority: addTodoData.priority, num: addTodoData.num});

  }
  
  //update the array of notes in the app.
  addNoteArr(newNote) {

    this.state.listNote.push(newNote);
    this.setState({ listNote: this.state.listNote});

    console.log(this.state.listNote)

  }
  
  //deletes item in the listed array
  deleteListArr(num){

    this.setState({listNote: [...this.state.listNote.filter(todoNotes => todoNotes.num !== num)]});

  }
  
  //updates the todo list itself
  updateTodoList(notes,priority,num) {

    this.setState(prevState => {

      prevState.listNote.map(todos => {

        if(num === todos.num) {

          todos.notes = notes
          todos.priority= priority
          todos.beingEdited = !todos.beingEdited;

        }

        return todos

      });
    });

  }
  
  editing(num){

    this.setState(prevState => {
      prevState.listNote.map(todos => {
        if(num === todos.num){
          todos.beingEdited = !todos.beingEdited;
        }

        return todos;
      });
    });
  };

  render(){


    return(
    <div className= "container">

      <div className="row justify-content-center ">

        <div className="col-8"> <AddTodo addNoteArr = {this.addNoteArr}/> </div>

        
        <TodoList parentCallback={this.handleCallBack} deleteListArr={this.deleteListArr}
        listNote={this.state.listNote} editing={this.editing}
        addNoteArr = {this.addNoteArr} updateTodoList ={this.updateTodoList}/> 
        

      </div>
    </div>
      
    );
  }
};

export default App;

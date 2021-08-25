
import React, { Component } from 'react';
import AddTodo from './AddTodo';
import TodoListViewer from './TodoListViewer';


class App extends React.Component{

  constructor(props){

    super(props);
    this.state= {listNote: []};
    this.addNoteArr = this.addNoteArr.bind(this);
    this.deleteListArr = this.deleteListArr.bind(this);
    //this.handleCallBack = this.handleCallBack.bind(this);
    this.editing= this.editing.bind(this);
    this.updateTodoList= this.updateTodoList.bind(this);
    this.completedTodo = this.completedTodo.bind(this);
  }

  //using this function I gain access from the child then able to go to parent class.
  // handleCallBack =  (addTodoData) =>{

  //   this.setState({
  //     note: addTodoData.note,
  //     priority: addTodoData.priority,
  //     num: addTodoData.num
  //     });
    

  // }
  
  //update the array of notes in the app.
  addNoteArr(newNote) {

    this.state.listNote.push(newNote);
    this.setState({ listNote: this.state.listNote});

    console.log(this.state.listNote)
    //this.handleCallBack();

  }
  
  
  //deletes item in the listed array
  deleteListArr(num){
    this.setState({ listNote: [...this.state.listNote.filter(todo => todo.num !== num)] });
  }
  
  //updates the todo list itself
  updateTodoList(note,priority,num) {

    this.setState(prevState => {
      prevState.listNote.map(todos => {

        if(num === todos.num) {

          todos.note = note;
          todos.priority= priority
          todos.beingEdited = !todos.beingEdited

        }

        return todos ;
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

  completedTodo(num){
    this.setState(prevState => {
      prevState.listNote.map(todos => {
      if (num === todos.num)
      {
        todos.complete = !todos.complete;
      }
      return todos;
      });
    });
  };

  render(){



    return(
    <div className= "container">

      <div className="row justify-content-center ">

        <div className="col-8"> <AddTodo addNoteArr = {this.addNoteArr}  /> </div>

        
        <TodoListViewer deleteListArr={this.deleteListArr}
        listNote={this.state.listNote} editing={this.editing} completedTodo ={this.completedTodo}
        addNoteArr = {this.addNoteArr} updateTodoList ={this.updateTodoList}/> 
        

      </div>
    </div>
      
    );
  }
};

export default App;

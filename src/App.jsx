
import React, { Component } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

class App extends React.Component{

  constructor(props){

    super(props);
    this.state= {listNote:[], notes: this.props.note , priority: this.props.priority };
    this.addNoteArr = this.addNoteArr.bind(this);
    this.deleteListArr = this.deleteListArr.bind(this);
    this.handleCallBack = this.handleCallBack.bind(this);
     
  }

  //using this function I gain access from the child then able to go to parent class.
  handleCallBack =(addTodoData) =>{

    this.setState({notes: addTodoData.notes , priority: addTodoData.priority});

  }
  
  //update the array of notes in the app.
  addNoteArr(){

    let newListNote ={ listNote: this.state.listNote};
    this.setState({listNote:[...this.state.listNote, newListNote]});

  }
  
  //deletes item in the listed array
  deleteListArr(e){

    let filteredArray= this.state.listNote.filter(item => item !== e.target.value);
    this.setState({listNote:filteredArray});

  }
  
  //updates the todo list itself
  updateTodoList(){

    const newTodo = {notes: this.state.notes, priority:this.state.priority };
    this.setState((prevState) =>{const newToDos = prevState.listNote;
    newToDos.push(newTodo);

  return { listNote: newToDos};

  }, () => console.log(this.state.listNote));

  }
  

  render(){

    return(
    <div className= "container">

      <div className="row justify-content-center ">

        <div className="col-8"> <AddTodo addNoteArr = {this.addNoteArr}/> </div>

        
        <TodoList parentCallback={this.handleCallBack} deleteListArr={this.deleteListArr}
        addNoteArr = {this.addNoteArr} updateTodoList ={this.updateTodoList}/> 
        

      </div>
    </div>
      
    );
  }
};

export default App;

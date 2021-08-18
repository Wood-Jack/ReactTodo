
import React, { Component } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

class App extends React.Component{

  constructor(props){

    super(props);
    this.state= {listNote:[], notes: this.props.note , priority: this.props.priority };
    this.updateListArr = this.updateListArr.bind(this);
     
  }
  
  //creating a previous state to update the array of notes in the app.
  updateListArr(){

    let newListNote ={ listNote: this.state.listNote};
    this.setState({listNote:[...this.state.listNote, newListNote]});

    
  }

  deleteListArr(e){
    let filteredArray= this.state.listNote.filter(item => item !== e.target.value);
    this.setState({listNote:filteredArray});
  }
  

  render(){

    return(
    <div className= "container">

      <div className="row justify-content-center ">

        <div className="col-8"> <AddTodo updateListArr = {this.updateListArr}/> </div>

        
        <TodoList notePr= {this.props.note} priorityPr= {this.props.priority} 
        updateListArr = {this.updateListArr}/>
        

      </div>
    </div>
      
    );
  }
};

export default App;

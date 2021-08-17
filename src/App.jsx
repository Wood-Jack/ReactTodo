
import React, { Component } from 'react';
import AddTodo from './AddTodo';
import EditTodo from './EditTodo';

class App extends React.Component{

  constructor(props){

    super(props);

     
  }

  render(){

    return(
    <div className= "container">
      <div className="row justify-content-center ">
        <div className="col-8">
        <AddTodo/> 
        </div>

        
        <EditTodo/>
        

      </div>
      </div>
      
    );
  }
}

export default App;

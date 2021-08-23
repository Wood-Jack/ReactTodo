
import React, { Component } from 'react'


/*
Todolist.jsx is a file that can edit and 
view the todo notes of the app. 

*/

class TodoList extends React.Component{

    constructor(props){

        super(props);
        this.state= {note: '', priority: '' , num: 0};

        this.noteChange = this.noteChange.bind(this);
        this.priorityChange= this.priorityChange.bind(this);
        this.handleClick= this.handleClick.bind(this);
        this.deleteClick= this.deleteClick.bind(this);
        this.priorityColor= this.priorityColor.bind(this);
        this.handleEdit= this.handleEdit.bind(this);

    }

    priorityColor(priority){ 

        if (priority === '1'){
            return "list-group-item-success" ; 
        }
        else if (priority === '2') {
            return "list-group-item-warning";
          } else if (priority === '3') {
            return "list-group-item-danger";
          }

    }

    handleEdit(){
        this.props.editing(this.props.num);
    }
  

    
    // use to edit the list description
    noteChange(e) {

        this.setState({note: e.target.value});

    }

    priorityChange(e){

        this.setState({priority: e.target.value});

    }
    // updates the todolist array full of notes 
    handleClick()
    {
        this.props.updateTodoList(this.state.note, this.state.priority, this.state.num);
        
    }

    //delete click to delete the note

    deleteClick()
    {
        this.props.deleteListArr(this.props.num);
    }
  

    render(){
       
        return(

        <div className = "d-flex row  mt-5">
            <div className= "justify-content-center h-60 w-90 " id="pbody2">
                <div className= "label-bar" id="label" ><h3>View Todos</h3></div>
                <p className= "pt-4 mb-1">Description</p>
                <textarea className= "update-todo-text container" onChange={this.noteChange} value={this.state.note}>New updates to do text</textarea>
            
                <div className= "container-fluid" id="bttm-bar">
                      
                <row className= "d-flex justify-content-end">
                <ul className= "list-group list-group-flush list-unstyled"   >
                    {this.props.listNote.map(todo => {

                       return(
                           <li className={this.priorityColor(this.props.priority)} key= {todo.num}>
                               {todo.note}   <a className= "edit-todo " onClick={this.handleEdit}> <i className="far fa-edit"></i> </a>
                <a className= "delete-todo ml-1" onClick={this.deleteClick}><i className="far fa-trash-alt" ></i></a>
                           </li>
                       )

                       })}
                    
                </ul>
                   
              
                
                </row>
                <p className= "pt-4 mb-1">Priority</p> 
                <select className= "update-todo-priority " onChange = {this.priorityChange}
                    >
                    <option value="1">1</option> 
                    <option value="2">2</option>
                    <option value="3">3</option>
                    </select>

                <button className= "update-todo" onClick={this.handleClick}>SAVE</button>
                </div> 
            </div>
        </div>


    ); 
    }


}

export default TodoList;
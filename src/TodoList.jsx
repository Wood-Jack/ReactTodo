
import React, { Component } from 'react'


class TodoList extends React.Component{

    constructor(props){

        super(props);
        this.state= {note: this.props.notePr , priority: this.props.priorityPr };
        this.noteChange = this.noteChange.bind(this);
        this.priorityChange= this.priorityChange.bind(this);
        this.handleClick= this.handleClick.bind(this);

    }

    
    // use to edit the list description
    noteChange(e) {

        this.setState({note: e.target.value});

    }

    priorityChange(e){

        this.setState({priority: e.target.value});

    }

    handleClick()
    {
        this.props.updateListArr(this.state.note, this.state.priority);
    }


  

    render(){

        return(

        <div className = "d-flex row  mt-5">
            <div className= "justify-content-center h-60 w-90 " id="pbody2">
                <div class= "label-bar" id="label" ><h3>Edit Todos</h3></div>
                <p className= "pt-4 mb-1">Description</p>
                <textarea className= "update-todo-text container" onChange={this.noteChange}  >New updates to do text</textarea>
            
                <div className= "container-fluid" id="bttm-bar">

                <row className= "d-flex justify-content-end">
                <a className= "edit-todo " ><i className="far fa-edit"></i> </a>
                <a className= "delete-todo ml-1" ><i className="far fa-trash-alt"></i> </a></row>

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
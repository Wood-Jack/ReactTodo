
import React, { Component } from 'react'

class EditTodo extends React.Component{

    constructor(props){

        super(props);
        this.state= {list: this.props.listPr , priority: this.props.priorityPr };

    }

    
    // use to edit the list description
    listChange(e) {

        this.setState({list: e.target.value});
    }

    priorityChange(e){

        this.setState({priority: e.target.value});

    }

    // list function that that takes in the note and adds it to the list
    addList=()=>{

        let addToList= {list: this.state.list};
        this.addToList.push(this.setState({list: this.state.list +1}));


    }


  

    render(){

        return(

        <div className = "d-flex row  mt-5">
            <div className= "justify-content-center h-60 w-90 " id="pbody2">
                <div class= "label-bar" id="label" ><h3>Edit Todos</h3></div>
                <p className= "pt-4 mb-1">Description</p>
                <textarea className= "update-todo-text container" onChange={this.listChange} value= {this.state.list} >New updates to do text</textarea>
            
                <div className= "container-fluid" id="bttm-bar">

                <row className= "d-flex justify-content-end">
                <a className= "edit-todo " ><i className="far fa-edit"></i> </a>
                <a className= "delete-todo ml-1" ><i className="far fa-trash-alt"></i> </a></row>

                <p className= "pt-4 mb-1">Priority</p> 
                <select className= "update-todo-priority fixed-bottom" onChange = {this.priorityChange}
                    value= {this.state.priority}>
                    <option value="1">1</option> 
                    <option value="2">2</option>
                    <option value="3">3</option>
                    </select>

             

                <button className= "update-todo">updates todo</button>
                </div> 
            </div>
        </div>


    ); 
    }


}

export default EditTodo;
import React, { Component } from 'react';
import Editor from "./Editor";


class Object extends React.Component{

    constructor(props){
        super(props);
        this.state={
            complete: false ,
            beingEdited:false
        };

        this.handleDelete= this.handleDelete.bind(this);
        this.handleEdit= this.handleEdit.bind(this);
        this.handleCompleted= this.handleCompleted.bind(this);

    }

    handleEdit(){
        this.props.editing(this.props.num);
    }

    handleDelete()
    {
        this.props.deleteListArr(this.props.num);
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

    handleCompleted()
    {
        this.props.completedTodo(this.props.num);
    }
  


    render(){

        return(


        <div>
            
                {!this.props.beingEdited ? ( <li className= {this.priorityColor(this.props.priority)}>

                 <button type= "checkbox" onClick={this.handleCompleted}/>  

                 {!this.props.completedTodo ? ( 
                     <span>{this.props.note}</span>
                 ) : (
                     <s>{this.props.note}</s>
                    )}

                    <div className="text-right">
                        <button>
                        <a
                        className="delete-todo ml-1"
                        onClick={this.handleDelete}
                      >
                        <i className="far fa-trash-alt"></i>
                      </a>
                        </button>
                        <button>

                            <a className="edit-todo " onClick={this.handleEdit}>
                            <i className="far fa-edit"></i>
                        </a>
                        </button>
                        </div>
                    </li> ):( <Editor num={this.props.num} updateTodoList= {this.props.updateTodoList} />
                        )}

            </div>

        
        );
        
    }

}

export default Object;

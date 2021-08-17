import React, { Component } from 'react';
import EditTodo from './EditTodo';

class AddTodo extends React.Component{

    constructor(props){

        super(props);
        this.state= {list:[], priority: ''};
        //this.noteChange = this.noteChange.bind(this);
        this.listChange = this.listChange.bind(this);
        this.priorityChange= this.priorityChange.bind(this);
        

    }

    // use to edit the notes description
    // noteChange(e){

    //     this.setState({note: e.target.value});
    // }
    
    // use to edit the list name 
    listChange(e){

        this.setState({list: e.target.value});
    }

    priorityChange(e){

        this.setState({priority: e.target.value});
    }

    // Was going to be used to add notes but notes just needed
    // to be added to the list

    // addNotes=()=>{
    //     this.setState({note:this.state.note});
    // }

    // list function that that takes in the note and adds it to the list
    addList=()=>{

        let addToList= {list: this.state.list};

        this.addToList.push(this.setState({list: this.state.list +1}));

    
    } 

    render() {

        //creating a mapping of the list to show how many in the list
        //var listing = this.state.list.map( it => <li key={it.list}>{it.list}</li>);

        

        return(
           
 
        <div className='d-flex mt-5'>
          <div className= "panel-body" id= "pbody1">
            <div class= "label-bar" id="label"><h3>Add New Todo</h3></div>

            <p className="pt-4 mb-1">I want too..</p>
            <textarea className= "create-todo-text container" onChange={this.listChange} value= {this.state.list} ></textarea>

            <p className="pt-4 mb-1">How much priority is this?</p>
            <select className="create-todo-priority" onChange = {this.priorityChange}
             value= {this.state.priority} > 
              <option value="1">1</option> 
              <option value="2">2</option>
              <option value="3">3</option>
            </select>

            <EditTodo className="display-none" listPr = {this.state.list}  priorityPr = {this.state.priority} />

            

            <footer id="bottom">
            <button  type="button" className= "btn btn-primary btn-success" onClick= {this.addList}>Add</button>
            </footer>
          </div>

        </div>

        );
    }

}

export default AddTodo;
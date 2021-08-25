import React, { Component } from 'react';


class AddTodo extends React.Component{

    constructor(props){

        super(props);
        this.state= {note:'', priority: '3' , num: 0};
        this.noteChange= this.noteChange.bind(this);
        this.priorityChange= this.priorityChange.bind(this);
        this.addNotes = this.addNotes.bind(this);

    }
    
    // use to edit the notes description
    noteChange(e){

        this.setState({note: e.target.value});

    }
    
    
    priorityChange(e){

        this.setState({priority: e.target.value});
    }

   
    

    // Add notes to the list of  that that takes in the note and adds it to the list
    addNotes(){

        let addNote= {note: this.state.note , 
            priority: this.state.priority , 
            num: this.state.num,
            complete:false,
            beingEdited: false
        };

        this.setState({num: this.state.num + 1} );

        this.props.addNoteArr(addNote);

    } 

    render() {

        //creating a mapping of the list to show how many in the list
        //var listing = this.state.list.map( it => <li key={it.list}>{it.list}</li>);

        return( 
 
        <div className='h-100 col-lg-4'>
          <div className= "card" id= "pbody1">
            <div className= "card-header" id="label">Add New Todo</div>
            <div className="card-body">

            <p className="pt-4 mb-1">I want too..</p>
            <textarea className= "create-todo-text container" onChange={this.noteChange} value= {this.state.note} ></textarea>

            <p className="pt-4 mb-1">How much priority is this?</p>
            <select className="create-todo-priority" onChange = {this.priorityChange}
             value= {this.state.priority} > 
              <option value="1">1</option> 
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            </div>
            

            <div className="card card-footer" >
            <button  type="button" className= "btn btn-primary btn-success" onClick= {this.addNotes}>Add</button>
            </div>  
          </div>

        </div>


        );
    }

}

export default AddTodo;
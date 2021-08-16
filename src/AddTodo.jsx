import React, { Component } from 'react';

class AddTodo extends React.Component{

    constructor(props){

        super(props);
        this.state= {list:[note: '']};

        this.noteAddedChange = this.noteAddedChange.bind(this);
        this.listAddedChange = this.listAddedChange.bind(this);

    }



    noteAddedChange(e){

        this.setState({note: e.target.value});
    }

    listAddedChange(e){

        this.setState({list: e.target.value});
    }

    addNotes=()=>{
        this.setState({note:this.state.note});
    }

    addList=()=>{
        this.setState({list: this.state.list});
    }



    render() {

        return(

            <div className='container'>

            
            <span>Note Description:<input type= "text" onChange={e =>this.noteAddedChange(e.target.value)}></input>
            </span>
            
            <p>
                <button onClick={this.addNotes}>Add Note </button>
            </p>

            <span>ListDescription:<input type= "text" onChange={e => this.listAddedChange(e.target.value)}></input>
            </span>

            <p>
                <button onClick={this.addList}>Add List</button>
            </p>
            </div>

        );
    }

}

export default AddTodo;
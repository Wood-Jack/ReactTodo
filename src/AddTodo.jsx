import React, { Component } from 'react';

class AddTodo extends React.Component{

    constructor(props){

        super(props);
        this.state= {list:[note:'']};
        this.noteAddedChange = this.noteAddedChange.bind(this);
        this.listAddedChange = this.listAddedChange.bind(this);

    }

    this.state={list:[note:'']};

    noteAddedChange(e){
        this.setState({note:e.target.value});
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



    render(){
        return(

            <label>Note Description:<input type= "text" onChange={e =>this.noteAddedChange(e.target.value)}> </label>
            <p>
                <button onClick={this.addNotes}>Add Note </button>;
            </p>

            <label>ListDescription:<input type= "text" onChange={e => this.listAddedChange(e.target.value)}></label>
            <p>
                <button onClick={this.addList}>Add List</button>;
            <p>


        )
    }


}
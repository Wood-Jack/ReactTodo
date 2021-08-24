import React, { Component } from 'react';
import TodoList from "./TodoList"

class Object extends React.Component{

    constructor(props){
        super(props);
    }


    render(){

        return(

            <TodoList num={this.props.num} updateTodoList= {this.props.updateTodoList} />
        )
    }

}

export default Object;

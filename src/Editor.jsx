import React, {Component} from "react";


class Editor extends Component{


    constructor(props) {
        this.state = {
            note: '',
            priority: '3',
        };
        

        this.handleChange = this.handleChange.bind(this);
        this.handleClick= this.handleClick.bind(this);
    }

    handleChange(event){
        this.setState({ [event.target.name]: event.target.value });
    }

    handleClick(){

        this.props.updateTodoList(this.state.note, this.state.priority, this.state.num);
        
    }


    render(){ 

        return(


            <div className="d-flex row  mt-5">
            <div className="justify-content-center h-60 w-90 " id="pbody2">
              <div className="label-bar" id="label">
                <h3>View Todos</h3>
              </div>
              <p className="pt-4 mb-1">Description</p>
              <textarea
                className="update-todo-text container"
                onChange={this.handleChange}
                value={this.state.note}
              >
                New updates to do text
              </textarea>



              <p className="pt-4 mb-1">Priority</p>
                <select
                  className="update-todo-priority "
                  onChange={this.handleChange}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>

                <button className="update-todo" onClick={this.handleClick}>
                  SAVE
                </button>

           
          </div>

        </div>

        );
    }
        

    
    
}
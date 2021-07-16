import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";
import TodoForm from "./TodoForm";

export class Input extends Component {
  onSubmit = (formValues) => {
    this.props.addTodo(formValues);
  };

  render() {
    return (
      <div>
        <TodoForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { addTodo })(Input);

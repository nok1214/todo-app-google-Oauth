import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchTodos, deleteTodo, editTodo } from "../actions";

export class TodoList extends Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  renderAdmin(todo) {
    if (todo.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <div className="ui mini buttons">
            <Link to={`/todos/edit/${todo.id}`} className="ui button primary">
              EDIT
            </Link>
            <div className="or"></div>
            <button
              className="ui  button negative"
              onClick={() => this.props.deleteTodo(todo.id)}
            >
              DELETE
            </button>
          </div>
        </div>
      );
    }
  }

  renderAdminCheckbox(todo) {
    if (todo.userId === this.props.currentUserId) {
      return <input type="checkbox" />;
    }
  }

  renderList() {
    return this.props.todos.map((todo) => {
      return (
        <div className="item" key={todo.id}>
          <div className="ui checkbox">
            {this.renderAdminCheckbox(todo)}
            <label>{todo.todo}</label>
          </div>
          {this.renderAdmin(todo)}
        </div>
      );
    });
  }
  render() {
    return (
      <div>
        <div className="ui middle aligned divided list">
          {this.renderList()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: Object.values(state.todos),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { fetchTodos, deleteTodo, editTodo })(
  TodoList
);

import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import { fetchTodos, editTodo } from "../actions";
import TodoForm from "./TodoForm";

class EditTodo extends React.Component {
  componentDidMount() {
    this.props.fetchTodos(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    this.props.editTodo(this.props.match.params.id, formValues);
  };

  render() {
    if (!this.props.todo) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <h3>Edit your Todo</h3>
        <TodoForm
          initialValues={_.pick(this.props.todo, "todo")}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { todo: state.todos[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchTodos, editTodo })(EditTodo);

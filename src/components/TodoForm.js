import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

export class TodoForm extends Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  };
  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field
          name="todo"
          component={this.renderInput}
          placeholder="What do you want to do today?"
        />
        <button className="ui button primary">Add</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};
  if (!formValues.todo) {
    errors.todo = "please enter something to do";
  }
  return errors;
};

export default reduxForm({
  form: "TodoForm",
  validate,
})(TodoForm);

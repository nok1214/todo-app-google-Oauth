import React from "react";
import { Router, Route } from "react-router-dom";
import Header from "./Header";
import TodoList from "./TodoList";
import Input from "./Input";
import EditTodo from "./EditTodo";
import history from "../history";

export default function App() {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Input />
          <Route path="/" component={TodoList} />
          <Route path="/todo/new" component={Input} />
          <Route path="/todos/edit/:id" component={EditTodo} />
        </div>
      </Router>
    </div>
  );
}

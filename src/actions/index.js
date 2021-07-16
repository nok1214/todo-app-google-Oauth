import {
  SIGN_IN,
  SIGN_OUT,
  ADD_TODO,
  FETCH_TODOS,
  EDIT_TODO,
  DELETE_TODO,
} from "./types";
import history from "../history";
import todos from "../apis/todos";

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const addTodo = (formValues) => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await todos.post("/todos", {
    ...formValues,
    userId,
    completed: false,
  });

  dispatch({ type: ADD_TODO, payload: response.data });
  history.push("/");
};

export const fetchTodos = () => async (dispatch) => {
  const response = await todos.get("/todos");

  dispatch({ type: FETCH_TODOS, payload: response.data });
};

export const editTodo = (id, formValues) => async (dispatch) => {
  const response = await todos.patch(`/todos/${id}`, formValues);

  dispatch({ type: EDIT_TODO, payload: response.data });
  history.push("/");
};

export const deleteTodo = (id) => async (dispatch) => {
  await todos.delete(`/todos/${id}`);

  dispatch({ type: DELETE_TODO, payload: id });
  history.push("/");
};

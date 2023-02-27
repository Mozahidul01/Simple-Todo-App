import { loaded } from "../actions";

const fetchTodos = async (dispatch, getState) => {
  const respone = await fetch("http://localhost:9000/todos");
  const todos = await respone.json();

  dispatch(loaded(todos));
};

export default fetchTodos;

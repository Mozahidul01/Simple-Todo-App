import { colorSelected } from "../actions";

const updateColor = (todoId, color) => {
  return async (dispatch, getState) => {
    const response = await fetch(`http://localhost:9000/todos/${todoId}`, {
      method: "PATCH",
      body: JSON.stringify({
        color: color,
      }),
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    });
    const todo = await response.json();

    dispatch(colorSelected(todo.id, todo.color));
  };
};

export default updateColor;

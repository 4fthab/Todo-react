import React, { useContext } from "react";
import { TodosContext } from "../context/todosContext";

function TaskInput() {
  const {
    todos,
    setTodos,
    toggleBtn,
    setToggleBtn,
    todo,
    setTodo,
    editingTodo,
  } = useContext(TodosContext);
  // Create TODO --------------------------------
  const createTodo = (todo) => {
    if (todo == "") {
      alert("Enter Todo");
    } else {
      setTodos([
        ...todos,
        { id: Math.trunc(Math.random() * 1000000), text: todo },
      ]);
      setTodo("");
    }
  };

  // Edit TODO---------------------------------
  function editingTodos(eTodo) {
    eTodo.text = todo;
    setTodo("");
  }

  return (
    <>
      <div className="input">
        <input
          type="text"
          value={todo}
          onChange={(event) => {
            setTodo(event.target.value);
          }}
          id="todo"
          placeholder="Enter youre todo"
        />
        {toggleBtn ? (
          <button
            className="button"
            onClick={() => {
              createTodo(todo);
            }}
          >
            Add task
          </button>
        ) : (
          <button
            className="button"
            onClick={() => {
              editingTodos(editingTodo);
              setToggleBtn(true);
            }}
          >
            Edit task
          </button>
        )}
      </div>
    </>
  );
}

export default TaskInput;

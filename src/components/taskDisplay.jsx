import React, { useContext, useState } from "react";
import { TodosContext } from "../context/todosContext";

function TaskDisplay() {
  const { todos, setTodos, setToggleBtn, setTodo, setEditingTodo } =
    useContext(TodosContext);
  const [lined, setLined] = useState("no-line");

  // Deleting todo function-------------------------------------------------------------
  const deleteTodo = (item) => {
    let task = todos.filter((todo) => {
      return todo.id != item.id;
    });
    setTodos(task);
  };

  // Edit todo function-------------------------------------------------------------------
  const editTodo = (item) => {
    let changeTodo = todos.find((ele) => {
      return ele.id == item.id;
    });
    setToggleBtn(false);
    setEditingTodo(changeTodo);

    // console.log(editedTodo);
  };

  return (
    <>
      <div className="disp-todos">
        {todos.map((e) => {
          return (
            <div className="todo">
              <div className="text">
                <input
                  className="check"
                  type="checkbox"
                  onChange={(event) => {
                    event.target.checked
                      ? (document.getElementById(e.id).style.textDecoration =
                          "line-through")
                      : (document.getElementById(e.id).style.textDecoration =
                          "none");
                  }}
                />
                {}
                <span id={e.id} className={lined}>
                  {e.text}
                </span>
              </div>
              {/* Edit button------------------------------------------------------------------ */}
              <div
                className="edit-btn"
                onClick={() => {
                  setTodo(e.text);
                  editTodo(e);
                }}
              >
                <svg
                  width="30px"
                  height="30px"
                  viewBox="0 0 24 24"
                  fill="black"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="m3.99 16.854-1.314 3.504a.75.75 0 0 0 .966.965l3.503-1.314a3 3 0 0 0 1.068-.687L18.36 9.175s-.354-1.061-1.414-2.122c-1.06-1.06-2.122-1.414-2.122-1.414L4.677 15.786a3 3 0 0 0-.687 1.068zm12.249-12.63 1.383-1.383c.248-.248.579-.406.925-.348.487.08 1.232.322 1.934 1.025.703.703.945 1.447 1.025 1.934.058.346-.1.677-.348.925L19.774 7.76s-.353-1.06-1.414-2.12c-1.06-1.062-2.121-1.415-2.121-1.415z"
                      fill="#000000"
                    />
                  </g>
                </svg>
              </div>
              {/* Delete button------------------------------------------------------------ */}
              <div
                className="delete"
                onClick={() => {
                  deleteTodo(e);
                }}
              >
                <svg
                  width="30px"
                  height="30px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M19.207 6.207a1 1 0 0 0-1.414-1.414L12 10.586 6.207 4.793a1 1 0 0 0-1.414 1.414L10.586 12l-5.793 5.793a1 1 0 1 0 1.414 1.414L12 13.414l5.793 5.793a1 1 0 0 0 1.414-1.414L13.414 12l5.793-5.793z"
                      fill="#000000"
                    />
                  </g>
                </svg>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default TaskDisplay;

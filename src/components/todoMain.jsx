import React from "react";
import TaskDisplay from "./taskDisplay";
import TaskInput from "./taskInput";
import TodosContextProvider from "../context/todosContext";

function Todo() {
  return (
    <>
      <TodosContextProvider>
        <TaskInput />
        <TaskDisplay />
      </TodosContextProvider>
    </>
  );
}

export default Todo;

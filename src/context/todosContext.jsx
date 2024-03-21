import { createContext, useState } from "react";

export const TodosContext = createContext();

function TodosContextProvider(props) {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [toggleBtn, setToggleBtn] = useState(true);
  const [editingTodo, setEditingTodo] = useState([]);

  return (
    <TodosContext.Provider
      value={{
        todos,
        setTodos,
        todo,
        setTodo,
        toggleBtn,
        setToggleBtn,
        editingTodo,
        setEditingTodo,
      }}
    >
      {props.children}
    </TodosContext.Provider>
  );
}
export default TodosContextProvider;

import { useState } from "react";
import { useContextProvider } from "../../context/useContext";

import { v4 as uuidv4 } from "uuid";

export const useNewTodo = () => {
  const { listTodos, handleListTodos } = useContextProvider();
  const [itemTodo, setITemTodo] = useState({
    title: "",
    isCompleted: false,
    key: "",
  });

  function handleItemTodo(name: string, value: string) {
    if (value === "true" || value === "false") {
      let isCompleted = value === "true" ? true : false;
      setITemTodo({
        ...itemTodo,
        key: uuidv4(),
        [name]: isCompleted,
      });
    } else {
      setITemTodo({
        ...itemTodo,
        key: uuidv4(),
        [name]: value,
      });
    }
  }

  function addTodo() {
    handleListTodos(itemTodo);
    handleItemTodo("title", "");
  }

  return { listTodos, handleListTodos, itemTodo, handleItemTodo, addTodo };
};

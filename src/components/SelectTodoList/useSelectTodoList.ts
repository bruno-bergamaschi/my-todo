import { useState } from "react";
import { useContextProvider } from "../../context/useContext";

export const useSelectTodoList = () => {
  const { selectListTodo, setSelectListTodo } = useContextProvider();

  function handleSelectecList(
    activate: "pending" | "done",
    valueActivate: boolean,
    inactivate: "pending" | "done"
  ) {
    setSelectListTodo({
      ...selectListTodo,
      [activate]: valueActivate,
      [inactivate]: false,
    });
  }

  return { selectListTodo, handleSelectecList };
};

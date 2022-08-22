import { useReducer } from "react";
import { ToastCustom } from "../../components/ToastCustom";

const key = "@my_todo-list_todos";

export interface ITodoItem {
  title: string;
  isCompleted: boolean;
  key: string;
}

const userReducer = (prevValue: any, newValue: ITodoItem[]) => {
  localStorage.setItem(key, JSON.stringify(newValue));
  return newValue;
};

function getLocalStorage() {
  const value = localStorage.getItem(key);

  return typeof value === "string" ? JSON.parse(value) : null;
}

export function useListTodos() {
  const [listTodos, setListTodos] = useReducer(
    userReducer,
    getLocalStorage() || []
  );

  function handleListTodos(item: ITodoItem) {
    if (!item.title) {
      ToastCustom("Campo vazio", "error");
      return;
    }
    setListTodos([...listTodos, item]);
  }

  function checkedItem(item: ITodoItem) {
    const index = listTodos.indexOf(item);

    const currentList = listTodos;
    currentList[index].isCompleted = !currentList[index].isCompleted;

    setListTodos(currentList);
  }

  function deleteItem(item: ITodoItem) {
    const index = listTodos.indexOf(item);

    const currentList = listTodos;
    currentList.splice(index, 1);

    setListTodos(currentList);
  }

  return { listTodos, handleListTodos, checkedItem, deleteItem };
}

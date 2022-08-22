import { useCallback, useEffect } from "react";
import { ITodoItem } from "../../context/hooks/useListTodos";
import { useContextProvider } from "../../context/useContext";

export const useListTodos = () => {
  const {
    listTodos,
    checkedItem,
    deleteItem,
    listenChanges,
    setListenChanges,
  } = useContextProvider();

  const changeChecketItem = useCallback(
    (item: ITodoItem) => {
      checkedItem(item);
      setListenChanges(!listenChanges);
    },
    [checkedItem, listenChanges, setListenChanges]
  );

  const changeDeleteItem = useCallback(
    (item: ITodoItem) => {
      deleteItem(item);
      setListenChanges(!listenChanges);
    },
    [deleteItem, listenChanges, setListenChanges]
  );

  useEffect(() => {}, [changeChecketItem, listTodos]);

  return { listTodos, changeChecketItem, changeDeleteItem };
};

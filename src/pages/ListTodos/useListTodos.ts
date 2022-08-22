import { useCallback, useEffect } from "react";
import { ITodoItem } from "../../context/hooks/useListTodos";
import { useContextProvider } from "../../context/useContext";

export const useListTodos = (state: boolean) => {
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

  const checkExistItem = listTodos.filter((item) => item.isCompleted === state);

  useEffect(() => {}, [changeChecketItem, listTodos]);

  return { checkExistItem, listTodos, changeChecketItem, changeDeleteItem };
};

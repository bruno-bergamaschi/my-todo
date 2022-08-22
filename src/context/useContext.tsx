import { createContext, ReactNode, useContext } from "react";
import { ITodoItem } from "./hooks/useListTodos";
import { ISelectListTodo } from "./hooks/useSelectListTodo";
import { useHooks } from "./useHoojs";

type UseContextProps = {
  children: ReactNode;
};

interface IContext {
  checkedItem: (item: ITodoItem) => void;
  deleteItem: (item: ITodoItem) => void;
  handleListTodos: (item: ITodoItem) => void;
  listTodos: ITodoItem[];
  listenChanges: boolean;
  setListenChanges: (listenChanges: boolean) => void;
  selectListTodo: ISelectListTodo;
  setSelectListTodo: (selectListTodo: ISelectListTodo) => void;
  theme: string;
  setTheme: (theme: string) => void;
}

const UseContext = createContext({} as IContext);

const UseContextProvider = ({ children }: UseContextProps) => {
  const {
    checkedItem,
    deleteItem,
    handleListTodos,
    listTodos,
    listenChanges,
    setListenChanges,
    selectListTodo,
    setSelectListTodo,
    theme,
    setTheme,
  } = useHooks();
  return (
    <UseContext.Provider
      value={{
        checkedItem,
        deleteItem,
        handleListTodos,
        listTodos,
        listenChanges,
        setListenChanges,
        selectListTodo,
        setSelectListTodo,
        theme,
        setTheme,
      }}
    >
      {children}
    </UseContext.Provider>
  );
};

export { UseContext, UseContextProvider };

export function useContextProvider() {
  const context = useContext(UseContext);
  const {
    checkedItem,
    deleteItem,
    handleListTodos,
    listTodos,
    listenChanges,
    setListenChanges,
    selectListTodo,
    setSelectListTodo,
    theme,
    setTheme,
  } = context;

  return {
    checkedItem,
    deleteItem,
    handleListTodos,
    listTodos,
    listenChanges,
    setListenChanges,
    selectListTodo,
    setSelectListTodo,
    theme,
    setTheme,
  };
}

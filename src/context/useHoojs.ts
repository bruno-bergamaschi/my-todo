import { useTheme } from "./hooks/useTheme";
import { useListTodos } from "./hooks/useListTodos";
import { useListenChanges } from "./hooks/useListenChanges";
import { useSelectListTodo } from "./hooks/useSelectListTodo";

export const useHooks = () => {
  const { listTodos, handleListTodos, checkedItem, deleteItem } =
    useListTodos();
  const { listenChanges, setListenChanges } = useListenChanges();
  const { theme, setTheme } = useTheme();
  const { selectListTodo, setSelectListTodo } = useSelectListTodo();

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
};

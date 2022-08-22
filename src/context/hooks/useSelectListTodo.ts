import { useState } from "react";

export interface ISelectListTodo {
  pending: boolean;
  done: boolean;
}

export function useSelectListTodo() {
  const [selectListTodo, setSelectListTodo] = useState<ISelectListTodo>({
    pending: true,
    done: false,
  });

  return { selectListTodo, setSelectListTodo };
}

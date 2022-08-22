import * as S from "./styles";
import { useSelectTodoList } from "./useSelectTodoList";

export function SelectTodoList() {
  const { selectListTodo, handleSelectecList } = useSelectTodoList();

  return (
    <>
      <S.Container>
        <S.SelectList
          selected={selectListTodo.pending}
          onClick={() => handleSelectecList("pending", true, "done")}
        >
          Pendentes
        </S.SelectList>
        <S.SelectList
          selected={selectListTodo.done}
          onClick={() => handleSelectecList("done", true, "pending")}
        >
          Concluídas
        </S.SelectList>
      </S.Container>
    </>
  );
}

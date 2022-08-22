import { useContextProvider } from "../../context/useContext";
import { ListTodos } from "../ListTodos";
import { NewTodo } from "../NewTodo";
import * as S from "./styles";
import { theme as t } from "../../themes";
import { ThemeProvider } from "styled-components";
import { ChangeTheme } from "../../components/ChangeTheme";
import { TitleBar } from "../../components/TitleBar";
import { SelectTodoList } from "../../components/SelectTodoList";

export function Home() {
  const { theme, selectListTodo } = useContextProvider();

  const defineTheme = theme === "dark" ? t.dark : t.light;

  return (
    <ThemeProvider theme={defineTheme}>
      <S.Container>
        <TitleBar title="Minhas Tarefas" />
        <S.FlexColumn>
          <S.BoxButtonChangeTheme>
            <ChangeTheme />
          </S.BoxButtonChangeTheme>
          <NewTodo />
          <S.BoxListTodos>
            <SelectTodoList />
            <ListTodos state={selectListTodo.done} />
          </S.BoxListTodos>
        </S.FlexColumn>
      </S.Container>
    </ThemeProvider>
  );
}

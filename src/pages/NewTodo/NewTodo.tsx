import { Button } from "../../components/Button";
import { InputText } from "../../components/InputText";
import { useContextProvider } from "../../context/useContext";
import { BoxButton, Container, FlexRow } from "./styles";
import { useNewTodo } from "./useNewTodo";

export function NewTodo() {
  const { theme } = useContextProvider();
  const { itemTodo, handleItemTodo, addTodo } = useNewTodo();

  return (
    <Container>
      <FlexRow>
        <InputText
          type={"text"}
          value={itemTodo.title}
          placeholder={"Título da tarefa..."}
          onChange={(e: any) => handleItemTodo("title", e.target.value)}
        />
        <BoxButton>
          <Button
            onClick={addTodo}
            iconName={"add"}
            isIconButton
            colorIcon={theme === "dark" ? "#353535" : "#f2f2f2"}
          />
        </BoxButton>
      </FlexRow>
    </Container>
  );
}

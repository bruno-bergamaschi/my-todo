import { Button } from "../../components/Button";
import { BoxButton, Container, FlexRow, ItemCard, Title } from "./styles";
import { useListTodos } from "./useListTodos";

interface ListTodosProps {
  state: boolean;
}

export function ListTodos({ state }: ListTodosProps) {
  const { listTodos, changeChecketItem, changeDeleteItem } = useListTodos();

  return (
    <Container>
      {listTodos.map((item, index) => {
        if (item.isCompleted === state) {
          return (
            <ItemCard key={index}>
              <FlexRow>
                <BoxButton>
                  <Button
                    onClick={() => changeChecketItem(item)}
                    isIconButton={true}
                    iconName={
                      item.isCompleted === true
                        ? "checkboxMarked"
                        : "checkboxEmpty"
                    }
                    isFull={false}
                    colorIcon={"#0091ad"}
                  />
                  {!state && (
                    <Button
                      onClick={() => changeDeleteItem(item)}
                      isIconButton={true}
                      iconName={"remove"}
                      isFull={false}
                      colorIcon={"#0091ad"}
                    />
                  )}
                </BoxButton>
                <Title isCompleted={item.isCompleted}>{item.title}</Title>
              </FlexRow>
            </ItemCard>
          );
        } else return null;
      })}
    </Container>
  );
}

import { Container } from "./styles";
import { useButton } from "./useButton";

interface IButtonProps {
  isIconButton?: boolean;
  onClick: () => void;
  iconName?: "default" | "checkboxEmpty" | "checkboxMarked" | "add" | "remove";
  isFull?: boolean;
  sizeIcon?: number;
  colorIcon?: string;
  title?: string;
}

export function Button({
  isIconButton = false,
  onClick,
  iconName = "default",
  isFull = true,
  sizeIcon = 30,
  colorIcon = "#fff",
  title,
  ...rest
}: IButtonProps) {
  const { iconComponent } = useButton({
    colorIcon: colorIcon,
    sizeIcon: sizeIcon,
  });

  if (isIconButton) {
    return (
      <Container
        onClick={onClick}
        isIconButton={isIconButton}
        isFull={isFull}
        {...rest}
      >
        {iconComponent[iconName]}
      </Container>
    );
  }

  return (
    <Container
      onClick={onClick}
      isIconButton={isIconButton}
      isFull={isFull}
      {...rest}
    >
      {title}
    </Container>
  );
}

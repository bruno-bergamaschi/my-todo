import * as Icon from "react-icons/ai";

interface IuseButtonProps {
  sizeIcon?: number;
  colorIcon?: string;
}

export const useButton = ({ sizeIcon, colorIcon }: IuseButtonProps) => {
  const iconComponent = {
    default: null,
    checkboxEmpty: <Icon.AiOutlineBorder size={sizeIcon} color={colorIcon} />,
    checkboxMarked: (
      <Icon.AiOutlineCheckSquare size={sizeIcon} color={colorIcon} />
    ),
    add: <Icon.AiOutlinePlus size={sizeIcon} color={colorIcon} />,
    remove: <Icon.AiOutlineDelete size={sizeIcon} color={colorIcon} />,
  };

  return { iconComponent };
};

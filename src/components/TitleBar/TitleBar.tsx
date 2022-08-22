import * as S from "./styles";

interface ITitleBarProps {
  title: string;
}

export function TitleBar({ title }: ITitleBarProps) {
  return <S.Container>{title}</S.Container>;
}

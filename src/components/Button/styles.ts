import styled, { css } from "styled-components";

interface IContainerProps {
  isFull: boolean;
  isIconButton: boolean;
}

export const Container = styled.button<IContainerProps>`
  ${({ theme, isIconButton, isFull }) => css`
    align-items: center;
    background: ${isFull ? theme.secondary_bg : "none"};
    border: ${isFull ? theme.secondary_bg : "none"};
    border-radius: 5px;
    font-size: 1.3rem;
    display: flex;
    justify-content: center;
    padding: ${isIconButton ? "0" : "0.5rem"};
    outline: none;
    width: 100%;
    height: 100%;

    transition: 0.5s;
  `}
`;

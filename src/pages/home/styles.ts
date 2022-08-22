import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    min-height: 100vh;
    background: ${theme.primary_bg};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    transition: 0.5s;
  `}
`;

export const FlexColumn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

export const ContainerHorizontal = styled.div`
  ${() => css`
    width: 50%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 2rem 0;
    gap: 20px;
  `}
`;

export const BoxButton = styled.div`
  width: 30%;
`;

export const BoxButtonChangeTheme = styled.div`
  width: 100%;
  display: flex;
`;

export const BoxListTodos = styled.div`
  width: 50%;

  @media (max-width: 420px) {
    width: 100%;
  }
`;

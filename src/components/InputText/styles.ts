import styled, { css } from "styled-components";

export const Container = styled.input`
  ${({ theme }) => css`
    background: ${theme.secondary_bg};
    border-radius: 5px;
    border: none;
    font-size: 1rem;
    padding: 0.55rem;
    outline: none;
    width: 100%;
    height: 100%;
    color: ${theme.primary_text};

    transition: 0.5s;
  `}
`;

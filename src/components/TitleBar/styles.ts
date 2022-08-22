import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    background: ${theme.secondary_bg};
    width: 100%;

    margin-bottom: 1rem;
    padding: 1.5rem;

    font-weight: bold;
    font-size: 1.3rem;
    text-transform: uppercase;
    text-align: center;

    color: ${theme.primary_text};

    transition: 0.5s;
  `}
`;

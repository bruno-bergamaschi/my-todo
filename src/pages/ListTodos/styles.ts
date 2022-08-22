import styled, { css } from "styled-components";

interface ITitleProps {
  isCompleted: boolean;
}

export const Container = styled.div`
  width: 100%;
  padding: 3rem 0;
`;

export const FlexRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const ItemCard = styled.div`
  ${({ theme }) => css`
    width: 100%;
    color: ${theme.secondary_text};
    transition: 0.5s;
    margin-block: 2rem;
    text-align: justify;
  `}
`;

export const BoxButton = styled.div`
  padding-right: 0.5rem;
  display: flex;
  gap: 0.2rem;
`;

export const Title = styled.p<ITitleProps>`
  font-size: 20px;
  text-decoration: ${({ isCompleted }) =>
    isCompleted ? "line-through" : "none"};
`;

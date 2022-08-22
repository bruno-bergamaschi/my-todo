import styled from "styled-components";

export const Container = styled.div`
  width: 50%;
  padding: 3rem 0;

  @media (max-width: 420px) {
    width: 100%;
  }
`;

export const BoxButton = styled.div`
  width: 30%;
  height: 100%;
`;

export const FlexRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  height: 40px;
`;

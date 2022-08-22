import styled, { css } from "styled-components";
import { ITheme } from "../../themes/theme";

interface ISelectList {
  theme: ITheme;
  selected: boolean;
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  gap: 1rem;
`;

const SelectListModifier = {
  active: (theme: ITheme) => `
    background: ${theme.secondary_bg}
  `,
  inactive: (theme: ITheme) => `
    background: ${theme.secondary_bg};
    opacity: 0.5;
  `,
};

export const SelectList = styled.button<ISelectList>`
  ${({ theme, selected }) => css`
    align-items: center;
    padding: 1rem;
    border: none;
    border-radius: 5px;
    font-size: 1.3rem;
    display: flex;
    justify-content: center;
    outline: none;
    width: 100%;
    height: 100%;
    color: ${theme.primary_text};

    ${selected
      ? SelectListModifier.active(theme)
      : SelectListModifier.inactive(theme)};
  `}
`;

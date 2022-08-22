import styled, { css } from "styled-components";

interface IBallSwitch {
  currentTheme: string;
}

export const BoxSwitch = styled.label`
  ${({ theme }) => css`
    position: relative;
    width: 4rem;
    height: 2rem;
    background: ${theme.switch};
    border-radius: 50px;
    margin: 1rem;

    transition: 0.5s;
  `}
`;

const ballSwitchModifier = {
  dark: () => `
    left: 0;
    background: url("https://www.shareicon.net/data/2015/08/23/89529_moon_512x512.png")
    no-repeat center center;
    background-size: 2rem 2rem;
      `,
  light: () => `
    right: 0;
    background: url("https://icon-library.com/images/sun-icon-png/sun-icon-png-9.jpg");
    no-repeat center center;
    background-size: 2rem 2rem;
  `,
};

export const BallSwitch = styled.button<IBallSwitch>`
  ${({ theme, currentTheme }) => css`
    position: absolute;
    width: 2rem;
    height: 2rem;
    border-radius: 50px;
    border: none;

    ${currentTheme === "dark" && ballSwitchModifier.dark}
    ${currentTheme === "light" && ballSwitchModifier.light};
  `}
`;

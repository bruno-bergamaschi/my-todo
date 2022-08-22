export interface ITheme {
  primary_bg: string;
  secondary_bg: string;
  primary_text: string;
  secondary_text: string;
  switch: string;
}

export const theme = {
  dark: {
    primary_bg: "#353535",
    secondary_bg: "#f2f2f2",
    primary_text: "#353535",
    secondary_text: "#f2f2f2",
    switch: "#d9d9d9",
    switch_ball: "#353535",
  },

  light: {
    primary_bg: "#f2f2f2",
    secondary_bg: "#353535",
    primary_text: "#ffffff",
    secondary_text: "#353535",
    switch: "#353535",
    switch_ball: "#ffffff",
  },
};

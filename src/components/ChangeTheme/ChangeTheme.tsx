import * as S from "./styles";

import { useChangeTheme } from "./useChangeTheme";

export function ChangeTheme() {
  const { theme, changeTheme } = useChangeTheme();

  return (
    <>
      <S.BoxSwitch>
        <S.BallSwitch
          onClick={changeTheme}
          theme={theme}
          currentTheme={theme}
        />
      </S.BoxSwitch>
    </>
  );
}

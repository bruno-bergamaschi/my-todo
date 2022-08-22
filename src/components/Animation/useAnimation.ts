import * as animationData from "../../assets/animations/51382-astronaut-light-theme.json";

export const useAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererAspectRatio: {
      preserverAspectRatio: "xMidYMid slice",
    },
  };

  return { defaultOptions };
};

import Lottie from "react-lottie";
import { useAnimation } from "./useAnimation";

export interface IAnimationProps {
  type?: "emptyList";
}

export function Animation({ type }: IAnimationProps) {
  const { defaultOptions } = useAnimation();

  return <Lottie options={defaultOptions} width={"100%"} height={"100%"} />;
}

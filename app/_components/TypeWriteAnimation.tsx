"use client";
import { TypeAnimation } from "react-type-animation";

interface TypeWriterAnimationProps {
  sequence: (string | number)[];
}

export const TypeWriterAnimation: React.FC<TypeWriterAnimationProps> = ({
  sequence,
}) => {
  return (
    <TypeAnimation
      sequence={sequence}
      wrapper="span"
      speed={50}
      style={{ fontSize: "1em", display: "inline-block" }}
      repeat={Infinity}
    />
  );
};

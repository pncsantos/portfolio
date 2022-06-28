import React from "react";

interface Props {
  title: string;
  color?: string;
  textColor?: string;
  style?: string;
}
function Pill({ title, color, textColor, style }: Props) {
  return (
    <span
      className={`bg-${
        color ? color : "gray-400"
      } ${style} text-sm text-shadow-sm rounded-lg md:rounded-xl px-3 py-1 ${
        textColor ? textColor : "text-white"
      } `}
    >
      {title}
    </span>
  );
}

export default Pill;

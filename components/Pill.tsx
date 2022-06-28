import React from "react";

interface Props {
  title: string;
}
function Pill({ title }: Props) {
  return (
    <span className="bg-[#64ffda] rounded-lg px-2 text-black mr-1">{title}</span>
  );
}

export default Pill;

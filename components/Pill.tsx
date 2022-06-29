interface Props {
  title: string;
  color?: string;
  textColor?: string;
}
function Pill({ title }: Props) {
  return (
    <span className="bg-gray-400 text-sm text-shadow-sm rounded-lg md:rounded-xl px-3 py-1 text-white">
      {title}
    </span>
  );
}

export default Pill;

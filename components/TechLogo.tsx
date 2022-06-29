import Image from "next/image";
interface Props {
  logo: string;
  height?: number;
  width?: number;
  title?: string;
}

function TechLogo({ logo, title, height, width }: Props) {
  return (
    <div className="flex items-center p-2">
      <Image
        src={logo}
        alt=""
        className="object-cover"
        height={height || 32}
        width={width || 32}
      />
      <p className="ml-2">{title}</p>
    </div>
  );
}

export default TechLogo;

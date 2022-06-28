import Image from "next/image";
import TechLogo from "./TechLogo";

function AboutMe() {
  return (
    <div className="flex space-x-0 items-center pl-4 pr-4 space-y-2 py-4 md:space-x-8 md:py-8 md:space-y-4 bg-[#2b2b2b] lg:py-16 lg:pb-12 lg:pl-16">
      <div className="hidden md:flex">
        <Image
          src="/logo.png"
          alt=""
          className="rounded-full object-cover"
          height="120"
          width="120"
        />
      </div>

      <div className="text-white">
        <h1 className="text-l font-bold lg:text-4xl">About Me ⚡</h1>
        <p className="text-xs mt-1 text-shadow-md md:max-w-4xl md:mt-4 md:text-lg lg:text-lg opacity-75">
          I'm a{" "}
          <span className="text-[#64ffda] font-semibold italic">
            Software Engineer
          </span>{" "}
          and have a solid experience in areas of Software Development since
          2010. I enjoy creating things that live on the internet. My interest
          in web development started back in 2013 with the first version of
          Angular(1.0) while using Bootstrap for web responsiveness. I'm a self
          leaner and loves to explore new technologies and that is how I started
          developing mobile applications using Java and Javascipt (React
          Native).
          <br /> <br /> I've had the privilege of working at &nbsp;
          <span className="text-[#64ffda] font-semibold italic">
            an advertising agency, individuals, a start-up and a huge
            corporation
          </span>
          .
          <br /> <br />
          My{" "}
          <span className="text-[#64ffda] font-semibold italic">
            main focus
          </span>{" "}
          these days is creating full blown development (Frontend, Backend and
          DevOps).
        </p>
        <br />
        <br />
        <h1 className="text-l font-bold lg:text-4xl">Recent Tech Stacks ⌨️</h1>
        <div className="grid grid-cols-3 grid-flow-row gap-2 auto-rows-auto mt-1 text-xs text-shadow-md md:mt-4">
          <TechLogo logo="/es6.png" title="Javascript (ES6+)" />
          <TechLogo logo="/react.png" title="React | React Native" />
          <TechLogo logo="/nodejs.png" title="Node JS" />
          <TechLogo logo="/next.png" title="Next JS" />
          <TechLogo logo="/aws.png" width={72} title="AWS" />
          <TechLogo logo="/typescript.png" title="Typescript" />
        </div>
        {/* <br />
        <h1 className="text-l font-bold lg:text-4xl">Contact Details</h1>
        <p className="max-w-xs text-xs mt-1 text-shadow-md md:mt-4 md:max-w-lg md:text-lg lg:max-w-lg lg:text-lg opacity-60">
          ✉️ santospaulnoel@gmail.com
        </p> */}
      </div>
    </div>
  );
}

export default AboutMe;

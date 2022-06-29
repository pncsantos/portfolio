import Image from "next/image";

import WebProjects from "../data/web-projects.json";
import MobileProjects from "../data/mobile-projects.json";
import Pill from "./Pill";

function FeaturedProjects() {
  return (
    <div className="flex space-x-0 items-center pl-4 pr-4 space-y-2 py-4 md:space-x-8 md:py-4 md:space-y-4 lg:py-16 lg:pb-6 lg:pl-16">
      <div className="hidden md:flex"></div>

      <div className="text-white relative w-full">
        <h1 className="text-l font-bold lg:text-4xl">Featured Projects ⭐</h1>
        <br />

        {/* Web Projects */}
        <div className="p-4">
          <div className="flex">
            <Pill title="👾 Web" />
          </div>

          <div className="py-8 w-full text-center sm:text-base sm:grid sm:grid-flow-col">
            {WebProjects.filter((f) => f.featured).map((project) => {
              return (
                <div key={project.id} className="p-2">
                  <Image
                    src={project.logo}
                    alt={project.name}
                    className={`object-cover cursor-pointer rounded-2xl`}
                    height="200"
                    width="200"
                  />
                </div>
              );
            })}
          </div>
        </div>
        {/* text- */}

        {/* Mobile Projects */}
        <div className="p-4">
          <div className="flex">
            <Pill title="👾 Mobile" />
          </div>

          <div className="py-8 w-full text-center grid grid-flow-col auto-cols-max">
            {MobileProjects.filter((f) => f.featured).map((project) => {
              return (
                <div key={project.id} className="p-2 relative ">
                  <Image
                    src={project.logo}
                    alt={project.name}
                    className="object-contain cursor-pointer bg-black rounded-2xl"
                    height="200"
                    width="200"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProjects;

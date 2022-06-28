import Image from "next/image";
import React from "react";

import WebProjects from "../data/web-projects.json";
import MobileProjects from "../data/mobile-projects.json";
import Pill from "./Pill";

function FeaturedProjects() {
  return (
    <div className="flex space-x-0 items-center pl-4 pr-4 space-y-2 py-4 md:space-x-8 md:py-8 md:space-y-4 lg:py-16 lg:pb-12 lg:pl-16">
      <div className="hidden md:flex"></div>

      <div className="text-white relative w-full">
        <h1 className="text-l font-bold lg:text-4xl">Featured Projects ⭐</h1>
        <br />

        {/* Web Projects */}
        <div className="p-4">
          <div className="flex">
            <Pill title="👾 Web Projects" />
            <Pill
              title="#react"
              color="[#64ffda]"
              textColor="text-black"
              style="ml-4"
            />
            <Pill
              title="#responsive"
              color="[#64ffda]"
              textColor="text-black"
              style="ml-4"
            />
            <Pill
              title="#start-ups"
              color="[#64ffda]"
              textColor="text-black"
              style="ml-4"
            />
          </div>

          <div className="py-8 w-full text-center sm:text-base sm:grid sm:grid-flow-col">
            {WebProjects.filter((f) => f.featured).map((project) => {
              return (
                <div className="p-2">
                  <Image
                    key={project.id}
                    src={project.logo}
                    alt={project.name}
                    className="object-contain cursor-pointer bg-black rounded-2xl"
                    height="256"
                    width="256"
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
            <Pill title="👾 Mobile Projects" />
            <Pill
              title="#react-native"
              color="[#64ffda]"
              textColor="text-black"
              style="ml-4"
            />
            <Pill
              title="#android"
              color="[#64ffda]"
              textColor="text-black"
              style="ml-4"
            />
            <Pill
              title="#ios"
              color="[#64ffda]"
              textColor="text-black"
              style="ml-4"
            />
          </div>

          <div className="py-8 w-full text-center sm:text-base sm:grid sm:grid-flow-col">
            {MobileProjects.filter((f) => f.featured).map((project) => {
              return (
                <div className="p-2">
                  <Image
                    key={project.id}
                    src={project.logo}
                    alt={project.name}
                    className="object-contain cursor-pointer bg-black rounded-2xl"
                    height="256"
                    width="256"
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

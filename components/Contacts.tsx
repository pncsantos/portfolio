import React from "react";

function Contacts() {
  return (
    <div className="flex items-center p-4 !pr-0 md:p-8 md:py-16 !space-x-0 lg:!space-x-0 w-full bg-[#2b2b2b] lg:pr-0 ">
      <div className="text-white text-center !mr-8 w-full">
        <h1 className="text-l font-bold md:text-2xl lg:text-4xl">
          Get In Touch ✉️
        </h1>
        <p className="text-xs mt-1 text-shadow-md !pl-0 md:mt-4 md:text-lg lg:text-lg opacity-75">
          {`Although I'm not currently looking for any new opportunities, my inbox
        is always open. `}
          <br className="hidden md:flex" />
          {`Whether you have a question or just want to say hi, I'll
        try my best to get back to you!`}
        </p>
      </div>
    </div>
  );
}

export default Contacts;

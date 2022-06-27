import Image from "next/image";

function AboutMe() {
  return (
    <div className="flex p-4 space-x-8 md:p-8 md:space-x-12 bg-[#2b2b2b]">
      <div>
        <Image
          src="/me.png"
          alt=""
          className="rounded-full object-cover"
          height="120"
          width="120"
        />
      </div>
      <div>
        <h1 className="text-l font-bold lg:text-4xl">About Me</h1>
        <p className="text-xs mt-1 text-shadow-md md:max-w-4xl md:mt-4 md:text-lg lg:text-lg opacity-60">
          I am a Software Engineer and have a solid experience in areas of
          Software Development. Passionate on developing Mobile, Web and Desktop
          applications.
          <br /> <br /> I have worked with individuals, start-ups and
          established companies as a freelancer and consultant.
        </p>
        <br />
        <h1 className="text-l font-bold lg:text-4xl">Contact Details</h1>
        <p className="max-w-xs text-xs mt-1 text-shadow-md md:mt-4 md:max-w-lg md:text-lg lg:max-w-lg lg:text-lg opacity-60">
          ✉️ santospaulnoel@gmail.com
        </p>
      </div>
    </div>
  );
}

export default AboutMe;

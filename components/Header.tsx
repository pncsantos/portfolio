import { useEffect, useState } from "react";
import { BadgeCheckIcon, SearchIcon } from "@heroicons/react/solid";
import Link from "next/link";
import Image from "next/image";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${isScrolled && "bg-[#141414]"}`}>
      <div className="flex items-center space-x-2 md:space-x-10">
        <Image
          src="/me.png"
          alt=""
          className="rounded-full object-cover cursor-pointer"
          height="48"
          width="48"
        />
        <div className="!ml-4 md:flex">
          <span className="headerLink font-semibold">{`PAUL SANTOS`}</span>
        </div>
      </div>

      <div className="flex items-center space-x-4 text-sm font-light">
        <ul className="hidden space-x-4 md:flex">
          <li className="headerLink">About</li>
          <li className="headerLink">Experience</li>
          <li className="headerLink">Projects</li>
          <li className="headerLink">Contacts</li>
        </ul>
      </div>
    </header>
  );
}

export default Header;

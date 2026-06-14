import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { links } from "../constants/links";
import { useToggle } from "../hooks/useToggle";

const Navbar = () => {
  const [toggle, setToggle] = useToggle();
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map((l) => l.anchor.replace("#", ""));
      let current = "";

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (!section) return;

        const rect = section.getBoundingClientRect();

        if (rect.top <= 120 && rect.bottom >= 120) current = `#${id}`;
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="flex flex-col lg:flex-row justify-between px-3 lg:px-7 items-center 
    w-full py-3.5 fixed bg-linear-to-r from-[#04071D] to-[#0C0E23] z-10">
      <div className="flex justify-between items-center w-full">
        <h2 className="text-white text-xl hover:text-[#CBACF9] cursor-pointer">
          Samuel Alac
        </h2>
        <AiOutlineMenu className="text-white text-2xl lg:hidden" role="button" onClick={setToggle}/>
      </div>

      <nav className={`flex items-center flex-col lg:flex-row ${!toggle && 'hidden'} lg:flex gap-5 text-lg`}>
        {links.map((link, index) => {
          const isActive = active === link.anchor;

          return (
            <a key={index} href={link.anchor}
              className={`transition-colors ${ isActive ? "text-[#CBACF9]" : "text-white"} hover:text-[#CBACF9]`}>
              {link.name}
            </a>
          );
        })}
      </nav>
    </section>
  );
};

export default Navbar;
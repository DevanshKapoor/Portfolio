import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);

  };

  return (
    <div className="flex flex-row md:flex-row p-4 justify-between border-b border-yellow-500 align-top">
      <h1 className="roboto-bold text-grad text-xl md:text-xl lg:text-2xl">DEVANSH</h1>

      <button
        className="block md:hidden text-yellow-500 text-2xl self-start "
        onClick={toggleMenu}
      >
        ☰
      </button>

      {/* Menu */}
      <ul
        className={`flex-col md:flex-row flex gap-3 md:gap-6 lg:gap-8 transition-all duration-300 ${
          isMenuOpen ? "flex" : "hidden"
        } md:flex`}
      >
        <li className="hover:text-yellow-500 text-base md:text-lg lg:text-xl">
          <a
            href="https://drive.google.com/file/d/1IPeCL9xDMYrbDAIbcaH-h89XoVsiEACk/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </li>
        <li className="hover:text-yellow-500 text-base md:text-lg lg:text-xl">
          <a href="#skills">Skills</a>
        </li>
        <li className="hover:text-yellow-500 text-base md:text-lg lg:text-xl">
          <a href="#stack">Stack</a>
        </li>
        <li className="hover:text-yellow-500 text-base md:text-lg lg:text-xl">
          <a href="#projects">Projects</a>
        </li>
        <li className="hover:text-yellow-500 text-base md:text-lg lg:text-xl">
          <a href="#links">Links</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

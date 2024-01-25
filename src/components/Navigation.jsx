import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export function Navigation({ darkMode, toggleDarkMode }) {
  return (
    <div className="flex flex-col text-white bg-neutral-700 bg-opacity-20 p-5">
      <div className="flex flex-row justify-center items-center gap-x-48 flex-wrap  text-normal font-light tracking-wider">
        <div>
          <Link to="/">
            <img className=" h-16" src="assets/logo.png" />
          </Link>
        </div>
        <div className=" grid grid-cols-4 justify-items-center gap-16 p-5 ">
          <HashLink smooth className=" col-span-1" to="/">
            Home
          </HashLink>
          <HashLink smooth className=" col-span-1" to="/#projects">
            Projects
          </HashLink>
          <HashLink smooth className=" col-span-1" to="/#experience">
            Experience
          </HashLink>
          <HashLink smooth className=" col-span-1" to="/#contact">
            Contact
          </HashLink>
        </div>
      </div>
      <div className="flex flex-row justify-end 2xl:left-96 mt-5">
        <div className=" bg-slate-300 max-w-14 rounded-full p-1 2xl:relative 2xl:right-1/4 hover:bg-amber-400 duration:300 ">
          <img
            className="brightness-100"
            onClick={toggleDarkMode}
            src={darkMode ? "assets/dark-mode.png" : "assets/light-mode.png"}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

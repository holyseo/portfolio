import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export function Navigation({ darkMode, toggleDarkMode }) {
  console.log(darkMode, toggleDarkMode);
  return (
    <div className="flex flex-col text-white bg-neutral-700 bg-opacity-20 p-5">
      <div className="flex flex-row justify-center items-center gap-x-48 flex-wrap  text-normal font-light tracking-wider">
        <div className=" pl-10">
          <Link to="/">
            <img className=" h-16" src={"src/assets/logo.png"} />
          </Link>
        </div>
        <div className=" grid grid-cols-4 gap-12 p-10 ">
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
      <div className="place-self-center grid grid-cols-4 w-4/5 justify-end ">
        <div className=" col-start-5 col-end-6 bg-slate-300 max-w-14 rounded-full p-0.5 hover:bg-amber-400">
          <img
            className="brightness-100"
            onClick={toggleDarkMode}
            src={
              darkMode
                ? "src/assets/dark-mode.png"
                : "src/assets/light-mode.png"
            }
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

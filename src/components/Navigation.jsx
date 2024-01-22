import { HashLink } from "react-router-hash-link";

export function Navigation() {
  return (
    <div className="flex flex-row justify-center items-center gap-x-48 py-5 flex-wrap  whitespace-nowrap text-white bg-neutral-700 bg-opacity-20 text-normal font-light tracking-wider">
      <div className=" pl-10">
        <img className=" h-16" src={"src/assets/logo.png"} />
      </div>
      <div className=" grid grid-cols-4 gap-12 p-10 ">
        <HashLink className=" col-span-1" to="/">
          Home
        </HashLink>
        <HashLink className=" col-span-1" to="/#projects">
          Projects
        </HashLink>
        <HashLink className=" col-span-1" to="/#experience">
          Experience
        </HashLink>
        <HashLink className=" col-span-1" to="/#contact">
          Contact
        </HashLink>
      </div>
    </div>
  );
}

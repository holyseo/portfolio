import { HashLink } from "react-router-hash-link";

export function Navigation() {
  return (
    <div className="flex flex-row justify-center gap-x-48 gap-y-8 h-auto py-5 flex-wrap  whitespace-nowrap text-white bg-neutral-700 bg-opacity-20 text-normal font-light tracking-wider">
      <div className=" my-auto pl-5">
        <img className=" h-16" src={"src/assets/logo.png"} />
      </div>
      <div className=" flex flex-row  my-auto ">
        <HashLink smooth to="/">
          <div className=" px-5">Home</div>
        </HashLink>
        <HashLink smooth to="/#projects">
          <div className=" px-5">Projects</div>
        </HashLink>
        <HashLink smooth to="/#experience">
          <div className=" px-5">Experience</div>
        </HashLink>
        <HashLink smooth to="/#contact">
          <div className=" px-5">Contact</div>
        </HashLink>
      </div>
    </div>
  );
}

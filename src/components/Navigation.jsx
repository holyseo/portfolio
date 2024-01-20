export function Navigation() {
  return (
    <div className=" grid grid-cols-3 whitespace-nowrap text-white h-24 bg-neutral-700 bg-opacity-20 text-normal font-light tracking-wider min-w-96">
      <div className=" col-span-1 m-auto ">
        <img className=" h-16" src={"src/assets/logo.png"} />
      </div>
      <div className=" col-span-2 flex flex-row justify-evenly my-auto">
        <div className=" min-w-fit px-2">Home</div>
        <div className=" min-w-fit px-2">Projects</div>
        <div className=" min-w-fit px-2">Experience</div>
        <div className=" min-w-fit px-2">Contact</div>
      </div>
    </div>
  );
}

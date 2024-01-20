export function Navigation() {
  return (
    <div className="flex flex-row justify-center gap-x-48 gap-y-8 h-auto py-5 flex-wrap  whitespace-nowrap text-white bg-neutral-700 bg-opacity-20 text-normal font-light tracking-wider">
      <div className=" my-auto pl-5">
        <img className=" h-16" src={"src/assets/logo.png"} />
      </div>
      <div className=" flex flex-row  my-auto ">
        <div className=" px-5">Home</div>
        <div className=" px-5">Projects</div>
        <div className=" px-5">Experience</div>
        <div className=" px-5">Contact</div>
      </div>
    </div>
  );
}

export function Main() {
  return (
    <div>
      <div className=" max-w-3xl mx-auto px-14 flex flex-col py-12 place-items-center gap-5">
        <div className=" text-white ">
          <img src={"./src/assets/memoji.png"} />
        </div>
        <div className="grid grid-cols place-items-center pt-8">
          <div className=" text-white  rows-span text-center font-mono text-5xl font-extrabold tracking-tight">
            <p className="py-1">I do code and</p>
            <p className="py-1">
              make content{" "}
              <span className=" bg-gradient-to-r from-orange-400 from-10% via-40% to-pink-600 bg-clip-text text-transparent">
                about it!
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className=" max-w-3xl mx-auto px-8 text-white font-thin text-center text-base font-semilight tracking-wide leading-6">
        I am a seasoned full-stack software engineer with over 8 years of
        professional experience, specializing in backend development. My
        expertise lies in crafting robust and scalable SaaS-based architectures
        on the Amazon AWS platform.
      </div>
      <div className="text-white grid grid-cols-5 py-10">
        <div></div>
        <div className="col-span-3 flex flex-row flex-wrap place-content-center justify-center gap-5 font-bold text-lg">
          <button className=" border-white border-2 px-8 py-3 rounded-full bg-white text-black">
            Get In Touch
          </button>
          <button className=" border-white border-2 px-8 py-3 rounded-full ">
            Download CV
          </button>
        </div>

        <div></div>
      </div>
    </div>
  );
}

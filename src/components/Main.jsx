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
              make content
              <span className=" bg-gradient-to-r from-orange-400 from-10% via-40% to-pink-600 bg-clip-text text-transparent">
                {} about it!
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
      </div>
      <div className="flex flex-col items-center ">
        <div className="py-16 uppercase text-stone-300 text-2xl font-bold tracking-widest">
          <span className=" bg-gradient-to-r from-pink-600 from-10% via-40% to-blue-400 bg-clip-text text-transparent">
            Experience with:
          </span>
        </div>
        <div className="flex flex-row flex-wrap justify-center text-stone-300 gap-x-10 gap-y-3 px-16">
          <div className="bg-white rounded-lg p-1">
            <img className=" h-12" src="./src/assets/JS.svg" alt="" />
          </div>
          <div className="bg-white rounded-lg p-1">
            <img className=" h-12" src="./src/assets/TS.png" alt="" />
          </div>
          <div className="bg-white rounded-lg p-1">
            <img className=" h-12" src="./src/assets/node_js.jpg" alt="" />
          </div>
          <div className="bg-white rounded-lg p-1">
            <img className=" h-12" src="./src/assets/React.png" alt="" />
          </div>
          <div className="bg-white rounded-lg p-1">
            <img className=" h-12" src="./src/assets/HTML5.png" alt="" />
          </div>
          <div className="bg-white rounded-lg p-1">
            <img className=" h-12" src="./src/assets/CSS.png" alt="" />
          </div>
          <div className="bg-white rounded-lg p-1">
            <img className=" h-12" src="./src/assets/Tailwind_css.png" alt="" />
          </div>
          <div className="bg-white rounded-lg p-1">
            <img className=" h-12" src="./src/assets/github.png" alt="" />
          </div>
          <div className="bg-white rounded-lg p-1">
            <img className=" h-12" src="./src/assets/WordPress.png" alt="" />
          </div>
          <div className="bg-white rounded-lg p-1">
            <img className=" h-12" src="./src/assets/psql.png" alt="" />
          </div>
          <div className="bg-white rounded-lg p-1">
            <img className=" h-12" src="./src/assets/mongodb.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

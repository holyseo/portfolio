export function Main() {
  return (
    <div>
      <div className=" max-w-5xl mx-auto px-14 flex flex-col pt-12 place-items-center gap-5">
        <div className=" text-white ">
          <img src={"./src/assets/memoji.png"} />
        </div>
        <div className="grid grid-cols place-items-center pt-8">
          <div className=" text-white rows-span text-center font-mono text-4xl font-extrabold tracking-normal ">
            <p className="py-5">
              Hi! I'm
              <span className=" bg-gradient-to-r from-yellow-500 from-30% via-60% to-rose-400 bg-clip-text text-transparent">
                {} Steven
              </span>
              <span>.</span>
              <p className="py-8 leading-normal">
                A fullstack developer building bridges between
                <span className=" bg-gradient-to-r from-lime-500 from-20% via-60% to-orange-400 bg-clip-text text-transparent">
                  {} imagination
                </span>
                {} and
                <span className=" bg-gradient-to-r from-blue-300 from-20% via-60% to-pink-700 bg-clip-text text-transparent">
                  {} innvoation
                </span>
                {} through cutting-edge software and web development
              </p>
            </p>
          </div>
        </div>
      </div>

      <div className=" max-w-3xl mx-auto text-gray-300 px-5 text-center text-lg font-light tracking-wider leading-7">
        Following a successful career in the NGO and Pharmacy sectors, I am now
        seeking a career in Software Development. My academic achievements
        include a Bachelor’s and Master’s degree in Information Science and a
        Bachelor’s degree in Pharmacy. I am highly skilled and committed to
        becoming a successful Software Developer. I have gained valuable
        experience and knowledge in industry best practices as a junior
        full-stack developer and web developer.
      </div>
      <div className="text-white grid grid-cols-5 py-10">
        <div></div>
        <div className="col-span-3 flex flex-row flex-wrap place-content-center justify-center gap-10 font-bold text-lg">
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
          <span className=" bg-gradient-to-r from-amber-200 from-10% via-40% to-blue-300 bg-clip-text text-transparent">
            Experience with:
          </span>
        </div>

        <div className="flex flex-row flex-wrap justify-center text-stone-300 gap-x-10 gap-y-3 px-16">
          <div className="grayscale hover:grayscale-0 rounded-lg p-1">
            <img
              className=" h-14 bg-white rounded-lg"
              src="./src/assets/JS.svg"
              alt=""
            />
          </div>
          <div className=" grayscale hover:grayscale-0 rounded-lg p-1">
            <img
              className=" h-14 bg-white rounded-lg"
              src="./src/assets/TS.png"
              alt=""
            />
          </div>
          <div className=" grayscale hover:grayscale-0 rounded-lg p-1">
            <img
              className=" h-14 bg-white rounded-lg"
              src="./src/assets/node_js.jpg"
              alt=""
            />
          </div>
          <div className=" grayscale hover:grayscale-0 rounded-lg p-1">
            <img
              className=" h-14 bg-white rounded-lg"
              src="./src/assets/React.png"
              alt=""
            />
          </div>
          <div className=" grayscale hover:grayscale-0 rounded-lg p-1">
            <img
              className=" bg-white p-1 h-14 rounded-lg"
              src="./src/assets/HTML5.png"
              alt=""
            />
          </div>
          <div className="  grayscale hover:grayscale-0 p-1">
            <img
              className=" bg-white rounded-lg h-14"
              src="./src/assets/CSS.png"
              alt=""
            />
          </div>
          <div className=" grayscale hover:grayscale-0 rounded-lg p-1">
            <img
              className=" h-14 bg-white rounded-lg"
              src="./src/assets/Tailwind_css.png"
              alt=""
            />
          </div>
          <div className=" rounded-lg p-1">
            <img
              className=" h-14 bg-white p-1 rounded-lg"
              src="./src/assets/github.png"
              alt=""
            />
          </div>
          <div className=" grayscale hover:grayscale-0 rounded-lg p-1">
            <img
              className=" h-14 bg-white p-1 rounded-lg"
              src="./src/assets/WordPress.png"
              alt=""
            />
          </div>
          <div className=" grayscale hover:grayscale-0 rounded-lg p-1">
            <img
              className=" h-14 bg-white p-1 rounded-lg"
              src="./src/assets/psql.png"
              alt=""
            />
          </div>
          <div className=" grayscale hover:grayscale-0 rounded-lg p-1">
            <img
              className=" h-14 bg-white p-1 rounded-lg"
              src="./src/assets/mongodb.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export function Main() {
  const img_src = [
    "JS.svg",
    "TS.png",
    "node_js.jpg",
    "React.png",
    "HTML5.png",
    "CSS.png",
    "Tailwind_CSS.png",
    "github.png",
    "WordPress.png",
    "psql.png",
    "mongodb.png",
  ];

  return (
    <div>
      <div className=" max-w-5xl mx-auto px-14 flex flex-col pt-12 place-items-center gap-5">
        <div className=" text-white ">
          <img src={"assets/memoji.png"} alt="memoji" />
        </div>
        <div className="grid grid-cols place-items-center pt-8">
          <div className=" text-white rows-span text-center font-mono text-lg md:text-2xl xl:text-4xl font-extrabold tracking-normal">
            <p className=" py-5">
              Hi! I'm
              <span className=" bg-gradient-to-r from-yellow-500 from-30% via-60% to-rose-400 bg-clip-text text-transparent">
                {} Steven
              </span>
              <span>.</span>
            </p>
            <p className=" leading-normal">
              A fullstack developer building bridges between
              <span className=" bg-gradient-to-r from-lime-500 from-20% via-60% to-blue-600 bg-clip-text text-transparent">
                {} imagination
              </span>
              {} and
              <span className=" bg-gradient-to-r from-blue-300 from-20% via-60% to-pink-700 bg-clip-text text-transparent">
                {} innovation
              </span>
              {} through cutting-edge software and web development
            </p>
          </div>
        </div>
      </div>

      <div className="py-8 max-w-3xl mx-auto text-gray-300 px-5 text-center leading-1 text-sm md:leading-5 xl:text-lg xl:leading-7 font-light tracking-wider ">
        Following a successful career in the NGO and Pharmacy sectors, I am now
        seeking a career in Software Development. My academic achievements
        include a Bachelor’s and Master’s degree in Information Science and a
        Bachelor’s degree in Pharmacy. I am highly skilled and committed to
        becoming a successful Software Developer. I have gained valuable
        experience and knowledge in industry best practices as a junior
        full-stack developer and web developer.
      </div>
      <div className="text-white grid grid-cols-5 md:py-5 xl:py-10">
        <div></div>
        <div className="col-span-3 flex flex-row flex-wrap place-content-center justify-center gap-3 text-sm md:gap-7 md:text-md xl:gap-10 xl:text-lg font-bold">
          <a href="mailto:stevenbseo@icloud.com">
            <button className=" border-white border-2 px-8 py-3 rounded-full bg-white text-black">
              Get In Touch
            </button>
          </a>
          <a href="assets/Steven_Seo_CV_Portfolio" download>
            <button className=" border-white border-2 px-8 py-3 rounded-full ">
              Download CV
            </button>
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center ">
        <div className="py-16 uppercase text-stone-300 font-bold tracking-widest">
          <span className=" bg-gradient-to-r from-amber-500 from-10% via-40% to-sky-500 text-2xl bg-clip-text text-transparent">
            Experience with:
          </span>
        </div>

        <div className="flex flex-row flex-wrap justify-center text-stone-300 gap-x-10 gap-y-3 px-16">
          {img_src.map((i, index) => (
            <div key={index} className=" hover:animate-pulse rounded-lg">
              <img
                className=" w-12 bg-white rounded-lg p-0.5"
                src={`assets/${i}`}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

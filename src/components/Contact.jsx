export function Contact() {
  return (
    <footer>
      <div
        id="contact"
        className="grid grid-cols-5 place-items-center w-full p-14 bg-neutral-700 bg-opacity-20 shadow mt-20  "
      >
        <div className=" col-span-1 "></div>
        <div className=" col-span-2 text-white">
          <span className=" text-3xl font-bold">Contact</span>
          <div className="text-md py-8 max-w-4xl">
            I am highly skilled and committed to becoming a successful Software
            Developer. I have gained valuable experience and knowledge in
            industry best practices as a junior full-stack developer and web
            developer.
          </div>

          <div className=" max-w-16 flex flex-row justify-start gap-3">
            <div>
              <img
                className="max-w-8"
                src="./src/assets/LinkedIn_icon_circle.svg.png"
                alt="LinkedIn"
              />
            </div>
            <div className="rounded-full ">
              <img
                className="max-w-8 rounded-full"
                src="./src/assets/github-mark-white.png"
                alt="GitHub"
              />
            </div>{" "}
            <div className="rounded-full ">
              <img
                className="max-w-8 rounded-full"
                src="./src/assets/Mail_(iOS).svg.png"
                alt="GitHub"
              />
            </div>
          </div>
        </div>
        <div className="col-span-2 text-white"></div>
      </div>
    </footer>
  );
}

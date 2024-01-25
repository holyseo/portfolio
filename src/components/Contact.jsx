export function Contact() {
  return (
    <footer>
      <div
        id="contact"
        className="grid grid-cols-5 w-full gap-x-16 p-8 bg-neutral-700 bg-opacity-20 shadow mt-20  "
      >
        <div className=" col-span-1 "></div>
        <div className=" col-span-3 text-white">
          <span className=" text-2xl md:text-3xl xl:text-5xl font-bold">
            Contact
          </span>
          <div className="text-md py-8 max-w-4xl">
            I am highly skilled and committed to becoming a successful Software
            Developer. I have gained valuable experience and knowledge in
            industry best practices as a junior full-stack developer and web
            developer.
          </div>

          <div className=" max-w-16 flex flex-row justify-start gap-3">
            <div>
              <a href="https://www.linkedin.com/in/steven-seo/" target="_blank">
                <img
                  className="max-w-8"
                  src="assets/LinkedIn_icon_circle.svg.png"
                  alt="LinkedIn"
                />
              </a>
            </div>
            <div className="rounded-full ">
              <a href="https://github.com/holyseo" target="_blank">
                <img
                  className="max-w-8 rounded-full"
                  src="assets/github-mark-white.png"
                  alt="GitHub"
                />
              </a>
            </div>{" "}
            <div className="rounded-full ">
              <a href="mailto:stevenbseo@icloud.com">
                <img
                  className="max-w-8 rounded-full"
                  src="assets/Mail_(iOS).svg.png"
                  alt="email"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="col-span-2 text-white"></div>
      </div>
    </footer>
  );
}

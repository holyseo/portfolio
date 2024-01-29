export function Contact() {
  return (
    <footer>
      <div id="contact" className=" p-5 bg-neutral-700 bg-opacity-20 mt-20  ">
        <div className="flex flex-row justify-center flex-wrap gap-8 text-white ">
          <div>
            <div className=" text-2xl md:text-3xl xl:text-5xl font-bold">
              Contact
            </div>
            <div className="text-lg py-8 max-w-3xl">
              I'm enthusiastic about discussing potential projects, both
              Front-end and Back-end, exploring innovative solutions, or even
              just having a casual conversation about the world of technology.
              Your inquiries are always welcome, and I look forward to the
              opportunity to connect with fellow enthusiasts and industry
              professionals alike. Let's start a conversation and bring your
              ideas to life!
            </div>
            <div className=" max-w-16 flex flex-row justify-start gap-3">
              <div>
                <a
                  href="https://www.linkedin.com/in/steven-seo/"
                  target="_blank"
                >
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
          <div className=" px-3 py-5 w-full md:w-4/5 lg:w-3/4 xl:w-1/3 bg-gray-400 rounded-sm ">
            <form action="">
              <div className=" flex flex-row justify-between gap-3">
                <input
                  className="w-1/2 shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-1.5 "
                  placeholder="Name"
                  type="text"
                  name="name"
                  id="name"
                />
                <input
                  className=" w-1/2 shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-1.5 "
                  placeholder="Email address"
                  type="text"
                  name="email"
                  id="email"
                />
              </div>
              <div className="flex flex-col mt-5">
                <input
                  className="shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-1.5 
                  "
                  placeholder="Subject"
                  type="text"
                  name="subject"
                  id="subject"
                />
              </div>
              <div className="flex flex-col mt-5">
                <textarea
                  rows={5}
                  className="shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-1.5 
                  "
                  placeholder="Message"
                  name="message"
                  id="message"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className=" bg-blue-400 px-3 py-1 border-2 border-gray-600 rounded-md mt-5 hover:bg-blue-600"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}

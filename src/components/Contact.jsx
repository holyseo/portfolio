export function Contact() {
  return (
    <footer>
      <div className="grid grid-cols-5  w-full p-14 bg-neutral-700 bg-opacity-20 shadow mt-20  ">
        <div className=" col-span-1 "></div>
        <div className=" col-span-3 text-white">
          <span className=" text-3xl font-bold">Contact</span>
          <div className="text-md py-8">
            Seasoned Full Stack Software Engineer with over 8 years of hands-on
            experience in designing and implementing robust, scalable, and
            innovative web solutions. Adept at leveraging a comprehensive skill
            set encompassing front-end and back-end technologies
          </div>
          <div className="flex flex-row justify-start gap-3">
            <div className="my-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
              >
                <path
                  d="M2.83719 3.09485H13.6693C14.3815 3.09485 14.9589 3.67219 14.9589 4.38439V12.1216C14.9589 12.8338 14.3815 13.4112 13.6693 13.4112H2.83719C2.125 13.4112 1.54765 12.8338 1.54765 12.1216V4.38439C1.54765 3.67219 2.125 3.09485 2.83719 3.09485Z"
                  stroke="white"
                  stroke-width="0.884256"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.8954 5.1582L8.25304 8.76891L3.6107 5.1582"
                  stroke="white"
                  stroke-width="0.884256"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="my-auto">stevenbseo@icloud.com</div>
          </div>
          <div className="flex flex-row justify-start gap-6 py-10">
            <div>LinkedIn</div>
            <div>Github</div>
            <div>X</div>
          </div>
        </div>
      </div>
    </footer>
  );
}

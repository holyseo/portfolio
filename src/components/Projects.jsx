import { useState } from "react";

export function Projects({ darkMode }) {
  const [activeTab, setActiveTab] = useState("news");

  const data = [
    {
      label: "News App",
      value: "news",
      desc: (
        <>
          : <span className="underline underline-offset-2">Full-stack </span>{" "}
          software was developed as part of my Northcoders Software Development
          Bootcamp. It is a user-friendly React application designed for
          exploring news articles. Users can easily browse through a list of
          articles, filter them by topic, and customise the display with sorting
          options."
        </>
      ),
      skills: `: JavaScript, React, NodeJS, ExpressJS, PSQL, REST API, Jest, HTML and CSS`,
      src: "assets/news.png",
      ref_links: (
        <>
          :
          <span className="font-bold text-blue-800 ">
            <a href="https://github.com/holyseo/news-api" target="_blank">
              {" "}
              News API,
            </a>
            <a href="https://github.com/holyseo/react-movies" target="_blank">
              {" "}
              News Frontend
            </a>
          </span>
        </>
      ),
    },
    {
      label: "Dashboard",
      value: "dash",
      desc: (
        <>
          : <span className="underline underline-offset-2">Frontend</span>{" "}
          development project for a technical evaluation by a software company
          based in Cambridgeshire. The goal of this task was to evaluate my
          knowledge of fundamental web development concepts, my ability to
          follow provided designs, and my capability to deliver a product that
          matched the given instructions. An Adobe XD UI prototype was provided,
          along with components, a color palette, and a font list to use for
          this task."
        </>
      ),
      skills: `: JavaScript, React, Vite, response design, HTML and TailwindCSS`,
      src: "assets/dashboard.png",
      ref_links: (
        <>
          :
          <span className="font-bold text-blue-800 ">
            <a href="https://28b-dashboard.netlify.app/" target="_blank">
              {" "}
              Live project
            </a>
          </span>
        </>
      ),
    },
    {
      label: "TMDB Movie Explorer",
      value: "movie",
      desc: (
        <>
          : This project showcases my skills in front-end development and API
          integration. Leveraging the power of the TMDB (The Movie Database)
          API, this application provides users with a seamless experience to
          explore and discover information about movies. Users can browse
          through an extensive database of movies, access details such as cast,
          crew, release date, and ratings.
        </>
      ),
      skills: ": JavaScript, React, TMDB API, HTML and CSS",
      src: "assets/movie_api.jpg",
      ref_links: (
        <>
          :
          <span className="font-bold text-blue-800 ">
            <a href="https://github.com/holyseo/react-movies" target="_blank">
              {} Movie Explorer
            </a>
          </span>
        </>
      ),
    },
    {
      label: "Real-time Chat",
      value: "realtime",
      desc: (
        <>
          <span>
            : This project was to develop React-based chat application powered
            by Socket.io. This dynamic application allows users to engage in
            instant conversations, fostering seamless communication and
            collaboration.
          </span>
          <div className="mt-2">
            Whether for social interaction or team collaboration, this chat app
            provides a reliable and responsive platform for users to connect.
          </div>
        </>
      ),
      skills:
        ": JavaScript, React, Socket.IO, NodeJS, ExpressJS, HTML and TailwindCSS",
      src: "assets/realtime_chat.png",
      ref_links: (
        <>
          :
          <span className="font-bold text-blue-800 ">
            <a href="https://github.com/holyseo/realtime-chat" target="_blank">
              {} Realtime chat
            </a>
          </span>
        </>
      ),
    },
    {
      label: "Music Player",
      value: "music",
      desc: (
        <>
          <span>
            : This is my personal project to create a dynamic and user-friendly
            UI for a music player. Despite being developed exclusively with HTML
            and CSS, the UI successfully demonstrates the ability to create a
            dynamic and user-friendly interface, showcasing the importance of
            thoughtful design and attention to detail.
          </span>
          <div className="mt-2">
            This project highlights my skills in front-end development and user
            interface design, illustrating the potential to create impactful
            digital experiences.
          </div>
        </>
      ),
      skills: ": HTML and CSS",
      src: "assets/music_player.png",
      ref_links: (
        <>
          :
          <span className="font-bold text-blue-800 ">
            <a
              href="https://replit.com/@holyseo/NomadChallenge02-03June2023-1"
              target="_blank"
            >
              {} Music Player UI
            </a>
          </span>
        </>
      ),
    },
    {
      label: "Messenger UI",
      value: "messenger",
      desc: (
        <>
          : Messenger UI clone project replicates the familiar and user-friendly
          interface of a popular messaging application, KakaoTalk. This project
          is a testament to my skills in front-end development, UI design, and
          the ability to recreate a widely-used and intuitive messaging
          experience.
        </>
      ),
      skills: ": HTML and CSS",
      ref_links: (
        <>
          :
          <span className="font-bold text-blue-800 ">
            <a
              href="https://holyseo.github.io/kokoa-clone-2023/"
              target="_blank"
            >
              {} Messenger UI
            </a>
          </span>
        </>
      ),
      src: "assets/messenger.png",
    },
    {
      label: "WordPress",
      value: "wordpress",
      desc: (
        <>
          : A dynamic WordPress website seamlessly blends functionality and
          aesthetics. This project showcases my expertise in WordPress
          development, bringing to life a website that not only serves its
          purpose but also offers a visually engaging and user-friendly
          experience.
        </>
      ),
      skills: ": WordPress, custom plugins, HTML and CSS",
      ref_links: (
        <>
          :
          <ul className="my-1 font-bold text-blue-800 ">
            <li>
              <a href="https://www.relationalpeacebuilding.org" target="_blank">
                {} - Ralational Peacebuilding Initiatives
              </a>
            </li>
          </ul>
          <ul className="my-1 font-bold text-blue-800 ">
            <li>
              <a href="https://www.relationalresearch.org" target="_blank">
                {} - Ralational Research
              </a>
            </li>
          </ul>
          <ul className="my-1 font-bold text-blue-800 ">
            <li>
              <a href="https://www.the-relationist.net" target="_blank">
                {} - Ralationist
              </a>
            </li>
          </ul>
        </>
      ),
      src: "assets/wp_collection.png",
    },
  ];

  return (
    <div id="projects" className="flex flex-col px-3 my-24 place-items-center">
      <div className=" bg-gradient-to-b from-orange-600 from-30% via-90% to-orange-400 bg-clip-text text-transparent uppercase font-extrabold text-2xl md:text-3xl xl:text-5xl p-5">
        Projects
      </div>
      <div
        className={` font-mono rounded-xl text-base mt-8 text-stone-400 p-3 max-w-6xl ${
          darkMode ? "bg-slate-300" : "bg-white"
        }`}
      >
        <div className="flex flex-col">
          <div className="flex flex-row flex-wrap justify-start px-5 pb-5 tracking-tight border-b-2 border-gray-600 place-items-center gap-x-5 cursor-pointe border-opacity-30">
            {data.map(({ label, value }) => (
              <div
                key={value}
                value={value}
                onClick={() => setActiveTab(value)}
                className={
                  activeTab === value
                    ? " text-gray-900 border-2 shadow-slate-950 shadow-md transition-shadow bg-orange-300 rounded-md border-gray-800 my-2 p-3 font-semibold"
                    : " p-3 text-black text-md  cursor-pointer"
                }
              >
                {label}
              </div>
            ))}
          </div>
          <div className="my-6">
            {data.map(({ value, desc, src, skills, ref_links }) =>
              activeTab === value ? (
                <div
                  key={value}
                  value={value}
                  className="p-3 text-left text-gray-800 rounded-2xl"
                >
                  <div className="flex flex-row flex-wrap justify-center">
                    <div className="max-w-lg p-3 duration-700 hover:scale-110">
                      <img
                        src={src}
                        alt=""
                        className="rounded-lg drop-shadow-2xl "
                      />
                    </div>
                    <div className="flex flex-col max-w-xl gap-6 p-3 text-sm">
                      <div>
                        <span className="text-base font-extrabold">
                          Description
                        </span>
                        {desc}
                      </div>
                      <div>
                        <span className="text-base font-extrabold ">
                          Tech stacks
                        </span>
                        {skills}
                      </div>
                      <div>
                        <span className="text-base font-extrabold ">
                          Project link
                        </span>
                        {ref_links}
                      </div>
                    </div>
                    <div className="max-w-xl p-3"></div>
                  </div>
                </div>
              ) : null
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

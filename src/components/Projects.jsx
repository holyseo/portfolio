import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { useState } from "react";

export function Projects({ darkMode }) {
  const [activeTab, setActiveTab] = useState("movie");

  const data = [
    {
      label: "The Movie Database",
      value: "movie",
      desc: `It really matters and then like it really doesn't matter.
          What matters is the people who are sparked by it. And the people
          who are like offended by it, it doesn't matter.`,
      src: "src/assets/movie_api.jpg",
    },
    {
      label: "Real-time Messenger",
      value: "react",
      desc: `Because it's about motivating the doers. Because I'm here
          to follow my dreams and inspire other people to follow their dreams, too.`,
      src: "src/assets/realtime_chat.png",
    },
    {
      label: "Music Player",
      value: "vue",
      desc: `We're not always in the position that we want to be at.
          We're constantly growing. We're constantly making mistakes. We're
          constantly trying to express ourselves and actualize our dreams.`,
      src: "src/assets/music_player.png",
    },
    {
      label: "News API",
      value: "news_api",
      desc: `Because it's about motivating the doers. Because I'm here
          to follow my dreams and inspire other people to follow their dreams, too.`,
      src: "src/assets/music_player.png",
    },
    {
      label: "WordPress",
      value: "svelte",
      desc: `We're not always in the position that we want to be at.
          We're constantly growing. We're constantly making mistakes. We're
          constantly trying to express ourselves and actualize our dreams.`,
      src: "src/assets/music_player.png",
    },
  ];

  return (
    <div
      id="projects"
      className="flex flex-col place-items-center my-24 text-white text-2xl px-3"
    >
      <div className=" bg-gradient-to-b from-orange-600 from-30% via-90% to-orange-400 bg-clip-text text-transparent uppercase font-extrabold text-3xl">
        Projects
      </div>
      <div
        className={` font-mono rounded-xl text-base mt-8 text-stone-400 p-3 max-w-7xl ${
          darkMode ? "bg-slate-300" : "bg-white"
        }`}
      >
        <div className="flex flex-col">
          <div className="flex flex-row flex-wrap place-items-center justify-center px-5 gap-x-14 cursor-pointe border-b-2 border-gray-600 border-opacity-30">
            {data.map(({ label, value }) => (
              <div
                key={value}
                value={value}
                onClick={() => setActiveTab(value)}
                className={
                  activeTab === value
                    ? " text-gray-900 border-4 bg-orange-300 rounded-md border-gray-800  my-2 p-3 font-semibold"
                    : " p-3 text-black text-md"
                }
              >
                {label}
              </div>
            ))}
          </div>
          <div className="my-6">
            {data.map(({ value, desc, src }) =>
              activeTab === value ? (
                <div
                  key={value}
                  value={value}
                  className=" p-3 rounded-2xl text-gray-800 text-left"
                >
                  <div className="flex flex-row flex-wrap justify-center gap-3">
                    <div className="p-2 max-w-md">
                      <img src={src} alt="" className="rounded-2xl " />
                    </div>
                    <div className="p-2 max-w-3xl">{desc}</div>
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

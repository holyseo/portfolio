import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { useState } from "react";

export function Projects() {
  const [activeTab, setActiveTab] = useState("html");
  const data = [
    {
      label: "HTML",
      value: "html",
      desc: `It really matters and then like it really doesn't matter.
          What matters is the people who are sparked by it. And the people
          who are like offended by it, it doesn't matter.`,
    },
    {
      label: "React",
      value: "react",
      desc: `Because it's about motivating the doers. Because I'm here
          to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "Vue",
      value: "vue",
      desc: `We're not always in the position that we want to be at.
          We're constantly growing. We're constantly making mistakes. We're
          constantly trying to express ourselves and actualize our dreams.`,
    },
    {
      label: "Angular",
      value: "angular",
      desc: `Because it's about motivating the doers. Because I'm here
          to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "Svelte",
      value: "svelte",
      desc: `We're not always in the position that we want to be at.
          We're constantly growing. We're constantly making mistakes. We're
          constantly trying to express ourselves and actualize our dreams.`,
    },
  ];

  return (
    <div
      id="projects"
      className="flex flex-col place-items-center my-24 text-white text-2xl"
    >
      <div className=" bg-gradient-to-b from-orange-600 from-30% via-90% to-orange-400 bg-clip-text text-transparent uppercase font-extrabold text-3xl">
        Projects
      </div>
      <div className="text-lg px-2 text-stone-400 py-5 max-w-5xl">
        <Tabs value={activeTab} orientation="vertical">
          <TabsHeader className="w-32  mx-5 cursor-pointer bg-slate-200 min-w-40 px-3">
            {data.map(({ label, value }) => (
              <Tab
                key={value}
                value={value}
                onClick={() => setActiveTab(value)}
                className={
                  activeTab === value
                    ? "bg-gray-200 border-4 border-gray-300 rounded-lg my-2 p-3 text-gray-800  text-2xl font-semibold font-mono tracking-wider"
                    : "hover:bg-sky-500 rounded-lg p-3 text-white text-md tracking-wider"
                }
              >
                {label}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody>
            {data.map(({ value, desc }) => (
              <TabPanel
                key={value}
                value={value}
                className=" p-4 rounded-2xl text-gray-200 bg-orange-600 bg-opacity-80 "
              >
                {desc}
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </div>
    </div>
  );
}

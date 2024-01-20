import "./App.css";
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Main } from "./components/Main";
import { Navigation } from "./components/Navigation";
import { Projects } from "./components/Projects";

function App() {
  return (
    <div className=" bg-neutral-900">
      <Navigation />
      <Main />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;

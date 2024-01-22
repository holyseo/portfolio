import "./App.css";
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Main } from "./components/Main";
import { Navigation } from "./components/Navigation";
import { Projects } from "./components/Projects";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className=" bg-neutral-900">
        <Navigation />
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Projects />} />
        </Routes>

        <Routes>
          <Route path="/" element={<Experience />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

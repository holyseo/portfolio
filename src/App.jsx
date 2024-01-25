import { useState } from "react";
import "./App.css";
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Main } from "./components/Main";
import { Navigation } from "./components/Navigation";
import { Projects } from "./components/Projects";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  function toggleDarkMode() {
    setDarkMode((prev) => !prev);
  }

  return (
    <BrowserRouter>
      <div className={`${darkMode ? "bg-neutral-900 " : " bg-gray-600"}`}>
        <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Projects darkMode={darkMode} />} />
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

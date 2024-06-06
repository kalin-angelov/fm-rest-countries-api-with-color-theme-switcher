import "./App.css";

import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Header from "./components/Header/Header";
import Details from "./components/Details/Details";

function App() {
  const [toggleTheme, setToggleTheme] = useState(true);

  return (
    <>
      <Header toggleTheme={toggleTheme} setToggleTheme={setToggleTheme}/>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home toggleTheme={toggleTheme} />} />
        <Route path="/details/:name" element={<Details />} />
      </Routes>
    </>
  );
};

export default App;

import "./App.css";

import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import { Context } from "./context/Context";

import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Header from "./components/Header/Header";
import Details from "./components/Details/Details";

function App() {
  const [toggleTheme, setToggleTheme] = useState(true);
  const [dataBase, setDataBase] = useState([]);
  const [dark, setDark] = useState(null);

  const initialValue = {
    dataBase,
    setDataBase,
    dark,
    toggleTheme
  };

  useEffect(() => {
    if (toggleTheme === false) {
      setDark({background: "#2b3743", color: "white"})
    } else {
      setDark(null);
    };

  },[toggleTheme]);

  return (
    <>
      <Context.Provider value={initialValue}>
        <Header toggleTheme={toggleTheme} setToggleTheme={setToggleTheme}/>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home toggleTheme={toggleTheme} />} />
          <Route path="/details/:name" element={<Details />} />
        </Routes>
      </Context.Provider>
    </>
  );
};

export default App;

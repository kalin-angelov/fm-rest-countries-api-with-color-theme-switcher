import "./App.css";

import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import { Context } from "./context/Context";

import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Header from "./components/Header/Header";
import Details from "./components/Details/Details";

function App() {
  const [dataBase, setDataBase] = useState([]);
  const [dark, setDark] = useState();

  const initialValue = {
    dataBase,
    setDataBase,
    dark,
    setDark
  };

  useEffect(() => {
    setDark(
      localStorage.getItem("dark") ? 
      JSON.parse(localStorage.getItem("dark"))
      :
      null
    );
  },[]);

  return (
    <>
      <Context.Provider value={initialValue}>
        <Header />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/details/:name" element={<Details />} />
        </Routes>
      </Context.Provider>
    </>
  );
};

export default App;

import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Featured from "./components/Featured"
import Converter from "./components/Converter.jsx"
import News from "./components/News";

function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Featured/>
    <Converter/>
    <News/>

    </>
  );
}

export default App;

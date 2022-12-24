import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Featured from "./components/Featured"
import Converter from "./components/Converter.jsx"
import NewsList from "./components/NewsList";
import Footer from "./components/Footer";
import News from "./components/News";


function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Featured/>
      <Converter/>
      <NewsList/>
      <Footer/>
    </>
  );
}

export default App;

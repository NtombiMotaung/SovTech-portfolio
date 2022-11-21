import React from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Life from "./components/Life";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Sovtech from "./components/Sovtech";


export default function App() {
  return (
    <main className="text-black bg-white body-font">
      <Navbar />
      <About />
      <Life/>
      <Skills/>
      <Sovtech/>
      <Projects/>
      
   
    </main>
  );
}

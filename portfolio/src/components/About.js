import React from "react";

export default function About() {
  return (
    <section id="about">
        
        
      <div className="container mx-auto flex px-10 py-0 md:flex-row flex-col items-center">
          
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
            Hi, I'm Ntombi
           
          </h1>
          
          <p className="mb-8 leading-relaxed">
            I am a software developer in the making. I enjoy solving real world problems through technology.
          
          </p>
          <div className="flex justify-center">
            <a
              href="https://www.linkedin.com/in/ntombifuthi-motaung-95a74a207/"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Contact me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="h-50 w-96"
            alt="hero"
            src="./feature.jpeg"
          />
        </div>
      </div>
    </section>
  );
}

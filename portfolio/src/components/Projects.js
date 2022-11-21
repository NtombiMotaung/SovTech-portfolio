import React from "react";

export default function Projects() {
  return (
    <section id="projects" className="text-black bg-white body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-black">
            Projects
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Just a look into some of the projects I have built. One is a website and the other is a link to my github which contains the rest of these projects
          </p>
        </div>  
        </div>

 <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
    {/* <!--Card 1--> */}
    <div class="rounded overflow-hidden shadow-lg">
      <img class="w-96 h-60" src="./website.png" alt="Mountain"/>
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Driving school website</div>
        <p class="text-gray-700 text-base">
          This is a website that I have developed for a driving school which is based in Rietvlei , Alberton.
        </p>
      </div>
      <a href="http://drivingmasters.co.za/"
       class="block text-black group-hover:text-slate-800 transition duration-200" 
       target="_blank">View Website →</a>
    </div>
        {/* <!--Card 3--> */}
        <div class="rounded overflow-hidden shadow-lg">
      <img class="w-96 h-60" src="./aboutmeweb.png" alt="Mountain"/>
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Personal Website</div>
        <p class="text-gray-700 text-base">
          This is a personal website about myself and about what I do
        </p>
      </div>
    
    </div>
 
    {/* card2 */}
    
    <div class="content-center rounded overflow-hidden  shadow-lg">
      <img class="w-96 h-60" src="./git.png" alt="River"/>
      <div class="px-8 py-4">
        <div class="font-bold text-xl mb-2 ">Github profile</div>
        <p class="text-gray-700 text-base">
          This is a link to my github profile account, which contains some of the projects that I have been working on
        </p>
      </div>
      <a href="https://github.com/NtombiMotaung" class="block text-black group-hover:text-slate-800 transition duration-200" target="_blank">View Profile →</a>
    </div>
    </div>



        </section>
        );
}
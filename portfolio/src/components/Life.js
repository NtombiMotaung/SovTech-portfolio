import React from "react";

export default function Life() {
  return (
    <section id="lifestyle" className="text-black bg-white body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-black">
            So, What does Ntombi do?
          </h1>
        </div>  
        </div>

 <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
    {/* <!--Card 1--> */}
    <div class="rounded overflow-hidden shadow-lg">
      <img class="w-96" src="./me.jpg" alt="Mountain"/>
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Software Developer</div>
        <p class="text-gray-700 text-base">
        Give me a computer and let me do what I do best. I am currently a 2nd year software development student at WeThinkCode_ . I am fascinated by writing code to solve real world problems and learning new programming languages. 
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#hack</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#innovation</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#developforthefuture</span>
      </div>
    </div>
        {/* <!--Card 1--> */}
        <div class="rounded overflow-hidden shadow-lg">
      <img class="w-96 h-96" src="./mentor.jpeg" alt="Mountain"/>
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Tech Mentor</div>
        <p class="text-gray-700 text-base">
          As a tech mentor, I have to mentor the first year students and guide them in their coding journey.
          Host workshops and retros for my mentees, host
 Host one-on-ones for each mentee weekly and 
 Host code pairing sessions weekly
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#leadership</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#empower</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#learn</span>
      </div>
    </div>
    {/* card2 */}
    <div class="rounded overflow-hidden shadow-lg">
      <img class="w-96" src="./outing.jpeg" alt="River"/>
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Pageant Model</div>
        <p class="text-gray-700 text-base">
            I am a model who is into pageantry. Whenever I walk that stage, I 
            feel confident enough to face massive crowds. I started modelling during the covid 19 lockdown
            I am a multi- title holder for 3 pageants
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#model</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#lifestyle</span>
      </div>
    </div>
    </div>



        </section>
        );
}
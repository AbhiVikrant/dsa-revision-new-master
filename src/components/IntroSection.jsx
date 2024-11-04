import React from "react";
import Hero from "./Hero";
const IntroSection = () => {
  return (
    <>
      <div className="mainDiv flex flex-col justify-between sm:mx-8">
        <div className="introStart gap-2 flex flex-col ">
          <h1 className="font-lato font-bold text-4xl  justify-between leading-tight">
            Best way to revise for your next coding interview
          </h1>
          <p className="font-playfair text-gray-500 text-xl font-light leading-tight justify-between gap-2 flex flex-col">
            Get everything in a single guide: Data structures, algorithms,
            patterns, visualizers, questions, examples, solutions, explanations,
            and much more!
          </p>
        </div>

        <div className="  gumroad flex justify-center items-center text-center bg-slate-950 text-white border-solid border-8 border-black rounded-md font-lato px-2 py-3 mt-8 hover:bg-purple-btn hover:border-purple-btn hover:ease-out hover:transition-transform hover:-translate-x-1 hover:-translate-y-1 hover:shadow-lg hover:shadow-black hover:text-black active:bg-red-btn active:border-red-btn ">
          <button>Buy FREE through Gumroad</button>
        </div>
        <div className=" hero gap-2 flex flex-col mt-10 ">
          <Hero />
        </div>
        <div className="book-cover-holder gap-2 flex flex-col mt-10 relative">
          <img src="./assets/images/dsa-main.png" alt="dsa-main-cover" />
          <div className="book-badges absolute  h-[100px] w-[100px]   pt-[25px]  right-0 -top-8 bg-green-light rounded-[50%] text-xl leading-6 text-center font-Quicksand font-bold text-white">
            New
            <br />
            Release
          </div>
        </div>
      </div>
    </>
  );
};

export default IntroSection;

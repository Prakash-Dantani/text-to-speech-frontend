import { FaPlay } from "react-icons/fa6";
import Woman from "../assets/images/woman.jpeg";

import Men from "../assets/images/men-white-suit2.jpeg";

const Hero = () => {
  //   const isdark = localStorage.getItem("isdark");
  //   const bgImage = isdark
  //     ? "assets/images/diomand-blue-wp.jpg"
  //     : "assets/images/diomand-aqua-wp.jpg";
  return (
    <div className="max-w-none mt-[2rem] pt-4 pl-16 pr-16 pb-4 flex gap-20">
      <div className="w-[100%] lg:w-[40%] pt-4">
        <h3 className="font-bold">Text to Speech Voice Generator</h3>
        <h2 className="text-5xl font-serif">
          Realistic AI <span className="text-orange-500">Voices</span> <br />
          Generated in <br />
          Seconds
        </h2>
        <p className="pt-6 pb-6">
          Create natural sounding voice overs for your videos, podcasts, and
          more. Choose from over 50 different voices and languages to find the
          perfect one for you.
        </p>
        <button className="btn btn-md lg:btn-lg rounded-md bg-orange-500 hover:bg-orange-600 text-white">
          Dashboard
        </button>
      </div>

      <div className="hero w-[100%] lg:w-[60%] pt-4 flex gap-10 ml-20">
        <div
          className="h-[50vh] w-1/4 rounded-4xl bg-cover shadow-xl shadow-orange-500/50 hover:shadow-orange-600/60 relative"
          style={{ backgroundImage: `url(${Woman})` }}
        >
          <div className="absolute bottom-0 left-0 w-full h-[15%] opacity-60 bg-orange-50 text-black flex items-center px-10 rounded-b-2xl">
            <div className="">
              <p className="text-xl font-extrabold tracking-wide drop-shadow-md">Luica</p>
              <p className="text-sm text-[14px] pt-1">English Voice</p>
            </div>
            <div className="ml-auto">
              <FaPlay className="text-2xl" />
            </div>
          </div>
        </div>


        <div
          className="h-[50vh] w-1/4 rounded-4xl bg-cover shadow-xl shadow-orange-500/50 hover:shadow-orange-600/60 relative"
          style={{ backgroundImage: `url(${Men})` }}
        >
          <div className="absolute bottom-0 left-0 w-full h-[15%] opacity-60 bg-orange-50 text-black flex items-center px-10 rounded-b-2xl">
            <div className="">
            <p className="text-xl font-extrabold tracking-wide drop-shadow-md">Robert</p>
            <p className="text-sm text-[14px] pt-1">English Voice</p>
            </div>
            <div className="ml-auto">
              <FaPlay className="text-2xl" />
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Hero;

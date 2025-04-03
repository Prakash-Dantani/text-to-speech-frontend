import { FaPause, FaPlay } from "react-icons/fa6";
import blackSandImage from "../assets/images/black_sand.jpeg";
import diomandAqua from "../assets/images/diomand-aqua-wp.jpg";

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
          Realistic AI <span className="text-orange-500">Voices</span> Generated
          in <br />
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
          className="h-[70vh] w-1/2 rounded-4xl bg-cover bg-center shadow-xl shadow-orange-500/50 hover:shadow-orange-600/60 relative"
          style={{ backgroundImage: `url(${blackSandImage})` }}
        >
          <div className="absolute bottom-0 left-0 w-full h-[20%] bg-amber-50 bg-opacity-1 flex items-center px-6 rounded-b-2xl">
            <div>
              <p className="text-white text-xl font-bold">Glinda</p>
              <p className="text-white text-sm opacity-80">English Voice</p>
            </div>
            <div className="ml-auto">
              <FaPlay className="text-white text-2xl" />
            </div>
          </div>
        </div>
        <div
          className="h-[70vh] w-1/2 rounded-4xl bg-cover bg-center shadow-2xl shadow-orange-500/50 hover:shadow-orange-600/60"
          style={{ backgroundImage: `url(${diomandAqua})` }}
        ></div>
      </div>
    </div>
  );
};

export default Hero;

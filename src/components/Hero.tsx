import HeroCharacter from "./HeroCharacter";

const Hero = () => {
  //   const isdark = localStorage.getItem("isdark");
  //   const bgImage = isdark
  //     ? "assets/images/diomand-blue-wp.jpg"
  //     : "assets/images/diomand-aqua-wp.jpg";
  return (
    <div className="w-full max-w-full lg:mt-[2rem] lg:flex gap-20">
      <div className="w-full max-w-full lg:w-[40%] pt-4">
        <h3 className="font-bold text-nowrap">
          Text to Speech Voice Generator
        </h3>
        <h2 className="text-3xl lg:text-5xl font-serif text-nowrap">
          Realistic AI <span className="text-orange-500">Voices</span> <br />
          Generated in <br />
          Seconds
        </h2>
        <p className="pt-6 pb-6 leading-relaxed text-base text-justify">
          Create natural sounding voice overs for your videos, podcasts, and
          more. Choose from over 50 different voices and languages to find the
          perfect one for you.
        </p>
        <button className="btn btn-md lg:btn-lg rounded-md bg-orange-500 hover:bg-orange-600 text-white">
          Dashboard
        </button>
      </div>
      <HeroCharacter />
    </div>
  );
};

export default Hero;

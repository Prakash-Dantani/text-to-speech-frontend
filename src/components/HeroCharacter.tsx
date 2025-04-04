import { FaPlay } from "react-icons/fa6";
import Woman from "../assets/images/woman.jpeg";
import Men from "../assets/images/men-white-suit2.jpeg";

const HeroCharacter = () => {
  const heroCharacter = [
    { name: "Luica", image: Woman },
    { name: "Robert", image: Men },
  ];
  return (
    <div className="w-full lg:w-[60%] pt-4 flex lg:flex gap-3 lg:gap-10 lg:ml-20  justify-center items-center">
      {heroCharacter.map((hero, index) => (
        <div
          className="h-[30vh] lg:h-[60vh] w-[100%] lg:w-1/3 rounded-2xl lg:rounded-4xl bg-cover shadow-xl shadow-orange-500/50 hover:shadow-orange-600/60 relative"
          style={{ backgroundImage: `url(${hero.image})` }}
          key={index}
        >
          <div className="absolute bottom-0 left-0 w-full h-[18%] lg:h-[15%] opacity-60 bg-orange-50 text-black flex items-center px-2 lg:px-10 rounded-b-2xl">
            <div className="">
              <p className="text-sm lg:text-xl font-extrabold tracking-wide drop-shadow-md">
                {hero.name}
              </p>
              <p className="text-[10px] lg:text-sm lg:text-[14px] lg:pt-1 text-nowrap">
                English Voice
              </p>
            </div>
            <div className="ml-auto">
              <FaPlay className="text-sm lg:text-2xl" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroCharacter;

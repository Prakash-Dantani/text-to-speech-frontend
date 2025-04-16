import SimpleImageSlider from "react-simple-image-slider";

import blackSand from "../assets/images/black_sand.jpeg";
import diomandAqua from "../assets/images/diomand-aqua-wp.jpg";
import diomandBlack from "../assets/images/diomand-black-wp.jpg";
import diomandBlue from "../assets/images/diomand-blue-wp.jpg";

const Slider = () => {
  const images = [
    { url: blackSand },
    { url: diomandAqua },
    { url: diomandBlack },
    { url: diomandBlue },
    { url: diomandAqua },
  ];

  return (
    <div className="pt-[5vh] md:pt-[2vh] w-[100%] h-[35vh]">
      <p className="text-xl md:text-3xl text-center font-bold pt-[10vh] capitalize">
        Trusted By the world’s most{" "}
        <span className="text-orange-500"> innovative teams </span>
      </p>
      <div className="justify-center w-full pt-10 bg-cover">
        <SimpleImageSlider
          width={"85vw"}
          height={"30vh"}
          images={images}
          showBullets={true}
          showNavs={true}
          useGPURender={true}
          loop={true}
          autoPlay={true}
          slideDuration={0.7}
          autoPlayDelay={2.5}
        />
      </div>
    </div>
  );
};

export default Slider;

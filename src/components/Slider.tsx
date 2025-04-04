import SimpleImageSlider from "react-simple-image-slider";

const Slider = () => {
  const images = [
    { url: "/assets/images/black_sand.jpeg" },
    { url: "/assets/images/diomand-aqua-wp.jpg" },
    { url: "/assets/images/diomand-black-wp.jpg" },
    { url: "/assets/images/diomand-blue-wp.jpg" },
  ];

  return (
    <div className="pt-12 md:pt-8 text-lg text-center font-bold">
      <p>Trusted by the world’s most innovative teams</p>
      <div>
        <SimpleImageSlider
          width={896}
          height={504}
          images={images}
          showBullets={true}
          showNavs={true}
        />
      </div>
    </div>
  );
};

export default Slider;

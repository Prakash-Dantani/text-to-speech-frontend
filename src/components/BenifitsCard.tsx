import MicroPhone from "../assets/images/microphone-image.png";
import Time from "../assets/images/time.png";
import Money from "../assets/images/money-img.png";
const BenifitsCard = () => {
  const BenifitsDetails = [
    {
      image: MicroPhone,
      title: "Natural Sounding Voices",
      description:
        "The most natural sounding AI voices to generate amazing content for your business, YouTube channel, podcast.",
    },
    {
      image: Money,
      title: "Save Money",
      description:
        "Instead of paying a voice actor for every project, you can generate realistic voices for a fraction of the cost.",
    },
    {
      image: Time,
      title: "Save Time",
      description:
        "Do not waste time waiting for voice actors to record your script. Generate your voiceover in seconds.",
    },
  ];
  return (
    <div className="w-full flex gap-1.5 pt-8">
      {BenifitsDetails.map(({ image, title, description }, index) => (
        <div className="w-1/3" key={index}>
          <div className="flex justify-center">
            <img
              src={image}
              alt={title}
              className="h-[60%] w-[40%] object-contain"
            />
          </div>
          <h3 className="text-xl font-bold pt-5">{title}</h3>
          <p className="text-[16px] text-center pt-4">{description}</p>
        </div>
      ))}
    </div>
  );
};

export default BenifitsCard;

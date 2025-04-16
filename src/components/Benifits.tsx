import BenifitsCard from "./BenifitsCard";

const Benifits = () => {
  return (
    <div className="pt-25 md:pt-20 text-lg text-center w-[100%]">
      <p className="text-xl md:text-3xl text-center font-bold pt-[12vh] capitalize">
        Speakify
        <span className="text-orange-500"> Benifits</span>
      </p>
      <p className="text-[16px] text-center pt-4">
        The most natural sounding AI voices to generate amazing content for your
        business, YouTube channel, podcast, and more
      </p>
      <BenifitsCard />
    </div>
  );
};

export default Benifits;

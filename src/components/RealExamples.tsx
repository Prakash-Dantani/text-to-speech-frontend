import RealExampleCards from "./RealExampleCards";

const RealExamples = () => {
  return (
    <div className="pt-25 md:pt-20 text-lg text-center w-[100%]">
      <p className="text-xl md:text-3xl text-center font-bold pt-[12vh] capitalize">
        Real World Examples of
        <span className="text-orange-500"> AI Voices</span>
      </p>
      <RealExampleCards />
    </div>
  );
};

export default RealExamples;

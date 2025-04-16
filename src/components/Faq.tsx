import FaqCards from "./FaqCards";

const Faq = () => {
  return (
    <>
      <div className="pt-10 md:pt-10 text-lg text-center w-[100%]">
        <p className="text-xl md:text-3xl text-center font-bold pt-[12vh] capitalize">
          Frequently asked
          <span className="text-orange-500"> questions</span>
        </p>
      </div>
      <FaqCards />
    </>
  );
};

export default Faq;

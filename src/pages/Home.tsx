import Benifits from "../components/Benifits";
import Faq from "../components/Faq";
import Hero from "../components/Hero";
import Header from "../components/layout/Header";
import RealExamples from "../components/RealExamples";
import Slider from "../components/Slider";
import VideoPresentation from "../components/VideoPresentation";
const Home = () => {
  return (
    <>
      <div className="pl-5 pr-5 pt-4 lg:pl-16 lg:pr-16 pb-4 ">
        <Header />
        {/* <div className="w-full px-5  bg-[url('assets/images/diomand-blue-wp.jpg')] h-[50vh] bg-cover bg-center"> */}
        <Hero />
        {/* </div> */}
        <Slider />
        <VideoPresentation />
        <Benifits />
        <RealExamples />
        <Faq />
      </div>
    </>
  );
};

export default Home;

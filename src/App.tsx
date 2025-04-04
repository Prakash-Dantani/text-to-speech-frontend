import Hero from "./components/Hero";
import Header from "./components/layout/Header";
import Slider from "./components/Slider";

const App = () => {
  return (
    <div id="App">
      <Header />
      <div className="pl-5 pr-5 pt-4 lg:pl-16 lg:pr-16 pb-4 ">
        {/* <div className="w-full px-5  bg-[url('assets/images/diomand-blue-wp.jpg')] h-[50vh] bg-cover bg-center"> */}
        <Hero />
        {/* </div> */}
        <Slider />
      </div>
    </div>
  );
};

export default App;

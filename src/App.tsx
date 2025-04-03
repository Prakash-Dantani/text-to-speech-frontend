import Hero from "./components/Hero";
import Header from "./components/layout/Header";

const App = () => {
  return (
    <div id="App">
      <Header />
      {/* <div className="w-full px-5  bg-[url('assets/images/diomand-blue-wp.jpg')] h-[50vh] bg-cover bg-center"> */}
      <Hero />
      {/* </div> */}
    </div>
  );
};

export default App;

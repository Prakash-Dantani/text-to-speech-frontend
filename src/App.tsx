import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashobard";
import Home from "./pages/Home";
import Voices from "./pages/Voices";

const App = () => {
  return (
    <div id="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/voices" element={<Voices />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

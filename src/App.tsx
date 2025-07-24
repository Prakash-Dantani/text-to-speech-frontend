import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashobard";
import Home from "./pages/Home";
import Voices from "./pages/Voices";
import GenerateVoice from "./components/GenerateVoice";
import SavedVoices from "./pages/SavedVoices";

const App = () => {
  return (
    <div id="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/voices" element={<Voices />} />
          <Route path="/generate-voice" element={<GenerateVoice />} />
          <Route path="/saved-voices" element={<SavedVoices />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

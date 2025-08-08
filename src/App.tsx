import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashobard";
import Home from "./pages/Home";
import Voices from "./pages/Voices";
import GenerateVoice from "./components/GenerateVoice";
import SavedVoices from "./pages/SavedVoices";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <div id="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/voices"
            element={
              <ProtectedRoute>
                <Voices />
              </ProtectedRoute>
            }
          />
          <Route
            path="/generate-voice"
            element={
              <ProtectedRoute>
                <GenerateVoice />
              </ProtectedRoute>
            }
          />
          <Route
            path="/saved-voices"
            element={
              <ProtectedRoute>
                <SavedVoices />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

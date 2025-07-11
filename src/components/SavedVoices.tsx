import PageBody from "./layout/PageBody";
import { useState } from "react";
import axios from "axios";
// import { FaDownload } from "react-icons/fa6";

const SavedVoices = () => {
  const [data, setData] = useState(null); // State to store API data
  const [error, setError] = useState<string | null>(null); // State to handle errors
  const [loading, setLoading] = useState(true); // State to manage loading
  const [isVisible, setisVisible] = useState(false); // State to manage loading

  // Fetch voices using useEffect
  const getSavedVoice = async () => {
    try {
      setisVisible(true);

      const response = await axios.get(
        "http://localhost:3000/api/text-to-speech/saved-voices"
      );
      setData(response.data?.data);
      setisVisible(false);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message); // Access the error message safely
      } else {
        setError("An unknown error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <PageBody pageTitle="Saved Voice">
        <h2>Saved Voice</h2>
      </PageBody>
    </>
  );
};

export default SavedVoices;

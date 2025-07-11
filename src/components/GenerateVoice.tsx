import { useSelector } from "react-redux";
import PageBody from "./layout/PageBody";
import { RootState } from "../app/store";
import Avatar from "./Avatar";
import CountryFlag from "./CountryFlag";
import { useEffect, useState } from "react";
import axios from "axios";
import { FaDownload } from "react-icons/fa6";

const GenerateVoice = () => {
  // Check user had selected voice or not
  const voice = useSelector((state: RootState) => state.voice.selectedVoice);
  if (!voice)
    return (
      <>
        <PageBody pageTitle="Generate Voice">
          <div>No voice selected.</div>
        </PageBody>
      </>
    );

  // Count Character Entered by the user
  const [userText, setuserText] = useState("");
  const countCharacter = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setuserText(e.currentTarget.value);
  };

  // Convert text to voice

  const [data, setData] = useState(null); // State to store API data
  const [error, setError] = useState<string | null>(null); // State to handle errors
  const [loading, setLoading] = useState(true); // State to manage loading
  const [isVisible, setisVisible] = useState(false); // State to manage loading

  // Fetch data using useEffect
  const getVoice = async () => {
    try {
      setisVisible(true);

      const response = await axios.post(
        "http://localhost:3000/api/text-to-speech",
        {
          language_code: voice.language_code,
          voice_name: voice.voice_name,
          text_to_convert: userText,
        }
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

  const saveVoice = async () => {
    try {
      // console.log(data);

      const isSaved = await axios.post(
        "http://localhost:3000/api/text-to-speech/save-voice",
        {
          language_code: voice.language_code,
          voice_name: voice.voice_name,
          text_to_convert: userText,
          voice: data,
        }
      );
      console.log(isSaved);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.error("Axios error response:", err.response?.data?.message);

        const serverMessage =
          err.response?.data?.message || "Server error occurred.";
        // setError(serverMessage);
        setError(
          "Your voice is not saved. Something wrong with your input, please try again."
        );
      } else if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred.");
      }
    }
  };

  return (
    <>
      <PageBody pageTitle="Generate Voice">
        <div className="flex flex-col items-center justify-center w-full">
          <div className="w-[25%] h-[25%]">
            <Avatar gender={voice.gender ?? "Male"} className="rounded-full" />
          </div>
          <>
            <h2 className="card-title font-bold text-2xl">
              {voice.voice_name}
            </h2>
            <CountryFlag code="IN" />
          </>

          <div className="textbox">
            <textarea
              name="voice_text"
              id="voice_text"
              cols={50}
              className="input-xl border-2 border-[#0F172A] mt-[2%] p-4"
              placeholder="Type Your Text Here..."
              onChange={countCharacter}
            ></textarea>
            <br />
            <label className="font-bold p-5 text-left">
              <span className={userText.length > 200 ? "text-red-500" : ""}>
                Character Count : {userText.length}
              </span>
            </label>
            <br />
            <div className="flex items-center justify-center pt-5">
              {/* {!data && ( */}
              <button
                type="button"
                className="btn btn-outline bg-[#0F172A] text-white w-[30%]"
                onClick={getVoice}
              >
                Generate
              </button>
              {/* )} */}
            </div>
          </div>

          <div className="card pt-5">
            {loading && <p className={isVisible ? "" : "hide"}>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {data && (
              <div className="grid grid-cols-2">
                <>
                  <audio controls>
                    <source src={data} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                </>
                <>
                  <button
                    type="button"
                    className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-2 rounded border border-green-900 w-[50%] h-10 pl-5 flex items-center gap-2"
                    onClick={saveVoice}
                  >
                    <FaDownload />
                    <span>Save Voice</span>
                  </button>
                </>
              </div>
            )}

            {/* {data && <pre>{JSON.stringify(data, null, 2)}</pre>} */}
          </div>
        </div>
      </PageBody>
    </>
  );
};

export default GenerateVoice;

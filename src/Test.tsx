// import React from "react";
// import Test2 from "./Test2";

// const Test = () => {
//   return (
//     <div>
//       <h3>
//         Hello, <Test2 />
//         <br />
//         Hello, <Test2 name="Mohit" />
//         <br />
//         Hello, <Test2 name="Prakash" />
//         <br />
//         Hello, <Test2 name="Hitesh" />
//       </h3>
//     </div>
//   );
// };

// export default Test;

import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState(null); // State to store API data
  const [error, setError] = useState<string | null>(null); // State to handle errors
  const [loading, setLoading] = useState(true); // State to manage loading

  // Fetch data using useEffect
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "http://localhost:3000/api/text-to-speech",
          {
            language_code: "en-in",
            voice_name: "Jai",
            text_to_convert:
              "Apple, Mango, Banana, Prakash, Grapes, Tomato, Pineapple",
          }
        );
        setData(response.data?.data);
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

    fetchData();
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div className="card">
      <h2>Text To Speech</h2>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && (
        <div>
          <h3>Play Audio:</h3>
          <audio controls>
            <source src={data} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      )}

      {/* {data && <pre>{JSON.stringify(data, null, 2)}</pre>} */}
    </div>
  );
}

export default App;

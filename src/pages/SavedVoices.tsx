import { useEffect, useState } from "react";
import axios from "axios";
import PageBody from "../components/layout/PageBody";
import { Voices } from "../entities/Voices";
import DataTable from "../components/elements/DataTable";
import { Column } from "react-table";
import { FaDownload } from "react-icons/fa6";
// import { FaDownload } from "react-icons/fa6";

const SavedVoices = () => {
  const [data, setData] = useState<Voices[]>([]); // State to store API data
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
      setData(response.data?.voices);
      console.log(data);
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
  useEffect(() => {
    getSavedVoice();
  }, []);

  const columns: Column<Voices>[] = [
    { Header: "Language", accessor: "language_code" },
    { Header: "Voice Name", accessor: "voice_name" },
    { Header: "Text", accessor: "text_to_convert" },
    {
      Header: "Play",
      Cell: ({ row }: any) => (
        <audio controls>
          <source src={row.original.url} type="audio/mpeg" />
        </audio>
      ),
    },
    {
      Header: "Download",
      Cell: ({ row }: any) => (
        <a
          href={row.original.url}
          download
          target="_blank"
          className="btn btn-sm bg-[#0F172A] text-white"
        >
          <FaDownload /> Download
        </a>
      ),
    },
  ];

  return (
    <>
      <PageBody pageTitle="Saved Voice">
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        {isVisible}
        {data.length === 0 && <p>No voice stored.</p>}

        <DataTable columns={columns} data={data} />
      </PageBody>
    </>
  );
};

export default SavedVoices;

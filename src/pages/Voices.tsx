import { useEffect, useState } from "react";
import PageBody from "../components/layout/PageBody";
import ApiClient from "../services/ApiClient";
import { Voices as VoiceProps } from "../entities/Voices";
import VoiceCard from "../components/VoiceCard";
import LazyLoad from "react-lazy-load";
import InfiniteScroll from "react-infinite-scroll-component";

const Voices = () => {
  const [voiceList, setVoiceList] = useState<VoiceProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchVoices = async () => {
    // alert("PRakash");
    const voicesData = await ApiClient.get(`/voices?page=${page}&limit=1`).then(
      (response) => response.data
    );
    // setVoiceList(voicesData.voices);
    setVoiceList((prevVoices) => [...prevVoices, ...voicesData.voices]); // append new

    setTotalPages(voicesData.totalPages);

    setLoading(false);
    console.log("totalPages : " + totalPages);
    console.log("voicesData.totalPages : " + voicesData.totalPages);
  };

  useEffect(() => {
    fetchVoices();
  }, [page]);
  return (
    <>
      <PageBody pageTitle="Voices">
        <InfiniteScroll
          dataLength={5} //This is important field to render the next data
          next={fetchVoices}
          hasMore={true}
          loader={<h4>Loading Data...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {loading && <p>Loading...</p>}
          <div className="grid grid-cols-3 gap-4">
            {voiceList.map((voice, index) => (
              <LazyLoad>
                <VoiceCard voice={voice} key={index} />
              </LazyLoad>
            ))}
          </div>
        </InfiniteScroll>
        <div className="mt-4 flex space-x-2">
          <button
            disabled={page <= 1}
            onClick={() => {
              setPage((p) => p - 1);
              fetchVoices();
            }}
            className="px-3 py-1 bg-blue-500 text-white rounded disabled:opacity-50"
          >
            Previous
          </button>
          <span className="self-center">
            Page {page} of {totalPages}
          </span>
          <button
            disabled={page >= totalPages}
            onClick={() => setPage((p) => p + 1)}
            className="px-3 py-1 bg-blue-500 text-white rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </PageBody>
    </>
  );
};

export default Voices;

import { useEffect } from "react";
import { useSelector } from "react-redux";
import PageBody from "../components/layout/PageBody";
import VoiceCard from "../components/VoiceCard";
import LazyLoad from "react-lazy-load";
import InfiniteScroll from "react-infinite-scroll-component";
import { RootState } from "../app/store";
import { fetchVoices, setPage } from "../app/voiceSlice";
import { useAppDispatch } from "../app/hooks";

const Voices = () => {
  const dispatch = useAppDispatch();
  const { voiceList, loading, page, totalPages } = useSelector(
    (state: RootState) => state.voice
  );

  useEffect(() => {
    dispatch(fetchVoices(page));
  }, [dispatch, page]);

  return (
    <PageBody pageTitle="Voices">
      <InfiniteScroll
        dataLength={voiceList.length}
        next={() => dispatch(setPage(page + 1))}
        hasMore={page < totalPages}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen all voices.</b>
          </p>
        }
      >
        {loading && <p>Loading...</p>}
        <div className="grid grid-cols-3 gap-4">
          {voiceList.map((voice, index) => (
            <LazyLoad key={index}>
              <VoiceCard voice={voice} />
            </LazyLoad>
          ))}
        </div>
      </InfiniteScroll>

      <div className="mt-4 flex space-x-2">
        <button
          disabled={page <= 1}
          onClick={() => dispatch(setPage(page - 1))}
          className="px-3 py-1 bg-blue-500 text-white rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span className="self-center">
          Page {page} of {totalPages}
        </span>
        <button
          disabled={page >= totalPages}
          onClick={() => dispatch(setPage(page + 1))}
          className="px-3 py-1 bg-blue-500 text-white rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </PageBody>
  );
};

export default Voices;

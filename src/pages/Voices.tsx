import { useEffect, useState } from "react";
import PageBody from "../components/layout/PageBody";
import apiClient from "../services/ApiClient";
import { Voices as VoiceProps } from "../entities/Voices";
import VoiceCard from "../components/VoiceCard";

const Voices = () => {
  const [voiceList, setVoiceList] = useState<VoiceProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchVoices = async () => {
      const voicesData = await apiClient
        .get("/voices")
        .then((response) => response.data);
      setVoiceList(voicesData.voices);

      setLoading(false);
    };
    fetchVoices();
  }, []);
  return (
    <>
      <PageBody pageTitle="Voices">
        {loading && <p>Loading...</p>}
        <div className="grid grid-cols-3 gap-4">
          {voiceList.map((voice, index) => (
            <VoiceCard voice={voice} key={index} />
          ))}
        </div>
      </PageBody>
    </>
  );
};

export default Voices;

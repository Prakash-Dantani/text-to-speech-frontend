import { useSelector } from "react-redux";
import PageBody from "./layout/PageBody";
import { RootState } from "../app/store";
import VoiceDescription from "./VoiceDescription";
// import VoiceDescription from "./VoiceDescription";

const GenerateVoice = () => {
  const voice = useSelector((state: RootState) => state.voice.selectedVoice);
  if (!voice)
    return (
      <>
        <PageBody pageTitle="Generate Voice">
          <div>No voice selected.</div>
        </PageBody>
      </>
    );
  return (
    <>
      <PageBody pageTitle="Generate Voice">
        <VoiceDescription voice={voice} />
      </PageBody>
    </>
  );
};

export default GenerateVoice;

import AudioPlayerComp from "./AudioPlayerComp";
import VoiceDescription from "./VoiceDescription";
import { Voices as VoiceProps } from "../entities/Voices";

interface ChildProps {
  voice: VoiceProps;
}
const VoiceCard = ({ voice }: ChildProps) => {
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <VoiceDescription voice={voice} />
      <div className="card-footer items-center">
        <AudioPlayerComp />
      </div>
    </div>
  );
};

export default VoiceCard;

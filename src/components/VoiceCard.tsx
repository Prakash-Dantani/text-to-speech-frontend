import { Voices as VoiceProps } from "../entities/Voices";
import Avatar from "./Avatar";
interface ChildProps {
  voice: VoiceProps;
}
const VoiceCard = ({ voice }: ChildProps) => {
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure className="px-10 pt-10">
        <Avatar gender={voice.gender ?? "Male"} />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{voice.voice_name}</h2>
        <p>
          {voice.gender}A card component has a figure, a body part, and inside
          body there are title and actions parts
        </p>
        <div className="card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default VoiceCard;

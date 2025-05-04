import { Voices as VoiceProps } from "../entities/Voices";
import Avatar from "./Avatar";
import CountryFlag from "./CountryFlag";
interface ChildProps {
  voice: VoiceProps;
}
const country_code = [
  "IN",
  "US",
  "DK",
  "AF",
  "AL",
  "DZ",
  "AS",
  "AI",
  "AU",
  "BZ",
];
const VoiceCard = ({ voice }: ChildProps) => {
  const rndm = Math.floor(Math.random() * 10);
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure className="px-10 pt-10">
        <Avatar gender={voice.gender ?? "Male"} />
      </figure>
      <div className="card-body items-center text-center">
        <div className="flex items-center space-x-3">
          <h2 className="card-title font-bold text-2xl">{voice.voice_name}</h2>
          <CountryFlag code={country_code[rndm]} />
        </div>
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

import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import CountryFlag from "./CountryFlag";
import { Voices as VoiceProps } from "../entities/Voices";

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

interface VoiceDescriptionProps {
  voice: VoiceProps;
}

const VoiceDescription = ({ voice }: VoiceDescriptionProps) => {
  const rndm = Math.floor(Math.random() * 10);

  return (
    <>
      <Link to="/generate-voice">
        <figure className="px-10 pt-10">
          <Avatar gender={voice.gender ?? "Male"} />
        </figure>
      </Link>
      <div className="card-body items-center text-center">
        <div className="flex items-center space-x-3">
          <Link to="/generate-voice">
            <h2 className="card-title font-bold text-2xl">
              {voice.voice_name}
            </h2>
          </Link>
          <CountryFlag code={country_code[rndm]} />
        </div>
      </div>
    </>
  );
};

export default VoiceDescription;

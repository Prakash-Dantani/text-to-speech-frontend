import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const AudioPlayerComp = () => (
  <AudioPlayer
    src="https://echo-voice-ai.vercel.app/glindaamericanvoice.mp3"
    onPlay={() => console.log("playing")}
  />
);

export default AudioPlayerComp;

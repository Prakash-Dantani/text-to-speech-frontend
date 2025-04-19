import howToAdd from "../assets/images/how-to-add.gif";

const VideoPresentation = () => {
  return (
    <div className="pt-25 md:pt-20 text-lg text-center w-[100%]">
      <p className="text-xl md:text-3xl text-center font-bold pt-[12vh] capitalize">
        Match Up Your Video with
        <span className="text-orange-500"> Our AI Voices</span>
      </p>
      <p className="text-[16px] text-center pt-4">
        Add your generated AI voices to your clips. Simply drag and drop your
        audio and video files to see your final project.
      </p>
      <div className="flex items-center justify-center w-full pt-10 bg-cover">
        <img
          src={howToAdd}
          alt="How to Add"
          className="w-[50%] h-auto md:h-[50vh]"
        />
      </div>
    </div>
  );
};

export default VideoPresentation;

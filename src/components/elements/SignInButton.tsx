const SignInButton = () => {
  return (
    // <button className="btn btn-ghost lg:hidden bg-black text-white rounded-md">
    //   Sign In
    // </button>
    <>
      {/* <button className="btn sm:btn-md btn-xs btn-ghost bg-black text-white rounded-md mr-2 ml-2">
        Sign In
      </button> */}

      <button
        className="btn sm:btn-md btn-xs btn-ghost border-black bg-white text-black rounded-md"
        onClick={() =>
          // (window.location.href = "http://localhost:3000/auth/google")
          (window.location.href =
            "https://tts-backend-ql5t.onrender.com/auth/google")
        }
      >
        Login
      </button>
    </>
  );
};

export default SignInButton;

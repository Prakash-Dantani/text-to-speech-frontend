import Benifits from "./components/Benifits";
import Faq from "./components/Faq";
import Hero from "./components/Hero";
import Header from "./components/layout/Header";
import RealExamples from "./components/RealExamples";
import Slider from "./components/Slider";
import VideoPresentation from "./components/VideoPresentation";

import { useState, useEffect } from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";

interface usersProps {
  name: String;
  email: String;
  id: string;
}
const App = () => {
  const [user, setUser] = useState<usersProps | undefined>();
  // useEffect(() => {
  let sessionCookie = Cookies.get("connect.sid");
  if (sessionCookie) {
    setUser(sessionCookie);
  }
  console.log(sessionCookie);
  console.log(user);
  // }, []);
  return (
    <div id="App">
      <div className="pl-5 pr-5 pt-4 lg:pl-16 lg:pr-16 pb-4 ">
        <GoogleOAuthProvider clientId="748608404803-lrrnm2n05c3sao1sa3cb7i0q1g4uncks.apps.googleusercontent.com">
          <div className="App">
            {/* <button
              onClick={() =>
                (window.location.href = "http://localhost:3000/auth/google")
              }
            >
              Login with Google NEw
            </button> */}

            {!user && !sessionCookie ? (
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  // const decoded = jwtDecode(
                  //   credentialResponse.credential || ""
                  // );
                  // setUser(decoded);

                  const decoded = jwtDecode(
                    credentialResponse.credential || ""
                  ) as usersProps;
                  setUser(decoded); // ✅
                  console.log(decoded);

                  // optionally send token to backend
                }}
                onError={() => {
                  console.log("Login Failed");
                }}
              />
            ) : (
              <div>
                <h2>Welcome, {user.name}</h2>
                <p>Email: {user.email}</p>
              </div>
            )}
          </div>
        </GoogleOAuthProvider>

        <Header />
        {/* <div className="w-full px-5  bg-[url('assets/images/diomand-blue-wp.jpg')] h-[50vh] bg-cover bg-center"> */}
        <Hero />
        {/* </div> */}
        <Slider />
        <VideoPresentation />
        <Benifits />
        <RealExamples />
        <Faq />
      </div>
    </div>
  );
};

export default App;

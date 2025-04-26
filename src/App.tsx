import axios from "axios";
import Benifits from "./components/Benifits";
import Faq from "./components/Faq";
import Hero from "./components/Hero";
import Header from "./components/layout/Header";
import RealExamples from "./components/RealExamples";
import Slider from "./components/Slider";
import VideoPresentation from "./components/VideoPresentation";

import { useEffect, useState } from "react";

interface usersProps {
  name: String;
  email: String;
  id: string;
}
const App = () => {
  const [user, setUser] = useState<usersProps | undefined>(undefined);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/api/me", {
          withCredentials: true,
        });
        setUser(data.user);
      } catch (error: any) {
        if (error.response && error.response.status === 401) {
          console.log("No user logged in");
        } else {
          console.error("Error fetching user", error);
        }
      }
    };

    fetchUser();
  }, []);

  // const handleLoginSuccess = async (credentialResponse: any) => {
  //   const token = credentialResponse.credential;
  //   try {
  //     const response = await fetch("http://localhost:3000/auth/google", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       credentials: "include", // important to allow cookie to be set
  //       body: JSON.stringify({ token }),
  //     });

  //     if (response.ok) {
  //       const userData = await response.json();
  //       setUser(userData);
  //     } else {
  //       console.error("Login failed");
  //     }
  //   } catch (error) {
  //     console.error("Login error", error);
  //   }
  // };

  return (
    <div id="App">
      <div className="pl-5 pr-5 pt-4 lg:pl-16 lg:pr-16 pb-4 ">
        {!user ? (
          <button
            onClick={() =>
              (window.location.href = "http://localhost:3000/auth/google")
            }
          >
            Login with Google
          </button>
        ) : (
          <div>
            <h2>Welcome, {user.name}</h2>
            <p>Email: {user.email}</p>
          </div>
        )}
        {/* <GoogleOAuthProvider clientId="748608404803-lrrnm2n05c3sao1sa3cb7i0q1g4uncks.apps.googleusercontent.com">
          <div className="App">
            {!user ? (
              <GoogleLogin
                onSuccess={handleLoginSuccess}
                onError={() => console.log("Login Failed")}
              />
            ) : (
              <div>
                <h2>Welcome, {user.name}</h2>
                <p>Email: {user.email}</p>
              </div>
            )}
          </div>
        </GoogleOAuthProvider> */}

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

import Menu from "./Menu";
const apiUrl = import.meta.env.VITE_API_URL; // ✅ Vite

// import SignUpButton from "../elements/SignUpButton";
import SignInButton from "../elements/SignInButton";
import ThemeToggler from "../elements/ThemeToggler";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface usersProps {
  name: String;
  email: String;
  id: string;
}
const Header = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState<usersProps | undefined>(undefined);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axios.get(`${apiUrl}/api/me`, {
          // const { data } = await axios.get(
          //   "https://tts-backend-ql5t.onrender.com/api/me",
          //   {
          withCredentials: true,
        });
        setUser(data.user);
        navigate("/dashboard");
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
  return (
    <div className="navbar bg-base-100 pl-2 pr-2 ">
      <Menu />
      <div className="navbar-end lg:flex lg:gap-1">
        <ThemeToggler />

        {!user ? (
          <>
            <SignInButton />
            {/* <SignUpButton /> */}
          </>
        ) : (
          <div className="dropdown dropdown-end">
            <div>
              <h2>Welcome, {user.name}</h2>
              <p>Email: {user.email}</p>
            </div>
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                {/* <a href="http://localhost:3000/logout">Logout</a> */}
                <a href="https://tts-backend-ql5t.onrender.com/logout">
                  Logout
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;

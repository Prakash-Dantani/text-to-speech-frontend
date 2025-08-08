// src/components/DBHeader.tsx
import { useEffect, useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import axios from "axios";

import SignInButton from "../elements/SignInButton";
import ThemeToggler from "../elements/ThemeToggler";

interface UserProps {
  name: string;
  email: string;
  id: string;
}

const apiUrl = import.meta.env.VITE_API_URL as string; // ✅ from Vite .env

const DBHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [user, setUser] = useState<UserProps | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axios.get(`${apiUrl}/api/me`, {
          withCredentials: true,
        });

        if (data?.user) {
          setUser(data.user);

          // Redirect to dashboard if logged in and not already there
          if (location.pathname === "/") {
            navigate("/dashboard");
          }
        } else {
          setUser(null);
        }
      } catch (error: any) {
        setUser(null);
        if (error.response?.status === 401) {
          console.log("No user logged in");
        } else {
          console.error("Error fetching user", error);
        }
      }
    };

    fetchUser();
  }, [navigate, location.pathname]);

  return (
    <div className="flex items-center justify-between p-4 shadow absolute top-0 right-0">
      <ThemeToggler />

      {!user ? (
        <>
          <SignInButton />
        </>
      ) : (
        <div className="dropdown dropdown-end">
          <div>
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="User avatar"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content  bg-[#0F172A] rounded-box z-1 mt-3 w-60 p-2 shadow gap-2"
          >
            <h2 className="text-right">Welcome, {user.name}</h2>
            <span className="text-right">{user.email}</span>
            <li className="pt-3">
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <Link to={`${apiUrl}/logout`}>Logout</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DBHeader;

import { useEffect, useState } from "react";
import { FaFilePdf, FaVideo } from "react-icons/fa6";
import { FcDocument } from "react-icons/fc";
import LiElement from "../elements/Li";
import BoldFontDiv from "../elements/BoldFontDiv";

const Header = () => {
  const [isdark, setIsdark] = useState<boolean>(() => {
    const storedValue = localStorage.getItem("isdark");
    return storedValue !== null ? JSON.parse(storedValue) : false;
  });
  useEffect(() => {
    localStorage.setItem("isdark", JSON.stringify(isdark));
  }, [isdark]);

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <a className="btn-primary btn-ghost text-xl">Speakify</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Features</a>
          </li>
          <li>
            <div className="dropdown dropdown-hover">
              <div tabIndex={0} role="button">
                How It Works
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-1 p-2 shadow-sm flex w-96"
              >
                <li>
                  <ul className="grid grid-cols-2 gap-4">
                    <LiElement className="text-orange-500">
                      {/* <div className="font-bold"> */}
                      <BoldFontDiv className="font-bold">
                        <FaVideo className="size-6" /> Video Tutorials
                      </BoldFontDiv>
                      {/* </div> */}
                    </LiElement>

                    <LiElement className="text-orange-500">
                      {/* <div className="font-bold"> */}
                      <BoldFontDiv className="font-bold">
                        <FaFilePdf className="size-6" /> Blog
                      </BoldFontDiv>
                      {/* </div> */}
                    </LiElement>

                    <li>
                      <h3>FAQ</h3>
                    </li>
                    <li>
                      <h3>Discord</h3>
                    </li>
                    <li>
                      <h3>Twitter</h3>
                    </li>
                    <li>
                      <h3>Contact Us</h3>
                    </li>
                  </ul>
                  {/* <div className="w-[50%] flex-1 ...">02</div> */}
                  {/* <div className="hero bg-base-200">
                    <div className="hero-content flex-col lg:flex-row">
                      <img
                        src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                        className="max-w-sm rounded-lg shadow-2xl"
                      />
                      <div>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">
                          Provident cupiditate voluptatem et in. Quaerat fugiat
                          ut assumenda excepturi exercitationem quasi. In
                          deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                      </div>
                    </div>
                  </div> */}
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a>Pricing</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <input
          type="checkbox"
          value="dark"
          className="toggle theme-controller"
          checked={isdark}
          onChange={() => setIsdark(!isdark)}
        />
        <button className="btn bg-black text-white rounded-md mr-4 ml-4">
          Sign In
        </button>
        <button className="btn bg-white text-black rounded-md">Sign Up</button>

        <div className="dropdown dropdown-end">
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
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;

import LiElement from "../elements/Li";
import * as Icons from "react-icons/fa6"; // Import all Fa icons

import BoldFontDiv from "../elements/BoldFontDiv";
import Logo from "./Logo";
import SignInButton from "../elements/SignInButton";
import SignUpButton from "../elements/SignUpButton";
import ThemeToggler from "../elements/ThemeToggler";

const Menu = () => {
  const menu_list = [
    {
      title: "Video Tutorials",
      desc: "Watch how to get started.",
      icon: "FaVideo",
    },
    {
      title: "Blog",
      desc: "Read our latest articles on how to use Voice Fusion.",
      icon: "FaFilePdf",
    },
    {
      title: "FAQ",
      desc: "Check out our most commonly asked questions.",
      icon: "FaQ",
    },
    {
      title: "Discord",
      desc: "Join our Discord community to get help from other users.",
      icon: "FaDiscord",
    },
    {
      title: "Twitter",
      desc: "Follow us on Twitter to get the latest updates.",
      icon: "FaTwitter",
    },
    {
      title: "Contact Us",
      desc: "Email us at dantaniprakash08@gmail.com for any questions.",
      icon: "FaMessage",
    },
  ];
  return (
    <>
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
              <a>Features</a>
            </li>
            <li>
              How It Works
              <ul className="grid grid-cols-1 gap-4">
                {menu_list.map((menu, index) => {
                  const IconComponent = Icons[menu.icon as keyof typeof Icons]; // Dynamically get icon
                  return (
                    <LiElement className="text-orange-500" key={index}>
                      <BoldFontDiv className="font-bold flex items-center gap-3">
                        {IconComponent && <IconComponent className="size-6" />}
                        {menu.title}
                      </BoldFontDiv>
                    </LiElement>
                  );
                })}
              </ul>
            </li>
            <li>
              <a>Pricing</a>
            </li>
          </ul>
        </div>
        <Logo />
        <div className="flex flex-row gap-1">
          <div className="lg:hidden">
            <ThemeToggler />
            <SignInButton />
            <SignUpButton />
          </div>
        </div>
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
                className="dropdown-content menu bg-base-100 rounded-box z-1 p-2 shadow-sm flex w-lg"
              >
                <li>
                  <ul className="grid grid-cols-2 gap-4">
                    {menu_list.map((menu, index) => {
                      const IconComponent =
                        Icons[menu.icon as keyof typeof Icons]; // Dynamically get icon
                      return (
                        <LiElement className="text-orange-500" key={index}>
                          <div className="block ">
                            <BoldFontDiv className="font-bold flex items-center gap-3">
                              {IconComponent && (
                                <IconComponent className="size-6" />
                              )}
                              {menu.title}
                            </BoldFontDiv>
                            <span className="break-words text-orange-400">
                              {menu.desc}
                            </span>
                          </div>
                        </LiElement>
                      );
                    })}
                  </ul>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a>Pricing</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Menu;

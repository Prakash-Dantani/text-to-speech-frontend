import { Link } from "react-router-dom";
import LogoImage from "../../assets/images/speakify-logo-orange.png";
import * as Icons from "react-icons/fa6"; // Import all Fa icons

const Sidebar = () => {
  const sidebarMenus = [
    {
      icon: "FaHouseMedical",
      title: "Dashboard",
      page: "/dashboard",
    },
    {
      icon: "FaMicrophone",
      title: "Voices",
      page: "/voices",
    },
    {
      icon: "FaVolumeHigh",
      title: "Saved Voices",
      page: "/saved-voices",
    },
    {
      icon: "FaGear",
      title: "Setting",
      page: "/setting",
    },
  ];
  return (
    <div className="drawer-side bg-[#0F172A] max-w-[40vw] lg:max-w-[15vw]">
      <label
        htmlFor="my-drawer"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <div className="flex">
        <img
          src={LogoImage}
          alt=""
          className="h-[20%] w-[30%] lg:h-[15%] lg:w-[20%]"
        />
        <a className="btn-primary uppercase text-white pt-[1vh] font-bold text-[15px] lg:text-2xl lg:font-extrabold tracking-wide">
          Speakify
        </a>
      </div>
      {/* Sidebar Menus */}
      <ul className="menu w-full text-white grid-cols-1 gap-4 pt-[10vh] lg:text-xl sm:pt-4">
        {sidebarMenus.map((menu, index) => {
          const IconComponent = Icons[menu.icon as keyof typeof Icons];
          return (
            <li className="hover:bg-[#272F40] rounded-xl" key={index}>
              <Link to={menu.page}>
                {IconComponent && <IconComponent className="text-orange-500" />}
                <span className="pl-1 text-nowrap active">{menu.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;

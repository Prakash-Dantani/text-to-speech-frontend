import Logo from "../components/layout/Logo";
import LogoImage from "../assets/images/speakify-logo-orange.png";
const dashboard = () => {
  return (
    <>
      {/* <Header /> */}
      <div>
        <div className="drawer lg:drawer-open">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label
              htmlFor="my-drawer"
              className="btn btn-primary drawer-button"
            >
              Open drawer
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <div className="flex justify-center">
              <img src={LogoImage} alt="" className="h-[15%] w-[20%]" />
              <Logo />
            </div>
            <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
              {/* Sidebar content here */}
              <li>
                <a>Dashboard</a>
              </li>
              <li>
                <a>Voices</a>
              </li>
              <li>
                <a>Saved Voices</a>
              </li>
              <li>
                <a>Settings</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default dashboard;

import { ReactNode } from "react";
import { FaBars } from "react-icons/fa6";
import Sidebar from "./Sidebar";
import DBHeader from "./DBHeader";

interface PageBodyProps {
  pageTitle: string;
  children: ReactNode;
}

const PageBody = ({ pageTitle, children }: PageBodyProps) => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content flex flex-col">
        {/* Top Navbar */}
        <div className="w-full p-4 bg-base-100 flex items-center">
          {/* <div className="w-full p-4 bg-[#0F172A] text-white flex items-center"> */}
          <div className="flex grid-rows-3 gap-4">
            <label htmlFor="my-drawer" className="btn btn-ghost drawer-button">
              <FaBars />
            </label>
            {/* DYNAMIC title */}
            <h1 className="ml-4 text-xl font-bold">{pageTitle}</h1>
            <DBHeader />
          </div>
        </div>

        {/* Page content */}
        <main className="p-2">
          <div className="card border-2 bg-base-100 w-auto">
            <div className="card-body">
              <h2 className="card-title">
                {/* <h1 className="ml-6 text-xl font-bold">{pageTitle}</h1> */}
              </h2>
              <div className="card-body">{children}</div>
            </div>
          </div>
        </main>
      </div>

      {/* Sidebar */}
      <Sidebar />
    </div>
  );
};

export default PageBody;

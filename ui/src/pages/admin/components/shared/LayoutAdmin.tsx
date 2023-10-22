import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBarAdmin from "./NavBarAdmin";
import SideBarAdmin from "./SideBarAdmin";

interface LayoutProps {
  children: React.ReactNode;
}

const LayoutAdmin = ({ children }: LayoutProps) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem('user')) {
      navigate("/login")
    }
  }, []);
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-screen-xl">
        <div className="flex flex-col">
          <div>
            <NavBarAdmin />
          </div>
          <div className="flex flex-col mt:-6 lg:flex-row">
            <div className="lg:w-1/4  mb-4 md:mb-0">
              <SideBarAdmin />
            </div>
            <div className="lg:w-3/4 mt-2 md:mt-0 ">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutAdmin;

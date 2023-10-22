import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import React from "react";
import ScrollToTop from "react-scroll-to-top";
import Footer from "./Footer";
import NavBar from "./NavBar";
import SousNavbar from "./SousNavbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isSlowConnection, setIsSlowConnection] =
    React.useState<boolean>(false);

  React.useEffect(() => {
    const handleConnectionChange = () => {
      setIsSlowConnection(
        !navigator.onLine ||
          (navigator as any).connection?.effectiveType === "slow-2g"
      );
    };

    window.addEventListener("online", handleConnectionChange);
    window.addEventListener("offline", handleConnectionChange);

    return () => {
      window.removeEventListener("online", handleConnectionChange);
      window.removeEventListener("offline", handleConnectionChange);
    };
  }, []);

  return (
    <div className="flex justify-center font-proximaNova">
      <div className="w-full bg-white">
        <div className="mb-4">
          <NavBar />
        </div>
        <div className="mb-4">
          <SousNavbar />
        </div>
        {children}
        <ScrollToTop
          smooth
          component={
            <ArrowUpwardIcon sx={{ color: "white", fontSize: "2rem" }} />
          }
          style={{
            backgroundColor: "#236CB2",
            borderRadius: "50%",
          }}
        />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import User from "../../../../models/User";

const SideBarAdmin = () => {
  const navigate = useNavigate();

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [user, setUser] = useState<User>();
  useEffect(() => {
    if (localStorage.getItem("user")) {
      setUser(JSON.parse(localStorage.getItem("user")!));
    }
  }, []);

  return (
    <div>
      <div className="justify-between px-4 mx-auto lg:items-center lg:flex lg:px-8     ">
        <div>
          <div className="lg:flex justify-end top-0 z-20 py-5 lg:py-5 lg:block lg:hidden">
            <div className="lg:hidden">
              <button
                className="p-2 text-brown rounded-lg outline-none focus:border-gray-400 border"
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                {sidebarOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-brown"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-brown"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        {/* Le reste de votre barre de navigation */}
      </div>

      {/* Barre latérale */}
      <aside
        className={`${
          sidebarOpen ? "translate-x-0 ease-out" : "-translate-x-full ease-in"
        } shadow-brown drop-shadow-lg transform h-screen w-64 top-0 left-0 bg-white z-50 transition-transform duration-300 ease-in-out lg:translate-x-0`}
      >
        <div className="p-6 h-[600px]">
          {user?.idrole === 2 ? (
            <div className="mt-4 flex items-center justify-center">
              <ul>
                <li>
                  <button
                    onClick={() => navigate("/admin/annonce")}
                    className="bg-brown w-60 px-2 py-2 text-white hover:text-yellow mb-2"
                  >
                    Annonces
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <div className="mt-4 flex items-center justify-center">
              <ul>
                <li>
                  <button
                    onClick={() => navigate("/admin")}
                    className="bg-brown w-60 px-2 py-2 text-white hover:text-yellow mb-2"
                  >
                    Accueil
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate("/admin/documentation")}
                    className="bg-brown w-60 px-2 py-2 text-white hover:text-yellow mb-2"
                  >
                    Documentations
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate("/admin/annonce")}
                    className="bg-brown w-60 px-2 py-2 text-white hover:text-yellow mb-2"
                  >
                    Annonces
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate("/admin/ideecontribution")}
                    className="bg-brown w-60 px-2 py-2 text-white hover:text-yellow mb-2"
                  >
                    Idées et plaintes
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </aside>
    </div>
  );
};

export default SideBarAdmin;

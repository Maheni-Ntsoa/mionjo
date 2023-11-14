import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { useNavigate } from "react-router-dom";
import Logout from "../../../../components/Logout";

const NavBarAdmin = () => {
  const navigate = useNavigate();

  return (
    <nav className="w-full shadow-brown drop-shadow-lg sticky top-0  bg-white">
      <div className="justify-between px-4 mx-auto lg:items-center lg:flex lg:px-8">
        <div>
          <div className=" lg:flex justify-between items-center top-0 z-20 py-5 lg:py-5 lg:block">
            <div className="flex justify-center">
              <img src="/assets/logos/logomionjo.svg" alt="logo_mionjo" />
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 lg:block lg:pb-0 lg:mt-0 $`}
          >
            <h1 className="xs:text-xl flex justify-center text-xl lg:text-4xl font-semibold font-bold text-blue ">
              Back Office Projet MIONJO
            </h1>

            <div className="flex justify-center mt-4">
              <img src="/assets/images/img_aloalo.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="">
          <button
            onClick={() => navigate("/admin/inscription")}
            className="bg-green w-40 rounded-md px-2 py-2 text-white hover:text-white mb-2"
          >
            <PersonAddIcon />
            Utilisateur
          </button>
        </div>
        <div className="lg:block md:flex  justify-end">
          <Logout />
        </div>
      </div>
    </nav>
  );
};

export default NavBarAdmin;

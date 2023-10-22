import { useNavigate } from "react-router-dom";

const Logout = () => {
    const navigate = useNavigate();

    return (
        <button
            onClick={() => {
                localStorage.clear();
                navigate('/login')
            }
            }
            style={{ fontFamily: "DidotBold" }}
            className="bg-yellow p-2 text-white rounded-md w-fit flex gap-2 items-center"
        >
            <span>
                <img
                    src="/assets/icons/ic_logout.svg"
                    alt="logout"
                    height={25}
                    width={25}
                />
            </span>
            Déconnexion{" "}
        </button>

    )
}

export default Logout
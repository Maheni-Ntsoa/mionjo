
import ListeUser from "./components/ListeUser";

const index = () => {

    const handleRefetch = () => {
    };
    return (
        <div className="flex justify-center mt-20" >
            <div></div>
            <div className="bg-black/10 mt-8 mx-4  shadow-brown drop-shadow-lg">
                <div className="flex justify-center ">
                    <ListeUser />
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default index
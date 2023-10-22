import LoginForm from "./components/LoginForm"

const index = () => {
    return (
        <div className="flex justify-center mt-20" >
            <div></div>
            <div className="bg-black/10 mt-8 mx-4  shadow-brown drop-shadow-lg">
                <div className="flex justify-center ">
                    <LoginForm />
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default index
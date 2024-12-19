import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login(props) {
    let navigate = useNavigate();
    let [eusername, setEusername] = useState("");
    let [epassword, setEpassword] = useState("");
    let [errorMessage, setErrorMessage] = useState("I help you manage your activities after you log in ;)");

    let users = props.users;

    function checkUser() {
        let checkUser = false;
        users.forEach((item) => {
            if (item.username === eusername && item.password === epassword) {
                console.log("Login Successful");
                checkUser = true;
                navigate("/landing", { state: { user: eusername } });
            }
        });

        if (checkUser === false) {
            console.log("Login failed");
            setErrorMessage("Please sign up if you don't have an account.");
        }
    }

    function handleUInput(evt) {
        setEusername(evt.target.value);
    }

    function handlePInput(evt) {
        setEpassword(evt.target.value);
    }

    return (
        <section className="h-screen bg-gradient-to-r from-violet-500 to-fuchsia-500 p-40">
            <div className="bg-white h-96 w-[75%] mx-auto flex items-center shadow-lg">
                <div className="bg-blue-400 h-full w-96 border border-violet">
                    <h1 className="p-20 text-3xl font-bold">
                        Welcome Back <br /> <span className="font-medium text-2xl">To keep connected with us</span>
                    </h1>
                    <p className="px-5 relative bottom-16 left-14">
                        Don't have an account? <Link to={"/signup"} className="underline">Sign Up</Link>
                    </p>
                </div>
                <div className="px-8">
                    <h1 className="text-2xl font-medium mb-4">Hey Hii 👀</h1>
                    <p className="text-red-500 mb-6">{errorMessage}</p>
                    <div className="flex flex-col gap-4">
                        <input
                            onChange={handleUInput}
                            className="border border-black w-56 p-2 rounded-md"
                            type="text"
                            placeholder="Enter your name"
                        />
                        <input
                            onChange={handlePInput}
                            className="border border-black w-56 p-2 rounded-md"
                            type="password"
                            placeholder="Enter your password"
                        />
                        <button
                            onClick={checkUser}
                            className="bg-violet-500 text-white font-medium p-2 rounded-md hover:bg-fuchsia-500 transition"
                        >
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login;

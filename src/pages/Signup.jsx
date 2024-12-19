import loginImage from "../assets/images/login.jpeg";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup(props) {
    let navigate = useNavigate();
    let { users, setUsers } = props;

    let [eusername, setEusername] = useState("");
    let [epassword, setEpassword] = useState("");
    let [rePassword, setRePassword] = useState("");
    let [errorMessage, setErrorMessage] = useState("");

    function handleUInput(evt) {
        setEusername(evt.target.value);
    }

    function handlePInput(evt) {
        setEpassword(evt.target.value);
    }

    function handleRePasswordInput(evt) {
        setRePassword(evt.target.value);
    }

    function addUser() {
        // Validation
        if (!eusername || !epassword || !rePassword) {
            setErrorMessage("All fields are required.");
            return;
        }

        if (epassword !== rePassword) {
            setErrorMessage("Passwords do not match.");
            return;
        }

        if (users.some((user) => user.username === eusername)) {
            setErrorMessage("Username already exists. Please choose another.");
            return;
        }

        // Add new user
        setUsers([...users, { username: eusername, password: epassword }]);
        navigate("/");
    }

    return (
        <section className="h-screen bg-gradient-to-r from-violet-500 to-fuchsia-500 p-40">
            <div className="bg-white h-[450px] w-[75%] mx-auto border rounded-md flex items-center shadow-lg">
                <div>
                    <img
                        className="max-w-full h-full px-20 py-12"
                        src={loginImage}
                        alt="Login illustration"
                    />
                </div>
                <div className="px-8">
                    <h1 className="text-2xl font-medium mb-4">Hey Hii 👀</h1>
                    <p className="text-pink-300 mb-6">
                        I help you manage your activities after you log in ;)
                    </p>
                    <p className="text-red-500 mb-4">{errorMessage}</p>
                    <div className="flex flex-col gap-4">
                        <input
                            className="border border-black w-56 p-2 rounded-md"
                            type="text"
                            placeholder="Enter your username"
                            onChange={handleUInput}
                        />
                        <input
                            className="border border-black w-56 p-2 rounded-md"
                            type="password"
                            placeholder="Enter your password"
                            onChange={handlePInput}
                        />
                        <input
                            className="border border-black w-56 p-2 rounded-md"
                            type="password"
                            placeholder="Re-enter your password"
                            onChange={handleRePasswordInput}
                        />
                        <button
                            onClick={addUser}
                            className="bg-violet-500 text-white font-medium p-2 rounded-md hover:bg-fuchsia-500 transition"
                        >
                            Sign Up
                        </button>
                        <p>
                            Already have an account?{' '}
                            <Link to="/" className="underline">
                                Login
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Signup;

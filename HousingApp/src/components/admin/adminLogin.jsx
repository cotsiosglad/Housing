import React, { useState } from "react";
import "./adminLogin.css"
import { Link } from "react-router-dom/cjs/react-router-dom.min";

// Initialize Firebase

//for admin login
//https://uiverse.io/guilhermeyohan/warm-mule-6

const AdminLogin = () => {

    // State to manage form input values
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // Function to handle form submission
    const handleLogin = (e) => {
        e.preventDefault(); // Prevents the default form submission behavior

        // display the entered values in the console
        console.log("Username:", username);
        console.log("Password:", password);
    };

    return (
        <div className="login-form-container">
            <form onSubmit={handleLogin} className="login-form">
                <h2>Login</h2>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        placeholder="Enter your username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <Link to="/admin/home">
                        <button type="submit" className="login-button" style={{ width: "100%" }}>
                            Login
                        </button>
                    </Link>

                </div>
            </form>
        </div>
    );
};
export default AdminLogin
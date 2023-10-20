import React, { useState } from "react";
import "./adminLogin.css"
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { app } from "../../firebase.js";
import { signInWithEmailAndPassword, signOut, getAuth } from "firebase/auth";
const AdminLogin = () => {
  const auth = getAuth(app);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  
  const login = async () => {
    console.log("Before signInWithEmailAndPassword");
    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
      .then((userCredential) => {
        console.log("Sign in was successful")
        const user = userCredential.user;
        // console.log("User UID: " + user.uid);
        // console.log("User Email: " + user.email);
        window.location.href= '/admin/home'
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Error code:', errorCode);
        console.error('Error message:', errorMessage);
        setErrorMessage(errorMessage);
      });
  };

  // const logout = async () => {
  //   await signOut(auth);
  // };

    return (
        <div className="login-form-container">
            <form className="login-form">
                <h2>Login</h2>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        id="email"
                        placeholder="Enter your email"
                        onChange={(event) => {
                          setLoginEmail(event.target.value);
                      }}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Enter your password"
                        onChange={(event) => {
                          setLoginPassword(event.target.value);
                        }}
                        required
                    />
                </div>
                <div className="form-group">
                    <button type="button" onClick={login} className="login-button" style={{ width: "100%" }}>
                        Login
                    </button>
                    {errorMessage && <h4>{errorMessage}</h4>}
                </div>
            </form>
        </div>
    );
};
export default AdminLogin

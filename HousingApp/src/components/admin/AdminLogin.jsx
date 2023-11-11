import React, { useState, useEffect } from "react";
import "./adminLogin.css";
import { useHistory } from "react-router-dom";
import { auth } from "../../firebase.js";
import { signInWithEmailAndPassword, setPersistence, browserLocalPersistence } from "firebase/auth";
import AdminMainPage from "./AdminMainPage";

const AdminLogin = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  let history = useHistory();

  useEffect(() => {
    // Check the user's authentication status when the component mounts
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });

    // Clean up the subscription when the component unmounts
    return () => unsubscribe();
  }, []);

  const login = async () => {
    setPersistence(auth, browserLocalPersistence).then(() => {
      signInWithEmailAndPassword(auth, loginEmail, loginPassword)
        .then(() => {
          // Authentication will be handled by the useEffect
        })
        .catch((error) => {
          const errorMessage = error.message;
          setErrorMessage("Please enter the correct email or password");
        });
    });
  };

  return (
    <div className="login-form-container">
      {isLoggedIn ? (
        <AdminMainPage />
      ) : (
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
      )}
    </div>
  );
};

export default AdminLogin;

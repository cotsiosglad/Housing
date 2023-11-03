import React, { useState } from "react";
import "./adminLogin.css"
import { useHistory } from "react-router-dom";
import { auth } from "../../firebase.js";
import { signInWithEmailAndPassword, signOut, getAuth, onAuthStateChanged, setPersistence, browserLocalPersistence } from "firebase/auth";
const AdminLogin = () => {
  // const auth = getAuth(app);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  let history = useHistory();
  const login = async () => {
    //console.log("Before signInWithEmailAndPassword");
    setPersistence(auth, browserLocalPersistence).then(() => {
      signInWithEmailAndPassword(auth, loginEmail, loginPassword)
      .then((userCredential) => {
        // console.log("Sign in was successful")
        const user = userCredential.user;
        // console.log("User UID: " + user.uid);
        // console.log("User Email: " + user.email);
        // console.log(auth)
        // window.location.href= '/admin/home'
        auth.onAuthStateChanged(user => {
          user ? window.location.href= '/admin/home' : window.location.href= '/admin/';
       });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // console.error('Error code:', errorCode);
        // console.error('Error message:', errorMessage);
        setErrorMessage("Please enter the correct email or password");
      });
    })

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

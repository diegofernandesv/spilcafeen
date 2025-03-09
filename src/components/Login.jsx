import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { FaEye, FaEyeSlash } from "react-icons/fa"; // Ensure this import statement
import styles from "./Auth.module.css"; // Ensure this import statement

import { auth, db } from "../firebase"; // Ensure this path is correct
import { getAuth, signInWithEmailAndPassword, signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

const Login = () => {
  const navigation = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const facebookClick = async () => {
    try {
      const result = await signInWithPopup(auth, new FacebookAuthProvider());
      const userDoc = await getDoc(doc(db, "users", result.user.uid));
      if (userDoc.exists()) {
        navigation("/");
      } else {
        setError("User not registered. Please sign up first.");
        await auth.signOut();
      }
    } catch (error) {
      if (error.message === "Firebase: Error (auth/popup-blocked).") {
        setError("Your browser has blocked the login popup. Please ensure your browser is not blocking popups.");
      }
      console.log("Error logging in with Facebook: " + error.message);
    }
  };

  const functAuthentication = async (e) => {
    e.preventDefault();
    try {
      if (email === "" || password === "") {
        setError("Please fill in all required fields");
        return;
      }
      setLoading(true);
      const user = await signInWithEmailAndPassword(auth, email, password);
      setEmail("");
      setPassword("");
      setLoading(false);
      navigation("/");
      console.log(user.user.email);
    } catch (error) {
      setLoading(false);
      if (error.message === "Firebase: Error (auth/invalid-credential).") {
        setError("User does not exist. Invalid email or password");
      } else if (error.message === "Firebase: Error (auth/network-request-failed).") {
        setError("Oops. Check your internet connection");
      }
      console.log(error.message);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <h1>Welcome to Spilcafeen</h1>
        <div className={styles.loginBox}>
          <h2>Login</h2>
          <form onSubmit={functAuthentication} onChange={() => setError("")}>
            <input
              className={styles.inputField}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              id="email"
            />
            <div className={styles.inputWrapper}>
              <input
                className={styles.passwordInput}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={passwordVisible ? "text" : "password"}
                placeholder="Password"
                id="password"
              />
              <span
                className={styles.eyeIcon}
                onClick={() => setPasswordVisible(!passwordVisible)}
              >
                {passwordVisible ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            <div className={styles.options}>
              <label className={styles.switch}>
                <input type="checkbox" />
                <span className={styles.sliderRound}></span>
              </label>
              <p>Remember me</p>
              <a href="#">Forgot your password?</a>
            </div>
            <button className={styles.btn1} type="submit">
              Login
            </button>
          </form>
          <div className={styles.socialLogin}>
            <button className={styles.btn2} onClick={facebookClick}>
              Login with Facebook
            </button>
          </div>
          <p>
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>

          {loading && <div className={styles.loading}>Loading...</div>}
          {error && <div className={styles.error}>{error}</div>}
        </div>
      </div>
    </>
  );
};

export default Login;
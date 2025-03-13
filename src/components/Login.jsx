import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import styles from "./Auth.module.css";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      if (email === "" || password === "") {
        setError("Please fill in all required fields");
        return;
      }
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      setEmail("");
      setPassword("");
      setLoading(false);
      navigate("/dashboard");
    } catch (error) {
      setLoading(false);
      if (error.message === "Firebase: Error (auth/invalid-credential).") {
        setError("User does not exist. Invalid email or password");
      } else if (error.message === "Firebase: Error (auth/network-request-failed).") {
        setError("Oops. Check your internet connection");
      } else {
        setError(error.message);
      }
    }
  };

  return (
    <div className={styles.authContainer}>
      <div className={styles.authBox}>
        <h2>Login</h2>
        <form onSubmit={handleLogin} onChange={() => setError("")}>
          <div className={styles.inputGroup}>
            <input
              className={styles.inputField}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              id="email"
            />
          </div>
          <div className={styles.inputGroup}>
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
        <p>
      Don't have an account? 
      <Link to="/signup" style={{ color: "#ed1433" }}>
        Sign Up
      </Link>
    </p>

        {loading && <div className={styles.loading}>Loading...</div>}
        {error && <div className={styles.error}>{error}</div>}
      </div>
    </div>
  );
};

export default Login;
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Auth.module.css"; // Import CSS Module
import { FaEye, FaEyeSlash } from "react-icons/fa";

// Import Firebase modules
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const SignUp = () => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Normal email format
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigation = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const functAuthentication = async (e) => {
    e.preventDefault();
    setError("");
    if (name === "" || password === "" || confirmPassword === "") {
      setError("Please fill in all required fields");
      return;
    }
    if (password !== confirmPassword) {
      setError("Password validation failed");
      return;
    }
    if (!emailRegex.test(email)) {
      setError("Invalid email format");
      return;
    }

    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(doc(db, "users", userCredential.user.uid), {
        name: name,
        email: email,
        uid: userCredential.user.uid,
        creationDate: new Date(),
        provider: "email",
      });
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      navigation("/");
    } catch (error) {
      console.log(error);
      if (error.code === "auth/email-already-in-use") {
        setError("The email is already in use");
      } else if (error.code === "auth/network-request-failed") {
        setError("Oops. Check your internet connection");
      } else if (error.code === "auth/weak-password") {
        setError("Your password must be at least 6 characters long");
      } else if (error.code === "auth/invalid-email") {
        setError("Invalid email");
      } else {
        setError(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.authContainer}>
      <div className={styles.authBox}>
        <h1>Sign up to Spilcafeen</h1>
        <div className={styles.authForm}>
          <h2>Create Account</h2>
          <form onSubmit={functAuthentication} onChange={() => setError("")}>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={styles.authInput}
              type="text"
              placeholder="Name"
              id="name"
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.authInput}
              type="email"
              placeholder="Email"
              id="email"
            />
            <div className={styles.passwordWrapper}>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={styles.authInput}
                type={passwordVisible ? "text" : "password"}
                placeholder="Password (min. 8 characters)"
                id="password"
              />
              <span
                className={styles.eyeIcon}
                onClick={() => setPasswordVisible(!passwordVisible)}
              >
                {passwordVisible ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            <div className={styles.passwordWrapper}>
              <input
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={styles.authInput}
                type={confirmPasswordVisible ? "text" : "password"}
                placeholder="Confirm Password"
                id="confirm-password"
              />
              <span
                className={styles.eyeIcon}
                onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
              >
                {confirmPasswordVisible ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            <button className={styles.authButton} type="submit" disabled={loading}>
              {loading ? "Creating Account..." : "Create Account"}
            </button>
          </form>
          <p className={styles.authLink}>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
        {loading && <div className={styles.loading}>Loading...</div>}
        {error && <div className={styles.error}>{error}</div>}
      </div>
    </div>
  );
};

export default SignUp;
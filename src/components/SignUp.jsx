import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Auth.module.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

// Firebase imports
import { auth, db } from "../firebase";
import {
  createUserWithEmailAndPassword,
  fetchSignInMethodsForEmail,
} from "firebase/auth";
import { ref, set } from "firebase/database";

const SignUp = () => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");

    if (!name || !email || !password || !confirmPassword) {
      setError("Please fill in all required fields");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (!emailRegex.test(email)) {
      setError("Invalid email format");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters long");
      return;
    }

    setLoading(true);
    try {
      const signInMethods = await fetchSignInMethodsForEmail(auth, email);
      if (signInMethods.length > 0) {
        setError(
          `This email is already registered using: ${signInMethods.join(
            ", "
          )}. Try logging in instead.`
        );
        setLoading(false);
        return;
      }

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Save user data in Realtime Database
      await set(ref(db, `users/${user.uid}`), {
        name: name,
        email: email,
        uid: user.uid,
        creationDate: new Date().toISOString(),
        provider: "email",
      });

      // Clear inputs
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      navigate("/dashboard");
    } catch (error) {
      console.error("Signup error:", error);
      if (error.code === "auth/network-request-failed") {
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
          <form onSubmit={handleSignUp} onChange={() => setError("")}>
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
                onClick={() =>
                  setConfirmPasswordVisible(!confirmPasswordVisible)
                }
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

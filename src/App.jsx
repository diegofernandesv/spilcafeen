import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Dashboard from "./views/Dashboard";
import Inventory from "./views/Inventory";
import PrivateRoute from "./components/PrivateRoute";
import Calendar from "./components/Calendar";
import ContentView from "./views/ContentView";
import styles from "./App.module.css"; // Import the CSS module for styling

function App() {
  return (
    <Router>
      <div className={styles.appContainer}>
        <div className={styles.mainContent}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route
              path="/inventory"
              element={
                <PrivateRoute>
                  <Inventory />
                </PrivateRoute>
              }
            />
            <Route
              path="/calendar"
              element={
                <PrivateRoute>
                  <Calendar />
                </PrivateRoute>
              }
            />
            <Route
              path="/websitecontent"
              element={
                <PrivateRoute>
                  <ContentView />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<Navigate to="/dashboard" />} /> {/* Default route */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
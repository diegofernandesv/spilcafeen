import React from "react";
import styles from "../components/Dashboard.module.css";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";

function Dashboard() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Rubik+One&display=swap"
        rel="stylesheet"
      />
      <main className={styles.dashboard}>
        <Sidebar />
        <MainContent />
      </main>
    </>
  );
}

export default Dashboard;

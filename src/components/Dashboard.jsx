import React from "react";
import ActionButtons from "./ActionButtons";
import Inventory from "./Inventory";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={styles.dashboardContainer}>
      <ActionButtons />
      <Inventory />
    </div>
  );
};

export default Dashboard;

import React from "react";
import styles from "./Dashboard.module.css";
import RatingsChart from "./RatingsChart";
import GamesList from "./GamesList";

function DashboardContent() {
  return (
    <div className={styles.dashboardContent}>
      <RatingsChart />
      <GamesList />
    </div>
  );
}

export default DashboardContent;

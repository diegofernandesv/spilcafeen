import React from "react";
import styles from "./Dashboard.module.css";
import Header from "./Header";
import AlertSection from "./AlertSection";
import StatsSection from "./StatsSection";
import DashboardContent from "./DashboardContent";
import ActionButtons from "./ActionButtons";

function MainContent() {
  return (
    <section className={styles.mainContent}>
      <Header />
      <AlertSection />
      <StatsSection />
      <DashboardContent />
      <ActionButtons />
    </section>
  );
}

export default MainContent;

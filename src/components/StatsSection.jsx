
import styles from "./Dashboard.module.css";

function StatsSection() {
  return (
    <section>
      <div className={styles.totalGames}>
        <span>Total games in the system :</span>
        <span className={styles.gamesCount}>472 games</span>
      </div>
      <div className={styles.locationStats}>
        <div className={styles.statCard}>
          <div className={styles.location}>Vestergade :</div>
          <div className={styles.count}>120 games</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.location}>Fredensgade :</div>
          <div className={styles.count}>85 games</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.location}>Aalborg :</div>
          <div className={styles.count}>150 games</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.location}>Kolding :</div>
          <div className={styles.count}>117 games</div>
        </div>
      </div>
    </section>
  );
}

export default StatsSection;

import React, { useEffect, useState } from "react";
import styles from "./Dashboard.module.css";
import { database } from "../firebase"; // Import the database instance from firebase.js
import { ref, onValue } from "firebase/database"; // Import Firebase Realtime Database modules

function StatsSection() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const boardGamesRef = ref(database, 'boardGames');
    onValue(boardGamesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const gamesList = Object.keys(data).map(key => data[key]);
        setGames(gamesList);
      } else {
        setGames([]);
      }
    }, (error) => {
      console.error("Error fetching data: ", error);
    });
  }, []);

  const getGamesCountByLocation = (location) => {
    return games.filter((game) => game.location.includes(location)).length;
  };

  return (
    <section>
      <div className={styles.totalGames}>
        <span>Total games in the system :</span>
        <span className={styles.gamesCount}>{games.length} games</span>
      </div>
      <div className={styles.locationStats}>
        <div className={styles.statCard}>
          <div className={styles.location}>Vestergade :</div>
          <div className={styles.count}>{getGamesCountByLocation("Vestergade")} games</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.location}>Fredensgade :</div>
          <div className={styles.count}>{getGamesCountByLocation("Fredensgade")} games</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.location}>Aalborg :</div>
          <div className={styles.count}>{getGamesCountByLocation("Aalborg")} games</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.location}>Kolding :</div>
          <div className={styles.count}>{getGamesCountByLocation("Kolding")} games</div>
        </div>
      </div>
    </section>
  );
}

export default StatsSection;

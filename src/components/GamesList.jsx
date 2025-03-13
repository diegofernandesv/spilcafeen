import React, { useState, useEffect } from "react";
import styles from "./Dashboard.module.css";
import { database } from "../firebase";
import { ref, onValue } from "firebase/database";

function GamesList() {
  const [recentGames, setRecentGames] = useState([]);

  useEffect(() => {
    const boardGamesRef = ref(database, 'boardGames');
    onValue(boardGamesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const gamesList = Object.keys(data).map(key => data[key]);
        setRecentGames(gamesList.slice(-3)); // Get the last 3 games added
      } else {
        setRecentGames([]);
      }
    }, (error) => {
      console.error("Error fetching data: ", error);
    });
  }, []);

  return (
    <section className={styles.newGames}>
      <h3 className={styles.sectionTitle}>Newly restocked games:</h3>
      <div className={styles.gameCards}>
        {recentGames.map((game, index) => (
          <div key={index} className={styles.gameCard}>
            <div>{game.name}</div>
            <div>
              <svg
                id="edit-icon"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ width: "24px", height: "24px", cursor: "pointer" }}
              >
                <path
                  d="M5.5 19.5H6.925L16.7 9.725L15.275 8.3L5.5 18.075V19.5ZM4.5 21.5C4.21667 21.5 3.97933 21.404 3.788 21.212C3.59667 21.02 3.50067 20.7827 3.5 20.5V18.075C3.5 17.8083 3.55 17.554 3.65 17.312C3.75 17.07 3.89167 16.8577 4.075 16.675L16.7 4.075C16.9 3.89167 17.121 3.75 17.363 3.65C17.605 3.55 17.859 3.5 18.125 3.5C18.391 3.5 18.6493 3.55 18.9 3.65C19.1507 3.75 19.3673 3.9 19.55 4.1L20.925 5.5C21.125 5.68333 21.2707 5.9 21.362 6.15C21.4533 6.4 21.4993 6.65 21.5 6.9C21.5 7.16667 21.454 7.421 21.362 7.663C21.27 7.905 21.1243 8.12567 20.925 8.325L8.325 20.925C8.14167 21.1083 7.929 21.25 7.687 21.35C7.445 21.45 7.191 21.5 6.925 21.5H4.5ZM15.975 9.025L15.275 8.3L16.7 9.725L15.975 9.025Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default GamesList;

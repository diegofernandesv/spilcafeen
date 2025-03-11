import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue, remove } from "firebase/database";
import styles from "./Inventory.module.css";

const Inventory = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = () => {
      const db = getDatabase();
      const gamesRef = ref(db, "boardGames");
      onValue(gamesRef, (snapshot) => {
        const data = snapshot.val();
        const gamesData = data
          ? Object.keys(data)
              .map((key) => ({
                id: key,
                ...data[key],
              }))
              .sort((a, b) => a.name.localeCompare(b.name))
          : [];
        setGames(gamesData);
      });
    };

    fetchGames();
  }, []);

  const handleDeleteGame = async (gameId) => {
    const db = getDatabase();
    const gameRef = ref(db, `boardGames/${gameId}`);
    try {
      await remove(gameRef);
      setGames(games.filter((game) => game.id !== gameId));
    } catch (error) {
      console.error("Error deleting game:", error);
      alert("Error deleting game. Please try again.");
    }
  };

  return (
    <div className={styles.inventoryContainer}>
      <h1>Inventory</h1>
      <div className={styles.gamesList}>
        {games.map((game) => (
          <div key={game.id} className={styles.gameItem}>
            <div>
              <h2>{game.name}</h2>
              <p>Location: {game.location}</p>
              <p>Language: {game.language}</p>
              <p>Genre: {game.genre}</p>
              <p>Player Count: {game.playerCount}</p>
              <p>Difficulty: {game.difficulty}</p>
              <p>Shelf: {game.shelf}</p>
            </div>
            <button
              className={styles.deleteButton}
              onClick={() => handleDeleteGame(game.id)}
              aria-label={`Delete ${game.name}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-trash-2"
              >
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6l-2 14H7L5 6"></path>
                <path d="M10 11v6"></path>
                <path d="M14 11v6"></path>
                <path d="M5 6l1-3h12l1 3"></path>
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inventory;

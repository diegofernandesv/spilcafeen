import React, { useState, useEffect } from "react";
import styles from "./Inventory.module.css";
import Sidebar from "../components/Sidebar";
import {
  FaEdit,
  FaSearch,
  FaMapMarkerAlt,
  FaLanguage,
  FaTags,
  FaUsers,
  FaTachometerAlt,
  FaLayerGroup,
  FaTrash,
} from "react-icons/fa";
import { database } from "../firebase.js";
import { ref, onValue, remove, set } from "firebase/database";

const Inventory = () => {
  const [filters, setFilters] = useState({
    location: "",
    language: "",
    genre: "",
    players: "",
    difficulty: "",
    shelf: "",
    search: "",
  });

  const [games, setGames] = useState([]);
  const [editingGame, setEditingGame] = useState(null);

  useEffect(() => {
    const boardGamesRef = ref(database, "boardGames");
    onValue(
      boardGamesRef,
      (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const gamesList = Object.keys(data).map((key) => ({
            id: key, // include Firebase key
            ...data[key],
          }));
          setGames(gamesList);
        } else {
          setGames([]);
        }
      },
      (error) => {
        console.error("Error fetching data: ", error);
      }
    );
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleEditClick = (game) => {
    setEditingGame({ ...game });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditingGame((prevGame) => ({
      ...prevGame,
      [name]: value,
    }));
  };

  const handleSaveClick = () => {
    const gameRef = ref(database, `boardGames/${editingGame.id}`);
    set(gameRef, editingGame)
      .then(() => {
        setGames((prevGames) =>
          prevGames.map((game) =>
            game.id === editingGame.id ? editingGame : game
          )
        );
        setEditingGame(null);
      })
      .catch((error) => {
        console.error("Error updating game: ", error);
      });
  };

  const handleDeleteClick = (gameId) => {
    if (window.confirm("Are you sure you want to delete this game?")) {
      const gameRef = ref(database, `boardGames/${gameId}`);
      remove(gameRef)
        .then(() => {
          setGames((prevGames) =>
            prevGames.filter((game) => game.id !== gameId)
          );
        })
        .catch((error) => {
          console.error("Error deleting game: ", error);
        });
    }
  };

  const filteredGames = games.filter((game) => {
    return (
      (filters.location === "" || game.location?.includes(filters.location)) &&
      (filters.language === "" || game.language === filters.language) &&
      (filters.genre === "" || game.genre === filters.genre) &&
      (filters.players === "" || game.playerCount === filters.players) &&
      (filters.difficulty === "" || game.difficulty === filters.difficulty) &&
      (filters.shelf === "" || game.shelf?.includes(filters.shelf)) &&
      (filters.search === "" ||
        game.name.toLowerCase().includes(filters.search.toLowerCase()))
    );
  });

  return (
    <div className={styles.inventoryContainer}>
      <Sidebar className={styles.sidebar} />
      <div className={styles.content}>
        <h1>Board Game Inventory</h1>
        <div className={styles.filters}>
          <div className={styles.filterItem}>
            <FaSearch className={styles.filterIcon} />
            <input
              type="text"
              name="search"
              placeholder="Search by name"
              value={filters.search}
              onChange={handleFilterChange}
            />
          </div>
          <div className={styles.filterItem}>
            <FaMapMarkerAlt className={styles.filterIcon} />
            <select
              name="location"
              value={filters.location}
              onChange={handleFilterChange}
            >
              <option value="">All Locations</option>
              <option value="Vestergade">Vestergade</option>
              <option value="Fredensgade">Fredensgade</option>
              <option value="Aalborg">Aalborg</option>
              <option value="Kolding">Kolding</option>
            </select>
          </div>
          <div className={styles.filterItem}>
            <FaLanguage className={styles.filterIcon} />
            <select
              name="language"
              value={filters.language}
              onChange={handleFilterChange}
            >
              <option value="">All Languages</option>
              <option value="Danish">Danish</option>
              <option value="English">English</option>
            </select>
          </div>
          <div className={styles.filterItem}>
            <FaTags className={styles.filterIcon} />
            <select
              name="genre"
              value={filters.genre}
              onChange={handleFilterChange}
            >
              <option value="">All Genres</option>
              <option value="Fantasy">Fantasy</option>
              <option value="Sci-Fi">Sci-Fi</option>
              <option value="Horror">Horror</option>
              <option value="Mystery">Mystery</option>
              <option value="Party">Party</option>
              <option value="Adventure">Adventure</option>
              <option value="For kids">For kids</option>
            </select>
          </div>
          <div className={styles.filterItem}>
            <FaUsers className={styles.filterIcon} />
            <select
              name="players"
              value={filters.players}
              onChange={handleFilterChange}
            >
              <option value="">All Players</option>
              <option value="2">2</option>
              <option value="2-4">2-4</option>
              <option value="4+">4+</option>
            </select>
          </div>
          <div className={styles.filterItem}>
            <FaTachometerAlt className={styles.filterIcon} />
            <select
              name="difficulty"
              value={filters.difficulty}
              onChange={handleFilterChange}
            >
              <option value="">All Difficulties</option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>
          <div className={styles.filterItem}>
            <FaLayerGroup className={styles.filterIcon} />
            <select
              name="shelf"
              value={filters.shelf}
              onChange={handleFilterChange}
            >
              <option value="">All Shelves</option>
              <option value="A1">A1</option>
              <option value="B2">B2</option>
              <option value="C3">C3</option>
              <option value="D4">D4</option>
            </select>
          </div>
        </div>
        <div className={styles.gamesList}>
          {filteredGames.map((game) => (
            <div key={game.id} className={styles.gameCard}>
              {editingGame && editingGame.id === game.id ? (
                <div>
                  <input
                    type="text"
                    name="name"
                    value={editingGame.name}
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    name="language"
                    value={editingGame.language}
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    name="genre"
                    value={editingGame.genre}
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    name="playerCount"
                    value={editingGame.playerCount}
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    name="difficulty"
                    value={editingGame.difficulty}
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    name="shelf"
                    value={editingGame.shelf}
                    onChange={handleInputChange}
                  />
                  <button onClick={handleSaveClick}>Save</button>
                </div>
              ) : (
                <div>
                  <FaEdit
                    onClick={() => handleEditClick(game)}
                    className={styles.editIcon}
                  />
                  <FaTrash
                    onClick={() => handleDeleteClick(game.id)}
                    className={styles.editIcon2}
                  />
                  <h2>{game.name}</h2>
                  <p>
                    <FaMapMarkerAlt className={styles.infoIcon} /> Location:{" "}
                    {game.location}
                  </p>
                  <p>
                    <FaLanguage className={styles.infoIcon} /> Language:{" "}
                    {game.language}
                  </p>
                  <p>
                    <FaTags className={styles.infoIcon} /> Genre: {game.genre}
                  </p>
                  <p>
                    <FaUsers className={styles.infoIcon} /> Players:{" "}
                    {game.playerCount}
                  </p>
                  <p>
                    <FaTachometerAlt className={styles.infoIcon} /> Difficulty:{" "}
                    {game.difficulty}
                  </p>
                  <p>
                    <FaLayerGroup className={styles.infoIcon} /> Shelf:{" "}
                    {game.shelf}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Inventory;

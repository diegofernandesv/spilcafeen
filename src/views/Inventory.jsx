import React, { useState, useEffect } from "react";
import styles from "./Inventory.module.css"; // Import CSS Module
import Sidebar from "../components/Sidebar";
import { FaEdit, FaSearch, FaMapMarkerAlt, FaLanguage, FaTags, FaUsers, FaTachometerAlt, FaLayerGroup } from "react-icons/fa"; // Import icons

const gamesData = [
  {
    name: "Agricola: All Creatures Big and Small",
    locations: { Vestergade: "F5" },
    language: "English",
    genre: "Strategy",
    players: "2",
    difficulty: "Medium",
  },
  {
    name: "Anomia",
    locations: {Frederiskberg: "A1"},
    language: "English",
    genre: "Party",
    players: "3-6",
    difficulty: "Easy",
  },
  {
    name: "Battle Sheep",
    locations: { Vestergade: "D3", Aalborg: "J5" },
    language: "English",
    genre: "Strategy",
    players: "2-4",
    difficulty: "Easy",
  },
  {
    "name": "Battle Sheep",
    "locations": {
      "Vestergade": "D3",
      "Aalborg": "J5"
    },
    "language": "Language Independent",
    "genre": "Abstract Strategy",
    "players": "2-4",
    "difficulty": "Easy"
  },
  {
    "name": "Betrayal at the House on the Hill - 3rd ed.",
    "locations": {
      "Vestergade": "F5",
      "Aalborg": "D1"
    },
    "language": "English",
    "genre": "Horror",
    "players": "3-6",
    "difficulty": "Medium"
  },
  {
    "name": "Candy Monsters",
    "locations": {
      "Vestergade": "D2"
    },
    "language": "English",
    "genre": "Children's Game",
    "players": "2-4",
    "difficulty": "Easy"
  },
  {
    "name": "Cards Against Humanity BLÅ",
    "locations": {
      "Vestergade": "F4",
      "Aalborg": "J3",
      "Kolding": "E3"
    },
    "language": "Danish",
    "genre": "Party",
    "players": "4-20",
    "difficulty": "Easy"
  },
  {
    "name": "Cards Against Humanity GRØN",
    "locations": {
      "Vestergade": "F4",
      "Aalborg": "J3"
    },
    "language": "Danish",
    "genre": "Party",
    "players": "4-20",
    "difficulty": "Easy"
  },
  {
    "name": "Cards Against Humanity RØD",
    "locations": {
      "Vestergade": "F4",
      "Aalborg": "J3",
      "Kolding": "E3"
    },
    "language": "Danish",
    "genre": "Party",
    "players": "4-20",
    "difficulty": "Easy"
  },
  {
    "name": "Carcassonne",
    "locations": {},
    "language": "Language Independent",
    "genre": "Tile-Placement",
    "players": "2-5",
    "difficulty": "Medium"
  },
  {
    "name": "Carcassonne The City",
    "locations": {
      "Vestergade": "TOP"
    },
    "language": "Language Independent",
    "genre": "Tile-Placement",
    "players": "2-4",
    "difficulty": "Medium"
  },
  {
    "name": "Catan",
    "locations": {},
    "language": "Language Independent",
    "genre": "Strategy",
    "players": "3-4",
    "difficulty": "Medium"
  },
  {
    "name": "Claim 2",
    "locations": {
      "Vestergade": "SMÅ"
    },
    "language": "English",
    "genre": "Card Game",
    "players": "2",
    "difficulty": "Easy"
  },
  {
    "name": "Danmark Spillet",
    "locations": {
      "Vestergade": "D5",
      "Aalborg": "H2",
      "Kolding": "F5"
    },
    "language": "Danish",
    "genre": "Trivia",
    "players": "2-6",
    "difficulty": "Medium"
  },
  {
    "name": "Det burde man jo vide!",
    "locations": {
      "Vestergade": "F4",
      "Aalborg": "G3"
    },
    "language": "Danish",
    "genre": "Trivia",
    "players": "2-8",
    "difficulty": "Easy"
  },
  {
    "name": "Ducktales",
    "locations": {
      "Vestergade": "D5"
    },
    "language": "Danish",
    "genre": "Children's Game",
    "players": "2-4",
    "difficulty": "Easy"
  },
  {
    "name": "Game 1",
    "locations": {
      "Vestergade": "A1"
    },
    "language": "Danish",
    "genre": "Fantasy",
    "players": "2-4",
    "difficulty": "Easy"
  },
  {
    "name": "Game 2",
    "locations": {
      "Fredensgade": "B2"
    },
    "language": "English",
    "genre": "Sci-Fi",
    "players": "4+",
    "difficulty": "Medium"
  },
  {
    "name": "Game 3",
    "locations": {
      "Aalborg": "C3"
    },
    "language": "Danish",
    "genre": "Horror",
      "players": "2",
      "difficulty": "Hard"
  },
  {
    "name": "Game 4",
    "locations": {
      "Kolding": "D4"
    },
    "language": "English",
    "genre": "Mystery",
    "players": "4+",
    "difficulty": "Medium"
  },
  {
    "name": "Grissebasse",
    "locations": {
      "Vestergade": "D3"
    },
    "language": "Danish",
    "genre": "Card Game",
    "players": "2-6",
    "difficulty": "Easy"
  },
  {
    "name": "Horrified",
    "locations": {
      "Vestergade": "F2"
    },
    "language": "English",
    "genre": "Cooperative",
    "players": "1-5",
    "difficulty": "Medium"
  },
  {
    "name": "Hugo",
    "locations": {
      "Vestergade": "D5"
    },
    "language": "Danish",
    "genre": "Family",
    "players": "2-8",
    "difficulty": "Easy"
  },
  {
    "name": "Brain Box - Once Upon A Time",
    "locations": {
      "Vestergade": "C6"
    },
    "language": "English",
    "genre": "Trivia",
    "players": "2-4",
    "difficulty": "Medium"
  },
  {
    "name": "Brain Box - Science EN",
    "locations": {
      "Vestergade": "C6"
    },
    "language": "English",
    "genre": "Trivia",
    "players": "2-4",
    "difficulty": "Medium"
  },
  {
    "name": "Brain Box - The World EN",
    "locations": {
      "Vestergade": "C6"
    },
    "language": "English",
    "genre": "Trivia",
    "players": "2-4",
    "difficulty": "Medium"
  },
  {
    "name": "Just One (eng.)",
    "locations": {
      "Vestergade": "C6"
    },
    "language": "English",
    "genre": "Party",
    "players": "3-6",
    "difficulty": "Easy"
  },
  {
    "name": "Paperback",
    "locations": {
      "Vestergade": "C6"
    },
    "language": "English",
    "genre": "Card Game",
    "players": "2-5",
    "difficulty": "Medium"
  },
  {
    "name": "Wits & Wagers: It's Vegas Baby!",
    "locations": {
      "Vestergade": "C6"
    },
    "language": "English",
    "genre": "Party",
    "players": "4-10",
    "difficulty": "Medium"
  },
  {
    "name": "Dream Home",
    "locations": {
      "Vestergade": "C5"
    },
    "language": "English",
    "genre": "Strategy",
    "players": "2-4",
    "difficulty": "Medium"
  },
  {
    "name": "Machi Koro",
    "locations": {
      "Vestergade": "C5",
      "Kolding": "D4"
    },
    "language": "English",
    "genre": "Strategy",
    "players": "2-4",
    "difficulty": "Medium"
  },
  {
    "name": "Planet",
    "locations": {
      "Vestergade": "C5",
      "Fredensgade": "E1",
      "Aalborg": "C2"
    },
    "language": "English",
    "genre": "Strategy",
    "players": "2-4",
    "difficulty": "Medium"
  },
  {
    "name": "Seikatsu",
    "locations": {
      "Vestergade": "C5"
    },
    "language": "English",
    "genre": "Abstract Strategy",
    "players": "2",
    "difficulty": "Medium"
  },
  {
    "name": "Celestia",
    "locations": {
      "Vestergade": "C4"
    },
    "language": "English",
    "genre": "Party",
    "players": "2-6",
    "difficulty": "Easy"
  },
  {
    "name": "Haru Ichiban",
    "locations": {
      "Vestergade": "C4"
    },
    "language": "English",
    "genre": "Abstract Strategy",
    "players": "2-4",
    "difficulty": "Medium"
  },
  {
    "name": "Mascarade",
    "locations": {
      "Vestergade": "C4"
    },
    "language": "English",
    "genre": "Party",
    "players": "2-13",
    "difficulty": "Medium"
  },
  {
    "name": "Schotten Totten",
    "locations": {
      "Vestergade": "C4"
    },
    "language": "English",
    "genre": "Card Game",
    "players": "2",
    "difficulty": "Medium"
  },
  {
    "name": "*NY* Gnome Kingdom",
    "locations": {
      "Vestergade": "C3",
      "Fredensgade": "TOP",
      "Kolding": "G5"
    },
    "language": "English",
    "genre": "Strategy",
    "players": "2-4",
    "difficulty": "Medium"
  },
  {
    "name": "Kuzooka",
    "locations": {
      "Vestergade": "C2"
    },
    "language": "English",
    "genre": "Card Game",
    "players": "2-4",
    "difficulty": "Medium"
  },
  {
    "name": "So Many Clues",
    "locations": {
      "Vestergade": "B6"
    },
    "language": "English",
    "genre": "Party",
    "players": "3-8",
    "difficulty": "Easy"
  },
  {
    "name": "Detective Club",
    "locations": {
      "Vestergade": "B5"
    },
    "language": "English",
    "genre": "Party",
    "players": "4-8",
    "difficulty": "Medium"
  },
  {
    "name": "Scarabya",
    "locations": {
      "Vestergade": "B5"
    },
    "language": "English",
    "genre": "Abstract Strategy",
    "players": "2-4",
    "difficulty": "Easy"
  },
  {
    "name": "Taboo",
    "locations": {
      "Vestergade": "B5"
    },
    "language": "English",
    "genre": "Party",
    "players": "4+",
    "difficulty": "Easy"
  },
  {
    "name": "Det Dårlige Selskab: Ekstra Sort",
    "locations": {
      "Vestergade": "B4",
      "Aalborg": "J3",
      "Kolding": "F3"
    },
    "language": "Danish",
    "genre": "Party",
    "players": "4-20",
    "difficulty": "Easy"
  },
  {
    "name": "Det Dårlige Selskab: Året der gik galt 2022",
    "locations": {
      "Vestergade": "B4"
    },
    "language": "Danish",
    "genre": "Party",
    "players": "4-20",
    "difficulty": "Easy"
  },
  {
    "name": "Axio",
    "locations": {
      "Vestergade": "A5",
      "Kolding": "H4",
      "Fredensgade": "B1"
    },
    "language": "English",
    "genre": "Abstract Strategy",
    "players": "2",
    "difficulty": "Medium"
  },
  {
    "name": "Quoridor",
    "locations": {
      "Vestergade": "A5",
      "Fredensgade": "A1"
    },
    "language": "English",
    "genre": "Abstract Strategy",
    "players": "2-4",
    "difficulty": "Easy"
  },
  {
    "name": "Trivial Pursuit Disney Edition",
    "locations": {
      "Vestergade": "A5"
    },
    "language": "English",
    "genre": "Trivia",
    "players": "2-6",
    "difficulty": "Medium"
  },
  {
    "name": "Arboretum",
    "locations": {
      "Vestergade": "A4",
      "Aalborg": "F5"
    },
    "language": "English",
    "genre": "Card Game",
    "players": "2-4",
    "difficulty": "Medium"
  },
  {
    "name": "Fantasy Realms",
    "locations": {
      "Vestergade": "A4",
      "Aalborg": "B3"
    },
    "language": "English",
    "genre": "Card Game",
    "players": "2-6",
    "difficulty": "Easy"
  },
  {
    "name": "Pinata",
    "locations": {
      "Vestergade": "A4"
    },
    "language": "English",
    "genre": "Party",
    "players": "2-4",
    "difficulty": "Easy"
  },
  {
    "name": "Mastermind 44",
    "locations": {
      "Vestergade": "A1"
    },
    "language": "English",
    "genre": "Puzzle",
    "players": "2",
    "difficulty": "Medium"
  },
  {
    "name": "Splendor Marvel",
    "locations": {
      "Vestergade": "I4"
    },
    "language": "English",
    "genre": "Strategy",
    "players": "2-4",
    "difficulty": "Medium"
  },
  {
    "name": "Wingspan (Dansk)",
    "locations": {
      "Vestergade": "TOP"
    },
    "language": "Danish",
    "genre": "Strategy",
    "players": "1-5",
    "difficulty": "Medium"
  },
  {
    "name": "7 for the Queen",
    "locations": {
      "Vestergade": "J3"
    },
    "language": "English",
    "genre": "Strategy",
    "players": "2-4",
    "difficulty": "Medium"
  },
  {
    "name": "7 Souls",
    "locations": {
      "Vestergade": "G6"
    },
    "language": "English",
    "genre": "Strategy",
    "players": "2-4",
    "difficulty": "Hard"
  },
  {
    "name": "A Battle Through History",
    "locations": {
      "Vestergade": "B6",
      "Kolding": "H5"
    },
    "language": "English",
    "genre": "Strategy",
    "players": "2-4",
    "difficulty": "Medium"
  },
  {
    "name": "A Column of Fire",
    "locations": {
      "Vestergade": "C2"
    },
    "language": "English",
    "genre": "Strategy",
    "players": "2-4",
    "difficulty": "Medium"
  },
  {
    "name": "A war of whispers",
    "locations": {
      "Vestergade": "E5",
      "Fredensgade": "TOP"
    },
    "language": "English",
    "genre": "Strategy",
    "players": "2-6",
    "difficulty": "Medium"
  },
  {
    "name": "A-Å",
    "locations": {
      "Vestergade": "F6"
    },
    "language": "Danish",
    "genre": "Card Game",
    "players": "2-4",
    "difficulty": "Easy"
  },
  {
    "name": "Alchemists",
    "locations": {
      "Vestergade": "E4",
      "Aalborg": "H2"
    },
    "language": "English",
    "genre": "Strategy",
    "players": "2-4",
    "difficulty": "Hard"
  },
  {
    "name": "Aldabas",
    "locations": {
      "Vestergade": "H6"
    },
    "language": "English",
    "genre": "Abstract Strategy",
    "players": "2-4",
    "difficulty": "Medium"
  },
  {
    "name": "Ali Baba",
    "locations": {
      "Vestergade": "E5"
    },
    "language": "English",
    "genre": "Abstract Strategy",
    "players": "2-4",
    "difficulty": "Medium"
  },
  {
    "name": "Alias Børne",
    "locations": {
      "Vestergade": "H6"
    },
    "language": "Danish",
    "genre": "Children's Game",
    "players": "2-6",
    "difficulty": "Medium"
  }



];

const Inventory = () => {
  const [filters, setFilters] = useState({
    location: "",
    language: "",
    genre: "",
    players: "",
    difficulty: "",
    shelf: "",
    search: "", // Add search filter
  });

  const [games, setGames] = useState([]);
  const [editingGame, setEditingGame] = useState(null); // State to track the game being edited

  useEffect(() => {
    setGames(gamesData);
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleEditClick = (game) => {
    setEditingGame(game);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "shelf") {
      setEditingGame((prevGame) => ({
        ...prevGame,
        locations: {
          ...prevGame.locations,
          [filters.location]: value,
        },
      }));
    } else {
      setEditingGame((prevGame) => ({
        ...prevGame,
        [name]: value,
      }));
    }
  };

  const handleSaveClick = () => {
    setGames((prevGames) =>
      prevGames.map((game) =>
        game.name === editingGame.name ? editingGame : game
      )
    );
    setEditingGame(null);
  };

  const filteredGames = games.filter((game) => {
    return (
      (filters.location === "" || game.locations[filters.location]) &&
      (filters.language === "" || game.language === filters.language) &&
      (filters.genre === "" || game.genre === filters.genre) &&
      (filters.players === "" || game.players === filters.players) &&
      (filters.difficulty === "" || game.difficulty === filters.difficulty) &&
      (filters.shelf === "" || Object.values(game.locations).includes(filters.shelf)) &&
      (filters.search === "" || game.name.toLowerCase().includes(filters.search.toLowerCase()))
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
            <select name="location" value={filters.location} onChange={handleFilterChange}>
              <option value="">All Locations</option>
              <option value="Vestergade">Vestergade</option>
              <option value="Fredensgade">Fredensgade</option>
              <option value="Aalborg">Aalborg</option>
              <option value="Kolding">Kolding</option>
            </select>
          </div>
          <div className={styles.filterItem}>
            <FaLanguage className={styles.filterIcon} />
            <select name="language" value={filters.language} onChange={handleFilterChange}>
              <option value="">All Languages</option>
              <option value="Danish">Danish</option>
              <option value="English">English</option>
            </select>
          </div>
          <div className={styles.filterItem}>
            <FaTags className={styles.filterIcon} />
            <select name="genre" value={filters.genre} onChange={handleFilterChange}>
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
            <select name="players" value={filters.players} onChange={handleFilterChange}>
              <option value="">All Players</option>
              <option value="2">2</option>
              <option value="2-4">2-4</option>
              <option value="4+">4+</option>
            </select>
          </div>
          <div className={styles.filterItem}>
            <FaTachometerAlt className={styles.filterIcon} />
            <select name="difficulty" value={filters.difficulty} onChange={handleFilterChange}>
              <option value="">All Difficulties</option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>
          <div className={styles.filterItem}>
            <FaLayerGroup className={styles.filterIcon} />
            <select name="shelf" value={filters.shelf} onChange={handleFilterChange}>
              <option value="">All Shelves</option>
              <option value="A1">A1</option>
              <option value="B2">B2</option>
              <option value="C3">C3</option>
              <option value="D4">D4</option>
            </select>
          </div>
        </div>
        <div className={styles.gamesList}>
          {filteredGames.map((game, index) => (
            <div key={index} className={styles.gameCard}>
              {editingGame && editingGame.name === game.name ? (
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
                    name="players"
                    value={editingGame.players}
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
                    value={editingGame.locations[filters.location] || ""}
                    onChange={handleInputChange}
                  />
                  <button onClick={handleSaveClick}>Save</button>
                </div>
              ) : (
                <div>
                  <FaEdit onClick={() => handleEditClick(game)} className={styles.editIcon} />
                  <h2>{game.name}</h2>
                  <p><FaMapMarkerAlt className={styles.infoIcon} /> Location: {Object.keys(game.locations).join(", ")}</p>
                  <p><FaLanguage className={styles.infoIcon} /> Language: {game.language}</p>
                  <p><FaTags className={styles.infoIcon} /> Genre: {game.genre}</p>
                  <p><FaUsers className={styles.infoIcon} /> Players: {game.players}</p>
                  <p><FaTachometerAlt className={styles.infoIcon} /> Difficulty: {game.difficulty}</p>
                  <p><FaLayerGroup className={styles.infoIcon} /> Shelf: {Object.values(game.locations).join(", ")}</p>
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

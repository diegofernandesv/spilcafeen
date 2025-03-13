import React, { useState, useEffect } from "react";
import styles from "./ContentView.module.css"; // Import CSS Module
import Sidebar from "../components/Sidebar";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa"; // Import icons
import { database } from "../firebase"; // Import the database instance from firebase.js
import { ref, onValue, remove, update, push } from "firebase/database"; // Import Firebase Realtime Database modules

const ContentView = () => {
  const [pages, setPages] = useState([]);
  const [gameDetails, setGameDetails] = useState([]);
  const [editingItem, setEditingItem] = useState(null); // State to track the item being edited (page or game detail)
  const [isCreatingNewGame, setIsCreatingNewGame] = useState(false); // State to track if creating a new game detail
  const [newGame, setNewGame] = useState({
    title: "",
    content: "",
    imageUrl: "",
    genre: "",
    language: "",
    players: "",
  }); // State for new game detail form

  // Fetch pages and game details from Firebase
  useEffect(() => {
    const pagesRef = ref(database, 'pages');
    const gamesRef = ref(database, 'gameDetails');

    onValue(pagesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const pagesList = Object.keys(data).map(key => ({ id: key, ...data[key] }));
        setPages(pagesList);
      } else {
        setPages([]);
      }
    });

    onValue(gamesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const gamesList = Object.keys(data).map(key => ({ id: key, ...data[key] }));
        setGameDetails(gamesList);
      } else {
        setGameDetails([]);
      }
    });
  }, []);

  // Handle edit click for both pages and game details
  const handleEditClick = (item) => {
    setEditingItem(item);
  };

  // Handle input change for editing
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditingItem((prevItem) => ({
      ...prevItem,
      [name]: value,
    }));
  };

  // Handle input change for new game detail form
  const handleNewGameInputChange = (e) => {
    const { name, value } = e.target;
    setNewGame((prevGame) => ({
      ...prevGame,
      [name]: value,
    }));
  };

  // Save changes for both pages and game details
  const handleSaveClick = () => {
    const refPath = editingItem.type === 'page' ? `pages/${editingItem.id}` : `gameDetails/${editingItem.id}`;
    const itemRef = ref(database, refPath);
    update(itemRef, editingItem)
      .then(() => {
        if (editingItem.type === 'page') {
          setPages((prevPages) =>
            prevPages.map((page) =>
              page.id === editingItem.id ? editingItem : page
            )
          );
        } else {
          setGameDetails((prevGames) =>
            prevGames.map((game) =>
              game.id === editingItem.id ? editingItem : game
            )
          );
        }
        setEditingItem(null);
      })
      .catch((error) => {
        console.error("Error updating item: ", error);
      });
  };

  // Delete an item (page or game detail)
  const handleDeleteClick = (itemId, type) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      const refPath = type === 'page' ? `pages/${itemId}` : `gameDetails/${itemId}`;
      const itemRef = ref(database, refPath);
      remove(itemRef)
        .then(() => {
          if (type === 'page') {
            setPages((prevPages) => prevPages.filter((page) => page.id !== itemId));
          } else {
            setGameDetails((prevGames) => prevGames.filter((game) => game.id !== itemId));
          }
        })
        .catch((error) => {
          console.error("Error deleting item: ", error);
        });
    }
  };

  // Create a new game detail
  const handleCreateNewGame = () => {
    const gamesRef = ref(database, 'gameDetails');
    push(gamesRef, newGame)
      .then(() => {
        setNewGame({ title: "", content: "", imageUrl: "", genre: "", language: "", players: "" });
        setIsCreatingNewGame(false);
      })
      .catch((error) => {
        console.error("Error creating new game: ", error);
      });
  };

  return (
    <div className={styles.contentViewContainer}>
      <Sidebar className={styles.sidebarFullHeight} /> {/* Updated class name */}
      <div className={styles.content}>
        <h1>Website Content</h1>

        {/* Pages Section */}
        <h2>Pages</h2>
        <div className={styles.pagesList}>
          {pages.map((page, index) => (
            <div key={index} className={styles.pageCard}>
              {editingItem && editingItem.id === page.id ? (
                <div>
                  <input
                    type="text"
                    name="title"
                    value={editingItem.title}
                    onChange={handleInputChange}
                  />
                  <textarea
                    name="content"
                    value={editingItem.content}
                    onChange={handleInputChange}
                  />
                  <button onClick={handleSaveClick}>Save</button>
                </div>
              ) : (
                <div>
                  <FaEdit onClick={() => handleEditClick({ ...page, type: 'page' })} className={styles.editIcon} />
                  <FaTrash onClick={() => handleDeleteClick(page.id, 'page')} className={styles.deleteIcon} />
                  <h2>{page.title}</h2>
                  <p>{page.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Game Details Section */}
        <h2>Game Details</h2>
        <button onClick={() => setIsCreatingNewGame(!isCreatingNewGame)} className={styles.addButton}>
          <FaPlus /> {isCreatingNewGame ? "Cancel" : "Add New Game"}
        </button>
        {isCreatingNewGame && (
          <div className={styles.newGameForm}>
            <input
              type="text"
              name="title"
              placeholder="Game Title"
              value={newGame.title}
              onChange={handleNewGameInputChange}
            />
            <textarea
              name="content"
              placeholder="Game Description"
              value={newGame.content}
              onChange={handleNewGameInputChange}
            />
            <input
              type="text"
              name="imageUrl"
              placeholder="Image URL"
              value={newGame.imageUrl}
              onChange={handleNewGameInputChange}
            />
            <input
              type="text"
              name="genre"
              placeholder="Genre"
              value={newGame.genre}
              onChange={handleNewGameInputChange}
            />
            <input
              type="text"
              name="language"
              placeholder="Language"
              value={newGame.language}
              onChange={handleNewGameInputChange}
            />
            <input
              type="text"
              name="players"
              placeholder="Number of Players"
              value={newGame.players}
              onChange={handleNewGameInputChange}
            />
            <button onClick={handleCreateNewGame}>Create Game</button>
          </div>
        )}
        <div className={styles.gameDetailsList}>
          {gameDetails.map((game, index) => (
            <div key={index} className={styles.gameCard}>
              {editingItem && editingItem.id === game.id ? (
                <div>
                  <input
                    type="text"
                    name="title"
                    value={editingItem.title}
                    onChange={handleInputChange}
                  />
                  <textarea
                    name="content"
                    value={editingItem.content}
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    name="imageUrl"
                    value={editingItem.imageUrl}
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    name="genre"
                    value={editingItem.genre}
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    name="language"
                    value={editingItem.language}
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    name="players"
                    value={editingItem.players}
                    onChange={handleInputChange}
                  />
                  <button onClick={handleSaveClick}>Save</button>
                </div>
              ) : (
                <div>
                  <FaEdit onClick={() => handleEditClick({ ...game, type: 'game' })} className={styles.editIcon} />
                  <FaTrash onClick={() => handleDeleteClick(game.id, 'game')} className={styles.deleteIcon} />
                  <h2>{game.title}</h2>
                  <p>{game.content}</p>
                  <p><strong>Genre:</strong> {game.genre}</p>
                  <p><strong>Language:</strong> {game.language}</p>
                  <p><strong>Players:</strong> {game.players}</p>
                  <img src={game.imageUrl} alt={game.title} className={styles.gameImage} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentView;
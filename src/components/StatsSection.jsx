import React, { useEffect, useState } from "react";
import styles from "./Dashboard.module.css";

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
    "language": "English",
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
    "genre": "For kids",
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
    "language": "English",
    "genre": "Tile-Placement",
    "players": "2-5",
    "difficulty": "Medium"
  },
  {
    "name": "Carcassonne The City",
    "locations": {
      "Vestergade": "TOP"
    },
    "language": "English",
    "genre": "Tile-Placement",
    "players": "2-4",
    "difficulty": "Medium"
  },
  {
    "name": "Catan",
    "locations": {},
    "language": "English",
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
    "genre": "For kids",
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
    "genre": "Fantasy",
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
    "genre": "For kids",
    "players": "2-6",
    "difficulty": "Medium"
  }
];

function StatsSection() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    setGames(gamesData);
  }, []);

  const getGamesCountByLocation = (location) => {
    return games.filter((game) => game.locations[location]).length;
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

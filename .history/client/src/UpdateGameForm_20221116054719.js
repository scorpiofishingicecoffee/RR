import HomePage from "./HomePage";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const initialState = {
  name: "",
  release_date: "",
  platforms: "",
  genres: "",
};

function UpdateGameForm() {
  const [formData, setFormData] = useState(initialState);
  const [release_date, setRelease_date] = useState("");
  const [platforms, setPlatforms] = useState("");
  const [genres, setGenres] = useState("");
    const { id, name, release_date, platforms, genres } = game;
    const [games, setGames] = useState([]);

  const params = useParams();
  /*useeffect here*/
  useEffect(() => {
    getGameInfo();
  }, []);

  const getGameInfo = async () => {
    console.warn(params);
    let result = await fetch("http://127.0.0.1:3000/api/v1/games/${params.id}");
    result = await result.json();
    console.warn(result);
    setFormData(result);
    setName(result.name);
  };


  const updateGame = async () => {
    console.warn(name, release_date, platforms, genres);
  };
  return (
    <div className="UpdateCard">
      <h2>Updating the Game</h2>
      <label htmlFor="title">Name:</label>
      <br />
      <input
        type="text"
        id="name"
        value={game.name}
      />
      <br />
      <label htmlFor="notes">Release Date:</label>
      <br />
      <input
        type="text"
        id="release_date"
        value={game.release_date}

      />
      <br />
      <label htmlFor="description">Platforms: </label>
      <br />
      <input
        type="text"
        id="platforms"
        value={formData.platforms}
      />
      <br />
      <label htmlFor="rating">Genres: </label>
      <br />
      <input
        type="text"
        id="genres"
        value={formData.genres}
      />
      <br />
      <br />
      <button className="sml-btn" type="submit">
        Save
      </button>
      <br />
      <button className="sml-btn" type="submit">
        <a href="/protected">Cancel</a>
      </button>
    </div>
  );
}

export default UpdateGameForm;

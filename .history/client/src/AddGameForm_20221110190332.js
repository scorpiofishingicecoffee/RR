import React, { useState } from "react";
import Protected from "./pages/Protected.jsx";
import { useNavigate } from "react-router-dom";

const AddGameForm = (props) => {
  const navigate = useNavigate();
  const initGame = {
    id: null,
    name: "",
    releasedate: "",
    platforms: "",
    genres: "",
  };
  const [game, setGame] = useState(initGame);
  // returns the initial state value of const. indicated above
  const handleChange = (e) => {
    const { name, value } = e.target;
    setGame({ ...game, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
          alert("Game as been added!");
    navigate("/protected");
  };

  return (
    <div className="App">
      <form>
        <label>Name</label>
        <input
          className="u-full-width"
          type="text"
          value={game.name}
          name="name"
          onChange={handleChange}
        />
        <br />
        <br />

        <label>Release Date</label>
        <input
          className="u-full-width"
          type="text"
          value={game.releasedate}
          name="releasedate"
          onChange={handleChange}
        />
        <br />
        <br />

        <label>Platforms</label>
        <input
          className="u-full-width"
          type="text"
          value={game.platforms}
          name="platforms"
          onChange={handleChange}
        />
        <br />
        <label>Genres</label>
        <input
          className="u-full-width"
          type="text"
          value={game.genres}
          name="genres"
          onChange={handleChange}
        />
        <br />
        <button
          className="button-primary"
          type="submit"
          onClick={() => navigate("/protected")}
        >
          Add user
        </button>
        <a href="/protected" className="Add">
          Cancel
        </a>
      </form>
    </div>
  );
};

export default AddGameForm;

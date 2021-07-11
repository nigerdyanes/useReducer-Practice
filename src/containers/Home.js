import React, { useReducer, useEffect } from "react";
import Card from "../components/Card";

const URL = "https://rickandmortyapi.com/api/character";

const initialState = {
  characters: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_USERS":
      return {
        characters: [...action.payload]
      };
    case "DELETE_USER":
      const newCharacters = state.characters.filter(
        (character) => character.id !== action.payload
      );
      return {
        characters: [...newCharacters]
      };
    default:
      return state;
  }
};

const Home = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handlerClick = (id) => {
    dispatch({ type: "DELETE_USER", payload: id });
  };

  useEffect(() => {
    console.log("Render");
    fetch(URL)
      .then((response) => response.json())
      .then((data) => dispatch({ type: "ADD_USERS", payload: data.results }));
  }, []);

  return (
    <div className="Home">
      <h1>Home</h1>
      {state.characters.length !== 0 &&
        state.characters.map((item) => (
          <Card key={item.id} data={item} onDelete={handlerClick} />
        ))}
    </div>
  );
};

export default Home;

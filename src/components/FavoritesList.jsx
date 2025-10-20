import React from "react";
import ItemCard from "./ItemCard";
import styles from "../styles/FavoritesList.module.css";

const FavoritesList = ({ pokemons }) => {
  return (
    <div className={styles.list}>
      {pokemons.map((pokemon) => (
        <ItemCard key={pokemon.name} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default FavoritesList;

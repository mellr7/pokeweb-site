import React, { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import styles from "../styles/ItemCard.module.css";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const ItemCard = ({ pokemon }) => {
  const { favorites, toggleFavorite } = useContext(FavoritesContext);
  const isFavorite = favorites.some((p) => p.name === pokemon.name);

  return (
    <div className={`${styles.card} ${isFavorite ? styles.cardFavorite : ""}`}>
      <img src={pokemon.image} alt={pokemon.name} className={styles.img} />
      <h2 style={{ textTransform: "capitalize" }}>{pokemon.name}</h2>

      <button
        className={`${styles.button} ${isFavorite ? styles.buttonFavorite : styles.buttonNormal}`}
        onClick={() => toggleFavorite(pokemon)}
        style={{ background: "none", border: "none", cursor: "pointer" }}
      >
        {isFavorite ? (
          <AiFillHeart color="red" size={30} alt="Añadido a favoritos"/>
        ) : (
          <AiOutlineHeart color="red" size={30} alt="Añadir a favoritos" />
        )}
      </button>
    </div>
  );
};

export default ItemCard;


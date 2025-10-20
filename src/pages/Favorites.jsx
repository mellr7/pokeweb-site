import React, { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import FavoritesList from "../components/FavoritesList";
import Navbar from "../components/Navbar";
import styles from "../styles/Favorites.module.css";

const Favorites = () => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <>
    <Navbar />
    <div className={styles.container}>
      
      <h1 className={styles.title} aria-label="Colección de pokemones Favoritos">Mis favoritos</h1>
      
      {favorites.length === 0 ? (
        <p className={styles.empty}>¿Aún no tienes Pokémon en favoritos?</p>
      ) : (
        <FavoritesList pokemons={favorites} />
      )}
    </div>

    </>
  );
};

export default Favorites;

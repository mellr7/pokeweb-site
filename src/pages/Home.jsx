import React, { useEffect, useState } from "react";
import { getPokemons } from "../services/api";
import ItemCard from "../components/ItemCard";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

const Home = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPokemons(20, 0);
      setPokemons(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      {/*<h1 className={styles.title} aria-label="Lista de pokemones">PoKéMoN</h1>*/}
      <h1 className={styles.title} aria-label="Colección de pokemones">¿Ya conoces tu pokemón?</h1>
      <div className={styles.container}>
        {pokemons.map((pokemon) => (
          <ItemCard key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default Home;

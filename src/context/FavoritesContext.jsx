import React, { createContext, useState, useEffect } from "react";

// Crear el contexto
export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  // Cargar favoritos del localStorage al iniciar
  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  // Guardar favoritos en localStorage cada vez que cambien
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // Función para agregar/quitar favorito
  const toggleFavorite = (pokemon) => {
    //Clic a toggle en card
    const exists = favorites.find((p) => p.name === pokemon.name);
    if (exists) {
      // Si ya está en favs, se pueda quitar
      //(de ambas vistas inicio - favs)
      setFavorites(favorites.filter((p) => p.name !== pokemon.name));
    } else {
      // Si no está en favs, se pueda agregar
      //Crea un nuevo arreglo actualizado
      setFavorites([...favorites, pokemon]);
    }
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};


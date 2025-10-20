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
    const exists = favorites.find((p) => p.name === pokemon.name);
    if (exists) {
      // Si ya está, quitar
      setFavorites(favorites.filter((p) => p.name !== pokemon.name));
    } else {
      // Si no está, agregar
      setFavorites([...favorites, pokemon]);
    }
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};


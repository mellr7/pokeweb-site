import axios from "axios";

const BASE_URL = "https://pokeapi.co/api/v2";


export const getPokemons = async (limit = 20, offset = 0) => {
  try {
    // Lista básica nombre/url
    const response = await axios.get(`${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`);
    const pokemons = response.data.results;

    // Detalles de cada Pokémon para obtener la imagen
    const pokemonsImage = await Promise.all(
      pokemons.map(async (p) => {
        const detalles = await axios.get(p.url);
        return {
          name: p.name,
          image: detalles.data.sprites.front_default,
        };
      })
    );

    return pokemonsImage;
  } catch (error) {
    console.error("Error al obtener Pokémon:", error);
    return [];
  }
};


//Detalles completos de un Pokémon por nombre
export const getPokemonDetails = async (name) => {
  try {
    const response = await axios.get(`${BASE_URL}/pokemon/${name}`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener detalles del Pokémon:", error);
    return null;
  }
};

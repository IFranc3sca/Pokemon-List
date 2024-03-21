import axios from "axios";

const BASE_URL = "https://pokeapi.co/api/v2";

const getPokemonList = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/pokemon/?limit=20`);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching Pokemon list:", error);
    return [];
  }
};

export { getPokemonList };

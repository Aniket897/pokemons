import axios from "axios";
import pokemon from "../models/pokemon";
import { connectDB } from "../config/db";

export interface PokemonListItem {
  name: string;
  url: string;
}

export interface PokemonDetails {
  id: number;
  name: string;
  sprite: string;
  hp: string;
  attack: string;
  defence: string;
  speed: string;
  types: string[];
}

export const formatPockemonDetails = (data: any[]): PokemonDetails[] => {
  const result: PokemonDetails[] = [];
  console.log(data);
  data.forEach((item) => {
    result.push({
      id: item.id,
      hp: item.stats[0].base_stat,
      sprite: item.sprites.other.dream_world.front_default,
      name: item.name,
      attack: item.stats[1].base_stat,
      defence: item.stats[2].base_stat,
      speed: item.stats[5].base_stat,
      types: item.types.map(
        (type: { type: { name: string } }) => type.type.name
      ),
    });
  });
  return result;
};

let pageNumber = 2;
let limit = 300;

const fetchPokemonUrlList = async (): Promise<PokemonListItem[]> => {
  try {
    let offset = (pageNumber - 1) * limit;
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    );
    const results = response.data.results;
    return results;
  } catch (error) {
    console.error("Error fetching Pokemon URLs:", error);
    return [];
  }
};

const fetchPokemonDetails = async (url: string): Promise<PokemonDetails> => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(`Error fetching Pokemon details from ${url}:`, error);
    throw error;
  }
};

const main = async () => {
  await connectDB();

  const result = await fetchPokemonUrlList();

  const details = await Promise.all(
    result.map(async (pokemon) => {
      const data = await fetchPokemonDetails(pokemon.url);
      return data;
    })
  );

  const parsedDetails = formatPockemonDetails(details);

  console.log(parsedDetails);

  for (let i of parsedDetails) {
    await pokemon.create({
      name: i.name,
      sprite: i.sprite,
      types: i.types,
      hp: i.hp,
      attack: i.attack,
      defence: i.defence,
      speed: i.speed,
    });
  }
};

main();

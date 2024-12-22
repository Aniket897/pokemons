import { PokemonDetails } from "../types";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
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

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

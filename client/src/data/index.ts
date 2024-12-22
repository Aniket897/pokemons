export interface PokemonType {
  id: number;
  label: string;
  value: string;
}

export const PokemonTypes: PokemonType[] = [
  { id: 1, label: "none", value: "" },
  { id: 2, label: "normal", value: "normal" },
  { id: 3, label: "grass", value: "grass" },
  { id: 4, label: "poison", value: "poison" },
  { id: 5, label: "fire", value: "fire" },
  { id: 6, label: "flying", value: "flying" },
  { id: 7, label: "water", value: "water" },
  { id: 8, label: "bug", value: "bug" },
  { id: 9, label: "ground", value: "ground" },
  { id: 10, label: "psychic", value: "psychic" },
  { id: 11, label: "rock", value: "rock" },
];

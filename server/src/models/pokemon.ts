import mongoose from "mongoose";

const PokemonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is required"],
  },
  sprite: {
    type: String,
    required: [true, "sprite is required"],
  },
  types: [
    {
      type: String,
    },
  ],
  hp: {
    type: Number,
    required: [true, "hp is required"],
  },
  attack: {
    type: Number,
    required: [true, "attack is required"],
  },
  defence: {
    type: Number,
    required: [true, "defence is required"],
  },
  speed: {
    type: Number,
    required: [true, "speed is required"],
  },
});

export default mongoose.model("pokemon", PokemonSchema);

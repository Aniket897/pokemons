interface PokemonCardProps {
  id: number;
  name: string;
  types: string[];
  sprite: string;
}

const PokemonCard = ({ name, types, sprite }: PokemonCardProps) => {
  return (
    <div className="w-full rounded-xl capitalize bg-yellow-400 group cursor-pointer py-2 border-4 border-black">
      <div className="bg-black text-white w-fit px-3 rounded-e-full">
        <p className="text-xl">{name}</p>
      </div>
      <div className="w-full h-[180px] flex items-center justify-center">
        <img
          src={sprite}
          alt=""
          className="w-[50%] max-h-[150px] aspect-square object-contain transition-all duration-300 group-hover:scale-110"
          loading="lazy"
        />
      </div>

      <div className="flex flex-col items-center space-y-3 p-4">
        <div className="flex gap-2 text-[10px]">
          {types.map((type) => (
            <p
              className="bg-black text-white w-fil py-1 px-2 rounded-md"
              key={type}
            >
              {type}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;

const PokemonCardSkeleton = () => {
  return (
    <div className="w-full rounded-xl bg-gray-300 animate-pulse py-2 border-4 border-black">
      <div className="bg-gray-400 w-1/2 h-6 rounded-e-full mb-4"></div>
      <div className="w-full h-[180px] flex items-center justify-center bg-gray-400 rounded-md"></div>
      <div className="flex flex-col items-center space-y-3 p-4">
        <div className="flex gap-2">
          <div className="bg-gray-400 w-16 h-6 rounded-md"></div>
          <div className="bg-gray-400 w-16 h-6 rounded-md"></div>
        </div>
      </div>
    </div>
  );
};

export default PokemonCardSkeleton;

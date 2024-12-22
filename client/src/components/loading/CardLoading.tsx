import PokemonCardSkeleton from "../skeletons/PokemonCardSkeleton";

const CardLoading = () => {
  return (
    <>
      {Array.from({ length: 10 }).map((_, index) => (
        <PokemonCardSkeleton key={`skeleton-${index}`} />
      ))}
    </>
  );
};

export default CardLoading;

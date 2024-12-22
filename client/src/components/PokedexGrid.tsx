import PokemonCard from "./PokemonCard";
import useInfiniteScroll from "../hooks/useInfiniteScroll";
import { useRootState } from "../providers/root-state";
import CardLoading from "./loading/CardLoading";
import NoResult from "./NoResult";

const PokedexGrid = () => {
  const { pokemonDetails, isLoading, loadNextPage, error, totalCount } =
    useRootState();

  const { lastElementRef } = useInfiniteScroll({
    isLoading,
    onIntersect: loadNextPage,
  });

  if (!isLoading && !pokemonDetails.length) {
    return <NoResult />;
  }

  if (!isLoading && error) {
    return <div>Error Occure</div>;
  }

  return (
    <div className="space-y-6 mt-8">
      <p className="underline underline-offset-8">
        Showing {totalCount} / {pokemonDetails.length}
      </p>
      <div className="w-[90vw] mx-auto gap-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 py-8">
        {pokemonDetails.map((pokemon, index) => {
          // assigning lastElementRef to last card
          if (index + 1 == pokemonDetails.length) {
            return (
              <div
                ref={
                  index + 1 === pokemonDetails.length ? lastElementRef : null
                }
                key={pokemon.id}
              >
                <PokemonCard {...pokemon} />
              </div>
            );
          }
          return <PokemonCard {...pokemon} key={pokemon.id} />;
        })}
        {isLoading && <CardLoading />}
      </div>
    </div>
  );
};

export default PokedexGrid;

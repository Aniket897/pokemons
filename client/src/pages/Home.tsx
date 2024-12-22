import PokedexGrid from "../components/PokedexGrid";
import PokemonTypeFilter from "../components/PokemonTypeFilter";
import SearchBox from "../components/SearchBox";
import { PokemonTypes } from "../data";
import { useRootState } from "../providers/root-state";

const Home = () => {
  const { updateTypeFilter, typeFilter, sortBy, updateSortBy } = useRootState();
  return (
    <div className="md:w-[90vw] mx-auto min-h-screen">
      <div className="sticky w-full left-0 top-0 mx-auto flex flex-col-reverse md:flex-row items-start gap-3 bg-white py-4 px-4 border-b z-50">
        <PokemonTypeFilter
          availableTypes={PokemonTypes}
          selectedTypes={typeFilter}
          sortBy={sortBy}
          onSortSelect={(value: number) => updateSortBy(value)}
          onTypeSelect={(newValue) => {
            updateTypeFilter(newValue);
          }}
        />
        <SearchBox />
      </div>
      <PokedexGrid />
    </div>
  );
};

export default Home;

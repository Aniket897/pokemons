import { Search } from "lucide-react";
import { useRootState } from "../providers/root-state";

const SearchBox = () => {
  const { query, updateQuery } = useRootState();
  return (
    <div className="flex items-center h-[40px] border border-black w-[400px] max-w-[90vw] rounded-md overflow-hidden">
      <div className="bg-black text-white h-full p-1 aspect-square grid place-items-center">
        <Search size={20} />
      </div>
      <input
        type="text"
        placeholder="fitler pokemons"
        value={query}
        onChange={(e) => updateQuery(e.target.value)}
        className="border-none bg-transparent py-2 px-4 h-full flex-1 outline-none"
      />
    </div>
  );
};

export default SearchBox;

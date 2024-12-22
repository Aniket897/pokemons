import { createContext, useContext, useEffect, useState } from "react";
import { PokemonDetails } from "../types";
import axios from "../utils/axios";
import { PokemonType, PokemonTypes } from "../data";

interface RootStateContext {
  isLoading: boolean;
  query: string;
  sortBy: number;
  error: boolean;
  typeFilter: PokemonType;
  pokemonDetails: PokemonDetails[];
  totalCount: number;
  loadNextPage: () => void;
  updateQuery: (value: string) => void;
  updateTypeFilter: (index: number) => void;
  updateSortBy: (value: number) => void;
}

const LIMIT = 20;
const stateContext = createContext<RootStateContext>({} as RootStateContext);
export const useRootState = () => useContext(stateContext);

export default function RootStateProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [pokemonDetails, setPokemonDetails] = useState<PokemonDetails[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [sortBy, setSortBy] = useState(0);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [error, setError] = useState(false);
  const [totalCount, setTotalCount] = useState(0);
  const [typeFilter, setTypeFilter] = useState<PokemonType>(PokemonTypes[0]);

  useEffect(() => {
    setPage(1);
    fetchPokemons(1, LIMIT, query);
  }, [typeFilter, sortBy]);

  const fetchPokemons = async (page: number, limit: number, query: string) => {
    try {
      setIsLoading(true);
      setError(false);
      console.log("SORT BY", sortBy);
      const response = await axios.get(
        `/?page=${page}&limit=${limit}&query=${query.trim()}&sortBy=${sortBy}&type=${
          typeFilter.value
        }`
      );

      if (!response.data.pokemons.length) return;

      if (page == 1) {
        setPokemonDetails([...response.data.pokemons]);
        setTotalCount(response.data.totalCount);
        return;
      }
      setPokemonDetails((pre) => [...pre, ...response.data.pokemons]);
    } catch (error) {
      console.log(error);
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const loadNextPage = () => {
    console.log(totalCount, pokemonDetails.length);
    if (
      totalCount &&
      pokemonDetails.length &&
      totalCount <= pokemonDetails.length
    )
      return;

    console.log("LOAD NEXT PAGE CALLED");
    fetchPokemons(page + 1, LIMIT, query);
    setPage((prePageNumber) => prePageNumber + 1);
  };

  const updateQuery = (value: string) => {
    setPokemonDetails([]);
    fetchPokemons(1, LIMIT, value);
    setQuery(value);
  };

  const updateTypeFilter = (index: number) => {
    setTypeFilter(PokemonTypes[index]);
  };

  /**
   * @INFO here value is {0 : for relevance} {1 : for A to Z} {-1 : for Z to A}
   */
  const updateSortBy = (value: number) => {
    console.log("SOTING BY :", value);
    setSortBy(value);
  };

  return (
    <stateContext.Provider
      value={{
        query,
        isLoading,
        sortBy,
        pokemonDetails,
        typeFilter,
        error,
        totalCount,
        updateTypeFilter,
        updateSortBy,
        loadNextPage,
        updateQuery,
      }}
    >
      {children}
    </stateContext.Provider>
  );
}

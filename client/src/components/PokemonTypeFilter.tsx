import { ArrowRight, FilterIcon } from "lucide-react";
import { useState } from "react";
import { PokemonType } from "../data";

interface PokemonTypeFilterProps {
  availableTypes: PokemonType[];
  selectedTypes: PokemonType;
  sortBy: number;
  onSortSelect: (value: number) => void;
  onTypeSelect: (index: number) => void;
}

const SortData = [
  {
    from: "A",
    to: "Z",
    value: 1,
  },
  {
    from: "Z",
    to: "A",
    value: -1,
  },
];

const PokemonTypeFilter = ({
  availableTypes,
  selectedTypes,
  onTypeSelect,
  sortBy,
  onSortSelect,
}: PokemonTypeFilterProps) => {
  const [show, setShow] = useState(false);

  const handleToggle = () => {
    setShow((pre) => !pre);
  };
  return (
    <div className={`${show && "space-y-6"} mx-auto`}>
      <button
        onClick={handleToggle}
        className="bg-black text-white py-2 px-4 rounded-md flex items-center justify-center gap-x-3"
      >
        <FilterIcon size={15} />
        Filter
      </button>
      <div
        className={`flex flex-col gap-y-5 h-0 overflow-hidden transition-all duration-300 ${
          show && "h-[250px]"
        }`}
      >
        <div className="flex items-start flex-wrap gap-8">
          <p className="underline underline-offset-8">Filter by types </p>
          <div className="flex flex-wrap items-center gap-4">
            {availableTypes.map((type, index) =>
              type.id == selectedTypes.id ? (
                <p className="capitalize border py-1 px-3 rounded-md cursor-pointer bg-black text-white hover:border-black">
                  {type.label}
                </p>
              ) : (
                <p
                  onClick={() => onTypeSelect(index)}
                  className="capitalize border bg-neutral-50 py-1 px-3 rounded-md cursor-pointer hover:border-black"
                >
                  {type.label}
                </p>
              )
            )}
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <p className="underline underline-offset-8">Sort by </p>
          <div className="flex items-center gap-x-4">
            <p
              onClick={() => onSortSelect(0)}
              className={`flex items-center gap-x-4 capitalize border  py-1 px-3 rounded-md cursor-pointer hover:border-black ${
                sortBy == 0 ? "bg-black text-white" : "bg-neutral-50"
              }`}
            >
              None
            </p>
            {SortData.map((item) => (
              <p
                onClick={() => onSortSelect(item.value)}
                className={`flex items-center gap-x-4 capitalize border py-1 px-3 rounded-md cursor-pointer hover:border-black ${
                  sortBy == item.value
                    ? "bg-black text-white"
                    : " bg-neutral-50"
                }`}
              >
                {item.from}
                <ArrowRight size={15} />
                {item.to}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonTypeFilter;

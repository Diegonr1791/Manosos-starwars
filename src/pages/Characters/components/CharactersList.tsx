import { Pagination } from "@nextui-org/react";
import Loading from "@/components/Loading/Loading";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllCharacters } from "@/api/characters/getAllCharacters";
import SearchInput from "@/components/Search/SearchInput";
import CharacterContainer from "./CharacterContainer";
import useDebounce from "@/hooks/useDebounce";

const GET_ALL_CHARACTERS_KEY = "GET_ALL_CHARACTERS_KEY";

const CharactersList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({ search: "" });
  const debouncedSearch = useDebounce(filters.search, 500);
  const { data: charactersData, isFetching } = useQuery({
    queryKey: [
      GET_ALL_CHARACTERS_KEY,
      { ...filters, search: debouncedSearch },
      currentPage,
    ],
    queryFn: () =>
      getAllCharacters({
        pageParam: currentPage,
        filters: { ...filters, search: debouncedSearch },
      }),
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 5,
    retry: 2,
  });

  const characters = charactersData?.results || [];

  const onFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex w-full flex-col p-3">
      <div className="flex flex-col md:flex-row w-full justify-between pb-4 gap-3 ">
        <div className="flex w-full">
          <SearchInput
            name="search"
            onChange={onFilterChange}
            placeholder="Buscar personaje por nombre"
          />
        </div>
        <div className="flex justify-end">
          <Pagination
            total={charactersData?.pageCount || 10}
            initialPage={1}
            page={currentPage}
            onChange={setCurrentPage}
            isDisabled={characters.length === 0}
          />
        </div>
      </div>
      <div className="flex">
        {!isFetching ? (
          <CharacterContainer characters={characters} />
        ) : (
          <div className="flex w-full h-full items-start justify-center">
            <Loading size="lg" color="white" />
          </div>
        )}
      </div>
    </div>
  );
};

export default CharactersList;

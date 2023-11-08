import { Pagination } from "@nextui-org/react";
import Loading from "@/components/Loading/Loading";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllCharacters } from "@/api/characters/getAllCharacters";
import SearchInput from "@/components/Search/SearchInput";
import CharacterContainer from "./CharacterContainer";

const GET_ALL_CHARACTERS_KEY = "GET_ALL_CHARACTERS_KEY";

const CharactersList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({ name: "" });
  const { data: charactersData, isFetching } = useQuery({
    queryKey: [GET_ALL_CHARACTERS_KEY, filters, currentPage],
    queryFn: () => getAllCharacters({ pageParam: currentPage, filters }),
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 5,
    retry: 2,
  });
  console.log(charactersData);
  const characters = charactersData?.results || [];

  const onFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex w-full flex-col p-3">
      <div className="flex flex-col md:flex-row w-full justify-between pb-4 gap-3 ">
        <div className="flex w-full">
          <SearchInput
            onChange={onFilterChange}
            placeholder="Search character"
          />
        </div>
        <div className="flex justify-end">
          <Pagination
            total={charactersData?.pageCount || 10}
            initialPage={1}
            page={currentPage}
            onChange={setCurrentPage}
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

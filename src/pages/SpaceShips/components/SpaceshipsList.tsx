import { Pagination } from "@nextui-org/react";
import Loading from "@/components/Loading/Loading";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import SearchInput from "@/components/Search/SearchInput";
import SpaceshipContainer from "./SpaceshipContainer";
import { getAllSpaceships } from "@/api/spaceships/getAllSpaceShips";

const GET_ALL_SPACESHIPS_KEY = "GET_ALL_SPACESHIPS_KEY";

const SpaceshipsList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({ search: "" });
  const { data: spaceshipsData, isFetching } = useQuery({
    queryKey: [GET_ALL_SPACESHIPS_KEY, filters, currentPage],
    queryFn: () => getAllSpaceships({ pageParam: currentPage, filters }),
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 5,
    retry: 2,
  });

  const spaceships = spaceshipsData?.results || [];

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
            placeholder="Buscar nave por nombre o modelo"
          />
        </div>
        <div className="flex justify-end">
          <Pagination
            total={spaceshipsData?.pageCount || 10}
            initialPage={1}
            page={currentPage}
            onChange={setCurrentPage}
            isDisabled={spaceships.length === 0}
          />
        </div>
      </div>
      <div className="flex">
        {!isFetching ? (
          <SpaceshipContainer spaceships={spaceships} />
        ) : (
          <div className="flex w-full h-full items-start justify-center">
            <Loading size="lg" color="white" />
          </div>
        )}
      </div>
    </div>
  );
};

export default SpaceshipsList;

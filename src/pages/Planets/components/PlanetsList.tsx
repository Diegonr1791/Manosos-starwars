import { Pagination } from "@nextui-org/react";
import Loading from "@/components/Loading/Loading";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import SearchInput from "@/components/Search/SearchInput";
import PlanetContainer from "./PlanetContainer";
import { getAllPlanets } from "@/api/planets/getAllPlanets";

const GET_ALL_PLANETS_KEY = "GET_ALL_PLANETS_KEY";

const PlanetsList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({ name: "" });
  const { data: planetsData, isFetching } = useQuery({
    queryKey: [GET_ALL_PLANETS_KEY, filters, currentPage],
    queryFn: () => getAllPlanets({ pageParam: currentPage, filters }),
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 5,
    retry: 2,
  });

  const planets = planetsData?.results || [];

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
            placeholder="Buscar planeta"
          />
        </div>
        <div className="flex justify-end">
          <Pagination
            total={planetsData?.pageCount || 10}
            initialPage={1}
            page={currentPage}
            onChange={setCurrentPage}
            isDisabled={planets.length === 0}
          />
        </div>
      </div>
      <div className="flex pt-3">
        {!isFetching ? (
          <PlanetContainer planets={planets} />
        ) : (
          <div className="flex w-full h-full items-start justify-center">
            <Loading size="lg" color="white" />
          </div>
        )}
      </div>
    </div>
  );
};

export default PlanetsList;

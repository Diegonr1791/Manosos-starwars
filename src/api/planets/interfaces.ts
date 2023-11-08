export interface PlanetsAPI {
  count: number;
  next: string | null;
  previous: string | null;
  results: PlanetsResult[];
}

export interface PlanetsResult {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
  created: Date;
  edited: Date;
  url: string;
}

export interface PlanetsFilters {
  name: string;
}

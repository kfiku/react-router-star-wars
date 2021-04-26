import { Switch, Route, Link } from "react-router-dom";

import useFilmIdParam from "./hooks/useFilmIdParam";
import usePlanetIdParam from "./hooks/usePlanetIdParam";
import { useFetch } from "./hooks/useFetch";

export function Planets({ planets }: { planets: string[] }) {
  return (
    <div className="flex">
      <div>
        <h5>Planets list:</h5>
        <ul>
          {planets?.map((planet) => (
            <PlanetElement key={planet} id={getPlanetIdFromUrl(planet)} />
          ))}
        </ul>
      </div>
      <Switch>
        <Route path="/film/:filmId/planets/:planetId">
          <PlanetDetail />
        </Route>
      </Switch>
    </div>
  );
}

function PlanetElement({ id }: { id: string }) {
  const { filmId } = useFilmIdParam();
  const { planet, isLoading } = usePlanet(id);

  return (
    <li>
      <Link to={`/film/${filmId}/planets/${id}`}>
        {isLoading ? "..." : planet?.name}
      </Link>
    </li>
  );
}

function PlanetDetail() {
  const { planetId } = usePlanetIdParam();
  const { planet } = usePlanet(planetId);

  return (
    <div>
      <h3>{planet?.name}</h3>

      <p>Climate: {planet?.climate}</p>
      <p>Gravity: {planet?.gravity}</p>
      <p>Diameter: {planet?.diameter}</p>
    </div>
  );
}

function getPlanetIdFromUrl(url: string) {
  return url.split("planets/")[1].split("/")[0];
}

function usePlanet(id: string) {
  const { data, isLoading } = useFetch(`https://swapi.dev/api/planets/${id}/`);

  return {
    isLoading,
    planet: data,
  };
}

import React from "react";
import { useParams } from "react-router-dom";
import { Switch, Route, Link } from "react-router-dom";
import { useQuery } from "react-query";

export function Planets({ planets }) {
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
function usePlanet(id) {
  const { data, isLoading } = useQuery(`planet/${id}`, () =>
    fetch(`https://swapi.dev/api/planets/${id}`).then((res) => res.json())
  );

  return {
    isLoading,
    planet: data,
  };
}
function PlanetElement({ id }) {
  const { filmId } = useParams();
  const { planet } = usePlanet(id);

  return (
    <li>
      <Link to={`/film/${filmId}/planets/${id}`}>{planet?.name}</Link>
    </li>
  );
}
function PlanetDetail() {
  const { planetId } = useParams();
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
function getPlanetIdFromUrl(url) {
  return url.split("planets/")[1];
}

import React from "react";
import { useParams } from "react-router-dom";

import { Switch, Route, Link } from "react-router-dom";
import { useQuery } from "react-query";
import { Peoples } from "./Peoples";
import { Planets } from "./Planets";

function useFilms() {
  const { data, isLoading } = useQuery("films", () =>
    fetch("https://swapi.dev/api/films").then((res) => res.json())
  );

  return {
    isLoading,
    films: data?.results,
  };
}

export function FilmsList() {
  const { films } = useFilms();

  return (
    <div className="flex">
      <div>
        <h2>Films List:</h2>
        <ul>
          {films?.map?.((film) => (
            <FilmElement film={film} />
          ))}
        </ul>
      </div>
      <Switch>
        <Route path="/film/:filmId">
          <Film />
        </Route>
      </Switch>
    </div>
  );
}

function FilmElement({ film }) {
  return <li key={film.episode_id}>
    <Link to={`/film/${film.episode_id}`}>{film.title}</Link>
  </li>;
}

function useFilm(id) {
  const { data, isLoading } = useQuery(`film/${id}`, () =>
    fetch(`https://swapi.dev/api/films/${id}`).then((res) => res.json())
  );

  return {
    isLoading,
    film: data,
  };
}

export function Film() {
  const { filmId } = useParams();
  const { film, isLoading } = useFilm(filmId);

  if (isLoading) {
    return <div>loading</div>;
  }

  return (
    <div>
      <h2>{film.title}</h2>

      <p>Release date: {film.release_date}</p>
      <p>Director: {film.director}</p>

      <p>
        <Link to={`/film/${filmId}/peoples`}>Peoples</Link>
        {" | "}
        <Link to={`/film/${filmId}/planets`}>Planets</Link>
      </p>

      <Switch>
        <Route path="/film/:filmId/peoples">
          <Peoples peoples={film.characters.slice(0, 10)} />
        </Route>
        <Route path="/film/:filmId/planets">
          <Planets planets={film.planets.slice(0, 10)} />
        </Route>
      </Switch>
    </div>
  );
}



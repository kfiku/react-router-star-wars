import { Switch, Route, Link } from "react-router-dom";

import { Peoples } from "./Peoples";
import { Planets } from "./Planets";
import useFilmIdParam from "./hooks/useFilmIdParam";
import { useFetch } from "./hooks/useFetch";

type FilmType = Record<string, any>;

function useFilms() {
  const { data, isLoading } = useFetch("https://swapi.dev/api/films/");

  return {
    isLoading,
    films: data?.results,
  };
}

export function FilmsList() {
  const { films, isLoading } = useFilms();

  console.log("RENDER FilmsList", isLoading ? "isLoading" : "");

  if (isLoading) {
    return <div>loading</div>;
  }

  return (
    <div className="flex">
      <div>
        <h2>Films List:</h2>
        <ul>
          {films?.map?.((film: FilmType) => (
            <FilmElement key={film.episode_id} film={film} />
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

function FilmElement({ film }: { film: FilmType }) {
  return (
    <li key={film.episode_id}>
      <Link to={`/film/${film.episode_id}`}>{film.title}</Link>
    </li>
  );
}

export function Film(): JSX.Element {
  const { filmId } = useFilmIdParam();
  const { film, isLoading } = useFilm(filmId);

  console.log("RENDER FILM", filmId, isLoading ? "isLoading" : film.title);

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

function useFilm(id: string) {
  const { data, isLoading } = useFetch(`https://swapi.dev/api/films/${id}/`);

  return {
    isLoading,
    film: data,
  };
}

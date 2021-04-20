import { Switch, Route, Link } from "react-router-dom";
import useFilmIdParam from "./hooks/useFilmIdParam";
import usePeopleIdParam from "./hooks/usePeopleIdParam";
import { useFetch } from "./hooks/useFetch";
import { memo } from "react";

export function Peoples({ peoples }: { peoples: string[] }) {
  return (
    <div className="flex">
      <div>
        <h5>Peoples list:</h5>
        <ul>
          {peoples?.map((people) => (
            <PeopleElement key={people} id={getPeopleIdFromUrl(people)} />
          ))}
        </ul>
      </div>
      <Switch>
        <Route path="/film/:filmId/peoples/:peopleId">
          <PeopleDetailMemo />
        </Route>
      </Switch>
    </div>
  );
}

function usePeople(id: string) {
  const { data, isLoading } = useFetch(`https://swapi.dev/api/people/${id}/`);

  return {
    isLoading,
    people: data,
  };
}

function PeopleElement({ id }: { id: string }) {
  const { filmId } = useFilmIdParam();
  const { people, isLoading } = usePeople(id);

  return (
    <li>
      <Link to={`/film/${filmId}/peoples/${id}`}>
        {isLoading ? "..." : people?.name}
      </Link>
    </li>
  );
}

function PeopleDetail() {
  const { peopleId } = usePeopleIdParam();
  const { people, isLoading } = usePeople(peopleId);

  if (isLoading) {
    return <div>loading</div>;
  }

  return (
    <div>
      <h3>{people?.name}</h3>

      <p>Skin color: {people?.skin_color}</p>
      <p>Gender: {people?.gender}</p>
      <p>Height: {people?.height}</p>
    </div>
  );
}

const PeopleDetailMemo = memo(PeopleDetail);

function getPeopleIdFromUrl(url: string) {
  return url.split("people/")[1].split("/")[0];
}

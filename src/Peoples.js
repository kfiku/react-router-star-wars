import React from "react";
import { useParams } from "react-router-dom";
import { Switch, Route, Link } from "react-router-dom";
import { useQuery } from "react-query";

export function Peoples({ peoples }) {
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
          <PeopleDetail />
        </Route>
      </Switch>
    </div>
  );
}
function usePeople(id) {
  const { data, isLoading } = useQuery(`people/${id}`, () =>
    fetch(`https://swapi.dev/api/people/${id}`).then((res) => res.json())
  );

  return {
    isLoading,
    people: data,
  };
}
function PeopleElement({ id }) {
  const { filmId } = useParams();
  const { people } = usePeople(id);

  return (
    <li>
      <Link to={`/film/${filmId}/peoples/${id}`}>{people?.name}</Link>
    </li>
  );
}
function PeopleDetail() {
  const { peopleId } = useParams();
  const { people } = usePeople(peopleId);

  return (
    <div>
      <h3>{people?.name}</h3>

      <p>Skin color: {people?.skin_color}</p>
      <p>Gender: {people?.gender}</p>
      <p>Height: {people?.height}</p>
    </div>
  );
}

function getPeopleIdFromUrl(url) {
  return url.split("people/")[1];
}

import { useParams, useRouteMatch } from "react-router-dom";
import { shouldUseCustomHook, shouldUseRouteMatch } from "./useCustomHook";
import { useRouteMatchParams } from "./useRouteMatchParams";

function usePeopleIdParam(): { peopleId: string } {
  return useParams();
}

function usePeopleIdRouteMatch(): { peopleId: string } {
  return useRouteMatch("/film/:filmId/peoples/:peopleId")?.params as {
    peopleId: string;
  };
}

function usePeopleIdParamCustom(): { peopleId: string } {
  return useRouteMatchParams("/film/:filmId/peoples/:peopleId", [
    "peopleId",
  ]) as { peopleId: string };
}

const hook = shouldUseCustomHook()
  ? usePeopleIdParamCustom
  : shouldUseRouteMatch()
  ? usePeopleIdRouteMatch
  : usePeopleIdParam;

export default hook;

import { useParams, useRouteMatch } from "react-router-dom";
import { shouldUseCustomHook, shouldUseRouteMatch } from "./useCustomHook";
import { useRouteMatchParams } from "./useRouteParameters";

function usePlanetIdParam(): { planetId: string } {
  return useParams();
}

function usePlanetIdRouteMatch(): { planetId: string } {
  return useRouteMatch("/film/:filmId/planets/:planetId")?.params as {
    planetId: string;
  };
}

function usePlanetIdParamCustom(): { planetId: string } {
  return useRouteMatchParams("/film/:filmId/planets/:planetId", [
    "planetId",
  ]) as { planetId: string };
}

const hook = shouldUseCustomHook()
  ? usePlanetIdParamCustom
  : shouldUseRouteMatch()
  ? usePlanetIdRouteMatch
  : usePlanetIdParam;

export default hook;

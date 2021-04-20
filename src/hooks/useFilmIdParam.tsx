import { useParams, useRouteMatch } from "react-router-dom";
import { shouldUseCustomHook, shouldUseRouteMatch } from "./useCustomHook";
import { useRouteMatchParams } from "./useRouteParameters";

const useFilmIdParam = (): { filmId: string } => {
  return useParams();
};

const useFilmIdRouteMatch = (): { filmId: string } => {
  return useRouteMatch("/film/:filmId")?.params as { filmId: string };
};

const useFilmIdParamCustom = (): { filmId: string } => {
  return useRouteMatchParams("/film/:filmId") as { filmId: string };
};

const hook = shouldUseCustomHook()
  ? useFilmIdParamCustom
  : shouldUseRouteMatch()
  ? useFilmIdRouteMatch
  : useFilmIdParam;

export default hook;

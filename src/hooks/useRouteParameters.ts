import { useEffect, useState, useRef } from "react";
import { matchPath, useHistory, match } from "react-router-dom";
import { Location } from "history";

export type Parameters = Record<string, string>;

export function useRouteMatchParams(
  route: string,
  parameters?: string[]
): Parameters {
  const history = useHistory();
  const parametersRef = useRef<Parameters>({});
  const initialParameters = getParameters(history.location, route, parameters);
  const [currentParameters, setCurrentParameters] = useState(initialParameters);

  useEffect(() => {
    const unListen = history.listen((location) => {
      const newParameters = getParameters(location, route, parameters);

      if (parametersHasChanged(newParameters, parametersRef.current)) {
        parametersRef.current = newParameters;
        setCurrentParameters(newParameters);
      }
    });
    return () => unListen();
  }, [history, parametersRef, setCurrentParameters, parameters, route]);

  return currentParameters;
}

function getParameters(
  location: Location<unknown>,
  route: string,
  parameters?: string[]
): Parameters {
  const matched: match<Parameters> | null = matchPath<Parameters>(
    location.pathname,
    {
      path: route,
    }
  );

  const params =
    parameters || (matched?.params ? Object.keys(matched.params) : []);

  const matchedParameters = params.reduce(
    (accumulator: Parameters, parameter): Parameters => {
      const matchedParameter = matched?.params?.[parameter];
      if (matchedParameter) {
        const newAcc = { ...accumulator, [parameter]: matchedParameter };

        return newAcc;
      }

      return accumulator;
    },
    {}
  );

  return matchedParameters;
}

function parametersHasChanged(
  newParameters: Parameters,
  oldParameters: Parameters
): boolean {
  const newParametersKeys = Object.keys(newParameters);
  const oldParametersKeys = Object.keys(oldParameters);

  if (newParametersKeys.length !== oldParametersKeys.length) {
    return true;
  }

  const diff = newParametersKeys.filter((parameter) => {
    return newParameters[parameter] !== oldParameters?.[parameter];
  });

  return diff.length > 0;
}

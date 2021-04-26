import { useEffect, useState, useRef } from 'react';
import { Location } from 'history';
import { matchPath, useHistory } from 'react-router-dom';

export type Params = Record<string, string>;

export function useRouteMatchParams<TParams extends Params>(route: string, parameters?: string[]): TParams {
  const history = useHistory();
  const initialParameters = getParams<TParams>(history.location.pathname, route, parameters);
  const parametersRef = useRef<TParams>(initialParameters);
  const [currentParams, setCurrentParams] = useState(initialParameters);

  useEffect(() => {
    const unsubscribe = history.listen((location: Location): void => {
      const newParameters = getParams<TParams>(location.pathname, route, parameters);

      if (parametersHasChanged(newParameters, parametersRef.current)) {
        parametersRef.current = newParameters;
        setCurrentParams(newParameters);
      }
    });

    return () => unsubscribe();
  }, [history, parametersRef, setCurrentParams, parameters, route]);

  return currentParams;
}

function getParams<TParams extends Params>(pathname: string, route: string, parameters?: string[]): TParams {
  const matched = matchPath<TParams>(pathname, route);
  const params = parameters || (matched ? Object.keys(matched.params) : []);

  return params.reduce((accumulator: TParams, parameter: string): TParams => {
    const matchedParameter = matched?.params[parameter];

    if (matchedParameter) {
      return Object.assign(accumulator, { [parameter]: matchedParameter });
    }

    return accumulator;
  }, {} as TParams);
}

function parametersHasChanged(newParams: Params, oldParams: Params): boolean {
  const newParamsKeys = Object.keys(newParams);
  const oldParamsKeys = Object.keys(oldParams);

  if (newParamsKeys.length !== oldParamsKeys.length) {
    return true;
  }

  return newParamsKeys.some((parameter: string) => newParams[parameter] !== oldParams[parameter]);
}

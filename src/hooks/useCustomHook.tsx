export function shouldUseCustomHook(): boolean {
  return localStorage.getItem("hookType") === "useRouteMatchParams";
}

export function shouldUseRouteMatch(): boolean {
  return localStorage.getItem("hookType") === "useRouteMatch";
}

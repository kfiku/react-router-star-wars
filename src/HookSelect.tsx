import React, { useState } from "react";

export function HookSelect() {
  const initialValue = localStorage.getItem("hookType") || "useParams";
  const [value, setValue] = useState<string>(initialValue);

  function onChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const newValue = event.target.value;
    setValue(newValue);
    localStorage.setItem("hookType", newValue);

    window.location.href = "/";
  }

  return (
    <div>
      <label>Select type of hook: </label>
      <select onChange={onChange} value={value}>
        <option value="useParams">React Router useParams</option>
        <option value="useRouteMatch">React Router useRouteMatch</option>
        <option value="useRouteMatchParams">Custom useRouteMatchParams</option>
      </select>
      <hr />
    </div>
  );
}

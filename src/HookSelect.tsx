import React, { useState } from "react";

export function HookSelect() {
  const initialValue = localStorage.getItem("hookType") || "useParams";
  const [value, setValue] = useState<string>(initialValue);

  function onChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const newValue = event.target.value;
    setValue(newValue);
    localStorage.setItem("hookType", newValue);

    window.location.reload();
  }

  return (
    <div>
      <p>
        <label>Select type of hook: </label>

        <select onChange={onChange} value={value}>
          <option value="useParams">React Router useParams</option>
          <option value="useRouteMatch">React Router useRouteMatch</option>
          <option value="useRouteMatchParams">Custom useRouteMatchParams</option>
        </select>
      </p>

      <HookPreview value={value} />
    </div>
  );
}

function HookPreview({ value }: { value: string }) {
  switch (value) {
    case 'useParams':
      return (
        <pre>
          <code>
            {'const { filmId } = useParams();'}
          </code>
        </pre>
      );

    case 'useRouteMatch':
      return (
        <pre>
          <code>
            {'const { filmId } = useRouteMatch("/film/:filmId")?.params;'}
          </code>
        </pre>
      );

    case 'useRouteMatchParams':
      return (
        <pre>
          <code>
            {'const { filmId } = useRouteMatchParams("/film/:filmId");'}
          </code>
        </pre>
      );

    default:
      return <span></span>;
  }
}

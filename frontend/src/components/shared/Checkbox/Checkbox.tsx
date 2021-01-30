import React, { ReactElement } from "react";

interface Props {
  label: string;
  value: string;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void | undefined;
}

export default function Checkbox({
  label,
  value,
  name,
  onChange
}: Props): ReactElement {
  return (
    <label>
      {label}
      <input name={name} type="checkbox" value={value} onChange={onChange} />
    </label>
  );
}

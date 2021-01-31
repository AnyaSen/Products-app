import React, { ReactElement } from "react";

import Styles from "./Checkbox.module.scss";

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
    <label className={Styles.Checkbox}>
      <input name={name} type="checkbox" value={value} onChange={onChange} />
      {label}
    </label>
  );
}

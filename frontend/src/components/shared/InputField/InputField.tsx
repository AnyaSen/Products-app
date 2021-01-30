import React, { ReactElement } from "react";

import Styles from "./InputField.module.scss";

type Props = {
  placeholder: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void | undefined;
  type?: string;
};

export default function InputField({
  placeholder,
  name,
  value,
  onChange,
  type
}: Props): ReactElement {
  return (
    <div className={Styles.InputFieldContainer}>
      <input
        className={Styles.InputField}
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        autoComplete="off"
      />
    </div>
  );
}

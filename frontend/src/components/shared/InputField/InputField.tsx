import React, { ReactElement } from "react";

import Styles from "./InputField.module.scss";

type Props = {
  placeholder: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void | undefined;
  type?: string;
  small?: boolean;
};

export default function InputField({
  placeholder,
  name,
  value,
  onChange,
  type,
  small
}: Props): ReactElement {
  return (
    <div className={Styles.InputFieldContainer}>
      <input
        className={small ? Styles.InputFieldSmall : Styles.InputField}
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

import React, { ReactElement } from "react";

import Styles from "./TextArea.module.scss";

interface Props {
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void | undefined;
}

export default function TextArea({
  placeholder,
  value,
  onChange
}: Props): ReactElement {
  return (
    <textarea
      placeholder={placeholder}
      className={Styles.TextArea}
      onChange={onChange}
      value={value}
    />
  );
}

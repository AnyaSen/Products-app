import React, { ReactElement } from "react";

import Styles from "./TextArea.module.scss";
import RequiredStatusSubtext from "../RequiredStatusSubtext";

interface Props {
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void | undefined;
  required?: boolean;
}

export default function TextArea({
  placeholder,
  value,
  onChange,
  required
}: Props): ReactElement {
  return (
    <div className={Styles.TextAreaContainer}>
      <textarea
        placeholder={placeholder}
        className={Styles.TextArea}
        onChange={onChange}
        value={value}
      />
      <RequiredStatusSubtext required={required} />
    </div>
  );
}

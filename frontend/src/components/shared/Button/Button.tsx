import React, { ReactElement } from "react";

import Styles from "./Button.module.scss";

interface Props {
  text: string;
  filled?: boolean;
  onClick?: () => void;
}

export default function Button({ text, onClick, filled }: Props): ReactElement {
  return (
    <button
      className={filled ? Styles.ButtonFilled : Styles.Button}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

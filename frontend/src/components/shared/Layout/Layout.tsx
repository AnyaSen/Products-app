import React, { ReactElement } from "react";

import Styles from "./Layout.module.scss";

interface Props {
  children: React.ReactNode;
  gray?: boolean;
}

export default function Layout({ children, gray }: Props): ReactElement {
  return (
    <div className={gray ? Styles.GrayLayout : Styles.Layout}>{children}</div>
  );
}

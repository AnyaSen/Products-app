import React, { ReactElement } from "react";

import Styles from "./RequiredStatusSubtext.module.scss";

interface Props {
  required?: boolean;
}

export default function RequiredStatusSubtext({
  required
}: Props): ReactElement {
  return (
    <p className={Styles.RequiredStatusSubtext}>
      {required ? "*Required" : "*Optional"}
    </p>
  );
}

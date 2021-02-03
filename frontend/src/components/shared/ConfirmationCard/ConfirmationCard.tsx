import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

import Styles from "./ConfirmationCard.module.scss";
import Button from "../Button";

interface Props {
  onClickYes: () => void;
  onClickNo: () => void;
  onClickYesLinkTo?: string;
  text: string;
  confirmationCardRef?: React.MutableRefObject<HTMLInputElement>;
}

export default function ConfirmationCard({
  onClickYes,
  onClickNo,
  onClickYesLinkTo,
  confirmationCardRef,
  text
}: Props): ReactElement {
  return (
    <div className={Styles.ConfirmationCard} ref={confirmationCardRef}>
      <p>{text}</p>

      <div>
        {onClickYesLinkTo ? (
          <Link to={onClickYesLinkTo}>
            <Button text="Yes" onClick={onClickYes} />
          </Link>
        ) : (
          <Button text="Yes" onClick={onClickYes} />
        )}

        <Button text="No" onClick={onClickNo} filled />
      </div>
    </div>
  );
}

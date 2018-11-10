import React from "react";
import classNames from "classnames";
import styles from "./dialog.module.css";

type OverlayProps = {
  transparent?: boolean;
  onClick?: () => void;
};
export const Overlay: React.SFC<OverlayProps> = ({
  children,
  transparent = false,
  onClick
}) => (
  <div
    className={classNames(styles.overlay, {
      [styles.overlayColoured]: !transparent
    })}
    onClick={onClick}
  >
    {children}
  </div>
);

type DialogWindowButtonProps = {
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
};
const DialogWindowButton: React.SFC<DialogWindowButtonProps> = ({
  onClick
}) => (
  <div className={styles.dialogWindowButton} onClick={onClick}>
    X
  </div>
);

const handleClickNoOp: React.EventHandler<React.MouseEvent> = e => {
  e.preventDefault();
  e.stopPropagation();
};

type DialogWindowProps = {
  onCloseRequested?: () => void;
};
const DialogWindow: React.SFC<DialogWindowProps> = ({
  children,
  onCloseRequested
}) => (
  <div className={styles.dialogWindow} onClick={handleClickNoOp}>
    {onCloseRequested != null && (
      <DialogWindowButton onClick={onCloseRequested} />
    )}
    {children}
  </div>
);

type DialogProps = {
  transparent?: boolean;
  show?: boolean;
  onCloseRequested?: () => void;
};
const Dialog: React.SFC<DialogProps> = ({
  children,
  show = false,
  transparent,
  onCloseRequested
}) =>
  show ? (
    <Overlay transparent={transparent} onClick={onCloseRequested}>
      <DialogWindow onCloseRequested={onCloseRequested}>
        {children}
      </DialogWindow>
    </Overlay>
  ) : null;

export default Dialog;

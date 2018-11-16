import React from "react";
import styles from "./overlay.module.css";

type OverlayProps = {
  backgroundColor?: string;
  onClick?: () => void;
};
export const Overlay: React.SFC<OverlayProps> = ({
  children,
  backgroundColor,
  ...props
}) => (
  <div
    className={styles.overlay}
    style={backgroundColor ? { backgroundColor } : {}}
    {...props}
  >
    {children}
  </div>
);

export default Overlay;

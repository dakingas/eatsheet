import React from "react";

const unselectableStyle: React.CSSProperties = {
  pointerEvents: "none",
  userSelect: "none"
};

const Unselectable: React.SFC = ({ children }) => (
  <div style={unselectableStyle}>{children}</div>
);

export default Unselectable;

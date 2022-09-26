import React from "react";

function Overlay(prop) {
  var styles = {
    width: 100 + "vw",
    height: 100 + "vh",
    zIndex: 10,
    opacity: 0.5,
    backgroundColor: "black",
    position: "fixed",
  };
  return (
    <div
      id="overlay"
      style={styles}
      hidden={prop.hidden}
      onClick={prop.onClick}
    ></div>
  );
}

export default Overlay;

//By Jeff Shoji & Jason Kalili
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

function Star({ filled }) {
  return (
    <FontAwesome
      name={filled === true ? "star" : "star-o"}
      color="#4c4c4c"
      size={32}
      style={{ marginHorizontal: 6 }}
    />
  );
}

export default Star;

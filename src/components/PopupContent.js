import React, { useContext } from "react";
import { mapContext } from "../context/mapContext";

export default function PopupContent({ label }) {
  const { click } = useContext(mapContext);

  return (
    <div>
      <div>hello {label}</div>
      <button onClick={click}>click me</button>
    </div>
  );
}

import React from "react";
import { Html, useProgress } from "@react-three/drei";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPercentage } from "@fortawesome/free-solid-svg-icons";
import { faPercent } from "@fortawesome/free-solid-svg-icons/faPercent";

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html className="flex flex-col items-center justify-center">
      <span className="canvas-load"></span>
      <p
        style={{
          fontSize: 60,
          color: "black",
          fontWeight: 800,
          marginTop: -40,
          marginRight: "50%",
        }}
        className="font-ppformula flex items-center gap-4"
      >
        {progress}
        <FontAwesomeIcon icon={faPercentage} />
      </p>
      <p
        style={{
          marginRight: "50%",
        }}
      >
        Loading
      </p>
    </Html>
  );
};

export default Loader;

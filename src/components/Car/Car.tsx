import React, { useState, useEffect } from "react";
import View3D from "@egjs/react-view3d";
import "@egjs/react-view3d/css/view3d-bundle.min.css";
import "./car.css";

const CarModel = () => {
  const [annotations, setAnnotations] = useState([
    { name: "back_left_door", position: "30 35 -50", focus: "0.3 0.1 0.05" },
    { name: "back_bumper", position: "40 30 -80", focus: "-0.5 0.05 -0.3" },
    { name: "front_bumper", position: "30 30 35", focus: "0.3 0 0.5" },
    { name: "front_left_door", position: "30 35 -10", focus: "0 0.3 0.25" },
    { name: "hood", position: "0 40 30", focus: "0 0.3 0.25" },
    { name: "back_right_door", position: "-30 35 -50", focus: "0.3 0.1 0.05" },
    { name: "front_right_door", position: "-30 35 -10", focus: "0 0.3 0.25" },
    { name: "trunk", position: "0 45 -120", focus: "0 0.3 0.25" },
    { name: "front_door", position: "30 35 -10", focus: "0 0.3 0.25" },
    { name: "back_door", position: "30 35 -50", focus: "0.3 0.1 0.05" },
  ]);
  const [activeParts, setActiveParts] = useState([
    "Fog Lights", "Radiator", "Wheel", "Side Mirrors", "Front Bumper",
    "Roof", "Back Fender"
  ]);
  useEffect(() => {
    setTimeout(() => {
      setAnnotations((prevAnnotations) =>
        prevAnnotations.map((annotation) =>
          annotation.name === "Fog Lights"
            ? {
                ...annotation,
                position: "0.3 0.2 0.4", 
                focus: "0.3 0.2 0.1",
              }
            : annotation
        )
      );
    }, 3000);
  }, []);

  const handle = (name) => {
    localStorage.setItem('point', name);
    console.log(name)
  }

  return (
    <div className="car-model">
      <View3D
        src="/red_car.glb"
        tag="div"
        className="view3d-container"
        onReady={() => console.log("3D Model Loaded")}
        onLoadError={(e) => console.error("Error loading 3D model:", e)}
      >
        {/* Аннотации */}
        <div className="view3d-annotation-wrapper">
        {annotations
            .filter((annotation) => activeParts.includes(annotation.name)) 
            .map((annotation, index) => (
            <div
              key={index}
              className="view3d-annotation default"
              data-position={annotation.position}
              data-focus={annotation.focus}
              data-duration="500"
            >
              <div className="view3d-annotation-tooltip default" onClick={() => handle(annotation.name)}>
                {annotation.name}
              </div>
            </div>
          ))}
        </div>
      </View3D>
    </div>
  );
};

export default CarModel;

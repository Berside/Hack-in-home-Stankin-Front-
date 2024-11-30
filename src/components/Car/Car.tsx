import React, { useState, useEffect } from "react";
import View3D from "@egjs/react-view3d";
import "@egjs/react-view3d/css/view3d-bundle.min.css";
import "./car.css";

const CarModel = () => {
  const [annotations, setAnnotations] = useState([
    { name: "Fog Lights", position: "25 30 50", focus: "0.2 0 0" },
    { name: "Radiator", position: "0 30 60", focus: "0 0.1 0.3" },
    { name: "Front Mirrors", position: "30 45 -10", focus: "0.2 0.1 0.1" },
    { name: "back door", position: "30 35 -50", focus: "0.3 0.1 0.05" },
    { name: "Roof", position: "0 70 -20", focus: "0.4 0.15 0.05" },
    { name: "Wheel", position: "40 20 30", focus: "0.5 0.05 0.3" },
    { name: "Side Mirrors", position: "30 45 -50", focus: "0.6 0.3 0.05" },
    { name: "Back Fender", position: "40 30 -80", focus: "-0.5 0.05 -0.3" },
    { name: "Front Bumper", position: "30 30 35", focus: "0.3 0 0.5" },
    { name: "front door", position: "30 35 -10", focus: "0 0.3 0.25" },
    { name: "windshield", position: "0 50 0", focus: "0 0.3 0.25" },
  ]);

  useEffect(() => {
    setTimeout(() => {
      setAnnotations((prevAnnotations) => 
        prevAnnotations.map((annotation) => ({
          ...annotation,
          position: annotation.name === "Fog Lights" ? "0.3 0.2 0.4" : annotation.position,
          focus: annotation.name === "Fog Lights" ? "0.3 0.2 0.1" : annotation.focus,
        }))
      );
    }, 3000);
  }, []);

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
          {annotations.map((annotation, index) => (
            <div
              key={index}
              className="view3d-annotation default"
              data-position={annotation.position}
              data-focus={annotation.focus}
              data-duration="500"
            >
              <div className="view3d-annotation-tooltip default">
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

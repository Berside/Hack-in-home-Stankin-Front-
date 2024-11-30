import React from "react";
import View3D from "@egjs/react-view3d";
import "@egjs/react-view3d/css/view3d-bundle.min.css";
import "./car.css";

const CarModel = () => {
  return (
    <div className="car-model">
      <View3D
        src="/red_car.glb"
        tag="div"
        className="view3d-square"
        onReady={() => console.log("3D Model Loaded")}
        onLoadError={(e) => console.error("Error loading 3D model:", e)}
      />
    </div>
  );
};

export default CarModel;

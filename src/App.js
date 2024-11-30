import React from "react";
import Description from "./components/information/Information.tsx";
import PhotoUpload from "./components/Image/Image.tsx";
import CalculationForm from "./components/Calculate/Calculate.tsx"; 
import CarModel from "./components/Car/Car.tsx";
import Header from "./components/header/header.tsx";
import "./App.css"
function App() {
  return (
    <div className="App">
      <Header />
      <Description />
      <div className="Content">
        <PhotoUpload />
        <CalculationForm />
      </div>
      <CarModel />
    </div>
  );
}

export default App;

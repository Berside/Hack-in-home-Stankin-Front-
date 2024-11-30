import React, { useState } from "react";
import "./calculate.css";

const CalculationForm: React.FC = () => {
  const [selectedParts, setSelectedParts] = useState<string[]>([]);
  const [areas, setAreas] = useState<{ [key: string]: number }>({});
  const [percentage, setPercentage] = useState<number>(0);
  const [result, setResult] = useState<number>(0);

  const parts = [
    { id: "door", name: "Дверь", image: "door.png" },
    { id: "hood", name: "Капот", image: "hood.png" },
    { id: "bumper", name: "Бампер", image: "bumper.png" },
    { id: "roof", name: "Крыша", image: "roof.png" },
  ];

  const handlePartsChange = (id: string) => {
    setSelectedParts((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((part) => part !== id)
        : [...prevSelected, id]
    );
  };

  const handleAreaChange = (part: string, value: number) => {
    setAreas((prevAreas) => ({ ...prevAreas, [part]: value }));
  };

  const handlePercentageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(event.target.value) || 0;
    setPercentage(value);
  };

  const handleCalculate = () => {
    const baseCostPerSquareMeter = 1000;
    const totalArea = selectedParts.reduce(
      (sum, part) => sum + (areas[part] || 0),
      0
    );
    const calculatedCost = (percentage / 100) * baseCostPerSquareMeter * totalArea;
    setResult(calculatedCost);
  };

  return (
    <div className="calculation-container">
      <h1 className="calculation-title">Расчет стоимости</h1>
      <form className="calculation-form" onSubmit={(e) => e.preventDefault()}>
        <div className="parts-container">
          {parts.map((part) => (
            <div
              key={part.id}
              className={`part-card ${
                selectedParts.includes(part.id) ? "selected" : ""
              }`}
              onClick={() => handlePartsChange(part.id)}
            >
              <img src={part.image} alt={part.name} className="part-image" />
              <span>{part.name}</span>
            </div>
          ))}
        </div>

        {selectedParts.map((part) => (
          <div key={part} className="input-group">
            <label htmlFor={`area-${part}`}>Площадь {part} (м²):</label>
            <input type="number" id={`area-${part}`} name={`area-${part}`} min="0" value={areas[part] || ""} onChange={(e) => handleAreaChange(part, parseFloat(e.target.value) || 0)} />
          </div>
        ))}

        <div className="input-group">
          <label htmlFor="percentage">Процент окраски:</label>
          <input type="number" id="percentage"name="percentage"min="0"max="100"value={percentage}onChange={handlePercentageChange}/>
        </div>

        <button type="button" className="calculate-button" onClick={handleCalculate}>Рассчитать</button>

        <p className="result">
          Итог: <span>{result.toFixed(2)} ₽</span>
        </p>
      </form>
    </div>
  );
};

export default CalculationForm;

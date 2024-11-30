import React, { useState, useEffect } from "react";
import "./calculate.css";

const CalculationForm: React.FC = () => {
  const [selectedParts, setSelectedParts] = useState<string[]>([]);
  const [areas, setAreas] = useState<{ [key: string]: number }>({});
  const [percentage, setPercentage] = useState<number>(0);
  const [result, setResult] = useState<number>(0);
      const [heightTorch, setheightTorch] = useState('');
    const [Vylet, setVylet] = useState('');
    const [Sloi, setSloi] = useState('');
    const [Rasxod, setRasxod] = useState('');
    const [Trydo, setTrydo] = useState('');
    const [Cost, setCost] = useState('');
    const [Norma, setNorma] = useState('');
let parts = [
    { id: "door", name: "Дверь"},
    { id: "hood", name: "Капот"},
    { id: "bumper", name: "Бампер"},
    { id: "roof", name: "Крыша"},
  ];
  const storedValue = localStorage.getItem('point');
  console.log(storedValue);
  const a = [
    {id: storedValue ?? '', name: storedValue ?? ''}
  ];
  parts.push(...a);
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
    const b = heightTorch + Vylet;
    const A = (totalArea * Number(b)) ** Number(Sloi);
    const c =  (A / Number(Rasxod) * Number(Rasxod) ) * Number(Cost);
    const calculatedCost = (percentage / 100) * baseCostPerSquareMeter * totalArea;

    const ob = (percentage / 100 ) * (totalArea) /  Number(heightTorch);
    const ll = ob *  (100 - Number(Rasxod)) * Number(Sloi);
    const Stoi = ll * Number(Cost) / 100;


    const st = (percentage / 100) * totalArea;
    const ab = st / Number(Rasxod);
    const sum = ab * Number(Cost);
    setResult(sum );
  };
  return (
    <div className="calculation-container">
      <h1 className="calculation-title">Расчет стоимости</h1>
      <form className="calculation-form" onSubmit={(e) => e.preventDefault()}>
        <div className="parts-container">
          {parts.map((part) => (
            <div key={part.id}className={`part-card ${ selectedParts.includes(part.id) ? "selected" : ""}`}onClick={() => handlePartsChange(part.id)}>
              <span>{part.name}</span>
            </div>
          ))}
        </div>

        {selectedParts.map((part) => (
          <div key={part} className="input-group">
            <label htmlFor={`area-${part}`}>Площадь {part} (м²):</label>
            <input type="number" id={`area-${part}`} name={`area-${part}`} value={areas[part] || ""} onChange={(e) => handleAreaChange(part, parseFloat(e.target.value) || 0)} />
          </div>
        ))}

        <div className="input-group">
          <label htmlFor="percentage">Процент окраски:</label>
          <input type="number" id="percentage"name="percentage"value={percentage}onChange={handlePercentageChange}/>
          <label htmlFor="percentage">Ширина факела:</label>
          <input type="number" id="percentage"name="percentage" value={heightTorch} onChange={(e) => setheightTorch(e.target.value)} />
          <label htmlFor="percentage">Вылет факела за границы элемента при одном проходе:</label>
          <input type="number" id="percentage"name="percentage" value={Vylet} onChange={(e) => setVylet(e.target.value)}/>
          <label htmlFor="percentage">Количество слоев:</label>
          <input type="number" id="percentage"name="percentage" value={Sloi} onChange={(e) => setSloi(e.target.value)}/>
          <label htmlFor="percentage">Расход ЛКМ 1-го слоя на 1м2:</label>
          <input type="number" id="percentage"name="percentage" value={Rasxod} onChange={(e) => setRasxod(e.target.value)} />
          <label htmlFor="percentage">Стоимость 1л ЛКМ</label>
          <input type="number" id="percentage"name="percentage"  value={Cost} onChange={(e) => setCost(e.target.value)}/>
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

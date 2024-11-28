"use client";

import React, { useState } from "react";
import "./Dashboard.css";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

type DataItem = {
  name: string;
  value: number;
};

type Data = {
  [key: string]: DataItem[];
};

const Dashboard = () => {
  const [activeFilter, setActiveFilter] = useState<string>("Todo");

  const data: Data = {
    Desayuno: [
      { name: "Desayuno Americano", value: 8.2 },
      { name: "Hot Cakes", value: 7.4 },
      { name: "Pan Dulce", value: 8.0 },
      { name: "Cereales", value: 7.0 },
      { name: "Jugo de Naranja", value: 6.0 },
    ],
    Almuerzo: [
      { name: "Piquemacho", value: 5.3 },
      { name: "Pampaku", value: 7.2 },
      { name: "Silpancho", value: 7.3 },
      { name: "Conejo Falso", value: 6.7 },
      { name: "Chicharrón", value: 5.4 },
    ],
    Cena: [
      { name: "Pizza", value: 5.2 },
      { name: "Pollo Frito", value: 7.0 },
      { name: "Hamburguesa", value: 8.0 },
      { name: "Espagueti", value: 7.7 },
      { name: "Papas a la Francesa", value: 3.4 },
    ],
    Todo: [
      { name: "Desayuno Americano", value: 8.2 },
      { name: "Hot Cakes", value: 7.4 },
      { name: "Pan Dulce", value: 8.0 },
      { name: "Cereales", value: 7.0 },
      { name: "Jugo de Naranja", value: 6.0 },
      { name: "Piquemacho", value: 5.3 },
      { name: "Pampaku", value: 7.2 },
      { name: "Silpancho", value: 7.3 },
      { name: "Conejo Falso", value: 6.7 },
      { name: "Chicharrón", value: 5.4 },
      { name: "Pizza", value: 5.2 },
      { name: "Pollo Frito", value: 7.0 },
      { name: "Hamburguesa", value: 8.0 },
      { name: "Espagueti", value: 7.7 },
      { name: "Papas a la Francesa", value: 3.4 },
    ],
  };

  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#A28F6A",
    "#D16D92",
    "#55B7B0",
    "#FF9999",
    "#AA66CC",
    "#FF4444",
    "#99CC00",
    "#33B5E5",
    "#9933CC",
    "#FF8800",
    "#FF4444",
  ];

  const currentData = data[activeFilter] || [];
  const totalPedidos = currentData.reduce((acc: number, item: DataItem) => acc + item.value, 0).toFixed(2);
  const platoPopular = currentData.reduce(
    (prev: DataItem, current: DataItem) => (prev.value > current.value ? prev : current),
    currentData[0]
  );
  const platoMenosPopular = currentData.reduce(
    (prev: DataItem, current: DataItem) => (prev.value < current.value ? prev : current),
    currentData[0]
  );

  return (
    <div className="dashboard">
      <div className="info-container">
        <h2>Dashboard de Predicción de Demanda</h2>
        <div className="filter-buttons">
          {["Desayuno", "Almuerzo", "Cena", "Todo"].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={activeFilter === filter ? "active" : ""}
            >
              {filter}
            </button>
          ))}
        </div>
        <div>
          <p>Total de pedidos: {totalPedidos}</p>
          <p>Plato más popular: {platoPopular?.name}</p>
          <p>Plato menos popular: {platoMenosPopular?.name}</p>
        </div>
      </div>
      <div className="chart-container">
        <PieChart width={400} height={400}>
          <Pie
            data={currentData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={150}
            fill="#8884d8"
            label
          >
            {currentData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>
    </div>
  );
};

export default Dashboard;

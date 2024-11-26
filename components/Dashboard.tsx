"use client";

import React, { useState } from "react";
import "./Dashboard.css";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const Dashboard = () => {
  const [prediction, setPrediction] = useState<number | null>(null);

  const data = [
    { name: "Pizza", value: 50 },
    { name: "Piquemacho", value: 30 },
    { name: "Hot Cakes", value: 20 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

  const handlePredict = async () => {
    const response = await fetch("/api/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        features: [1, 0, 0, 1, 0],
      }),
    });

    const data = await response.json();
    setPrediction(data.prediccion);
  };

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>

      <button onClick={handlePredict} className="predict-button">
        Obtener Predicción
      </button>
      {prediction !== null && (
        <p style={{ margin: 0, fontWeight: "bold", fontSize: "16px" }}>
          Predicción: {prediction}
        </p>
      )}

      <div className="chart-container">
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            label
          >
            {data.map((entry, index) => (
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

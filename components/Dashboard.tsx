"use client";

import React, { useState, useRef } from "react";
import "./Dashboard.css";
import { PieChart, Pie, Cell, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from "recharts";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

type DataItem = {
  name: string;
  value: number;
};

type Data = {
  [key: string]: DataItem[];
};

const Dashboard = () => {
  const [activeFilter, setActiveFilter] = useState<string>("Todo");
  const barChartRef = useRef<HTMLDivElement>(null);
  const pieChartRef = useRef<HTMLDivElement>(null);

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

  const generateReportPDF = async () => {
    const doc = new jsPDF();

    // Agregar texto básico al PDF
    doc.text("Reporte de Predicción de Demanda", 10, 10);
    doc.text(`Total de pedidos: ${totalPedidos}`, 10, 20);
    doc.text(`Plato más popular: ${platoPopular.name} (${platoPopular.value})`, 10, 30);
    doc.text(`Plato menos popular: ${platoMenosPopular.name} (${platoMenosPopular.value})`, 10, 40);

    // Capturar gráfica de barras
    if (barChartRef.current) {
      const barChartCanvas = await html2canvas(barChartRef.current);
      const barChartImg = barChartCanvas.toDataURL("image/png");
      doc.addImage(barChartImg, "PNG", 10, 50, 180, 90); // Ajusta las coordenadas y el tamaño
    }

    // Capturar gráfica de pastel
    if (pieChartRef.current) {
      const pieChartCanvas = await html2canvas(pieChartRef.current);
      const pieChartImg = pieChartCanvas.toDataURL("image/png");
      doc.addImage(pieChartImg, "PNG", 10, 150, 180, 90); // Ajusta las coordenadas y el tamaño
    }

    // Descargar el PDF
    doc.save("reporte_platos.pdf");
  };

  return (
    <div className="dashboard">
      <div className="info-bar-container">
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
            <p>Plato más popular: {platoPopular?.name} ({platoPopular?.value})</p>
            <p>Plato menos popular: {platoMenosPopular?.name} ({platoMenosPopular?.value})</p>
          </div>
          <button className="report-button" onClick={generateReportPDF}>
            Generar Reporte
          </button>
        </div>
        <div className="bar-chart" ref={barChartRef}>
          <BarChart
            width={500}
            height={300}
            data={currentData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#82ca9d" background={{ fill: "#eee" }}>
              {currentData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={
                    entry.name === platoPopular.name
                      ? "#FF5733"
                      : entry.name === platoMenosPopular.name
                      ? "#C70039"
                      : "#82ca9d"
                  }
                />
              ))}
            </Bar>
          </BarChart>
        </div>
      </div>
      <div className="pie-chart" ref={pieChartRef}>
        <PieChart width={600} height={400}>
          <Pie
            data={currentData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={150}
            fill="#8884d8"
            label={({ name, value }) => `${name}: ${value}`}
            labelLine={true}
          >
            {currentData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={
                  entry.name === platoPopular.name
                    ? "#FF5733"
                    : entry.name === platoMenosPopular.name
                    ? "#C70039"
                    : COLORS[index % COLORS.length]
                }
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>
    </div>
  );
};

export default Dashboard;

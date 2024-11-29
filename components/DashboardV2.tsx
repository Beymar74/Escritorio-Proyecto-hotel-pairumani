import React, { useEffect, useState } from 'react';
// React: Biblioteca para construir interfaces de usuario.
// useEffect: Hook que permite ejecutar código después de renderizar el componente.
// useState: Hook para manejar estados en un componente funcional.

const Dashboard: React.FC = () => {
  // Estado para almacenar la distribución de la demanda.
  const [distribution, setDistribution] = useState<{ [key: string]: number } | null>(null);

  // Estado para almacenar el resultado de la predicción.
  const [prediction, setPrediction] = useState<number | null>(null);

  // Hook useEffect para cargar los datos de distribución al montar el componente.
  useEffect(() => {
    fetch('http://127.0.0.1:5000/distribution') // Realiza una solicitud GET al endpoint del backend.
      .then((response) => response.json()) // Convierte la respuesta en JSON.
      .then((data) => {
        setDistribution(data.distribution); // Almacena los datos de distribución en el estado.
      })
      .catch((error) => console.error('Error al cargar distribución:', error)); // Maneja errores en la solicitud.
  }, []); // El array vacío [] asegura que el efecto se ejecute solo una vez al montar.

  // Función para obtener la predicción llamando al endpoint del backend.
  const getPrediction = () => {
    // Datos enviados al backend para generar la predicción.
    const requestData = {
      'Día de la Semana': 'Lunes',
      Temporada: 'Alta',
      'Tipo de Comida': 'Cena',
      'Nombre del Plato': 'Pizza',
    };

    fetch('http://127.0.0.1:5000/predict', {
      method: 'POST', // Tipo de solicitud HTTP.
      headers: {
        'Content-Type': 'application/json', // Especifica que el cuerpo de la solicitud es JSON.
      },
      body: JSON.stringify(requestData), // Convierte los datos en formato JSON para enviarlos al backend.
    })
      .then((response) => response.json()) // Convierte la respuesta en JSON.
      .then((data) => {
        setPrediction(data.prediction[0]); // Almacena la predicción en el estado.
      })
      .catch((error) => console.error('Error al obtener predicción:', error)); // Maneja errores en la solicitud.
  };

  return (
    <div>
      <h1>Dashboard de Demanda de Platos</h1>

      {/* Gráfica de distribución */}
      <div>
        <h2>Distribución de la Demanda</h2>
        {distribution ? (
          // Renderiza una gráfica de barras representando la distribución.
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            {Object.entries(distribution).map(([plato, cantidad]) => (
              <div key={plato} style={{ textAlign: 'center' }}>
                <div
                  style={{
                    height: `${cantidad}px`, // La altura de cada barra depende de la cantidad.
                    width: '50px',
                    backgroundColor: 'teal', // Color de las barras.
                    margin: '0 auto',
                  }}
                ></div>
                <p>{plato}</p> {/* Nombre del plato */}
                <p>{cantidad}</p> {/* Cantidad total */}
              </div>
            ))}
          </div>
        ) : (
          <p>Cargando datos de la gráfica...</p> // Mensaje mientras se cargan los datos.
        )}
      </div>

      {/* Botón para predicción */}
      <div>
        <h2>Predicción del Modelo</h2>
        {prediction !== null ? (
          <p>Predicción: {prediction}</p> // Muestra la predicción si está disponible.
        ) : (
          <button onClick={getPrediction}>Generar Predicción</button> // Botón para generar una predicción.
        )}
      </div>
    </div>
  );
};

export default Dashboard;
// Exporta el componente para usarlo en otras partes del proyecto.

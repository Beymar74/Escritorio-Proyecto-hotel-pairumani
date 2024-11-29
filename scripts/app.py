from flask import Flask, jsonify, request
# Flask: Biblioteca para crear aplicaciones web en Python.
# jsonify: Convierte datos Python a formato JSON para enviarlos como respuesta.
# request: Permite manejar datos enviados desde el cliente (por ejemplo, solicitudes POST).

import joblib
# joblib: Carga y guarda modelos previamente entrenados.

import pandas as pd
# pandas: Manejo y análisis de datos tabulares como DataFrames.

# Crear la aplicación Flask
app = Flask(__name__)

# Cargar el modelo previamente entrenado
model = joblib.load('modelo_prediccion.pkl')  
# 'modelo_prediccion.pkl' es el archivo que contiene el modelo entrenado, cargado para realizar predicciones.

# Cargar el dataset como base de datos
dataset_path = 'scripts/Dataset_de_Demanda_de_Platos.csv'
try:
    df = pd.read_csv(dataset_path)
    # El dataset es cargado desde un archivo CSV para usarlo en el endpoint `/distribution`.
except FileNotFoundError:
    raise Exception(f"No se encontró el archivo {dataset_path}. Asegúrate de que exista en la ubicación especificada.")

# Endpoint para la predicción basada en el modelo entrenado
@app.route('/predict', methods=['POST'])
def predict():
    """
    Este endpoint maneja solicitudes POST para generar predicciones basadas en el modelo entrenado.
    """
    try:
        data = request.json  # Datos enviados desde el cliente en formato JSON.
        df_input = pd.DataFrame([data])  # Convertir los datos a un DataFrame para el modelo.
        prediction = model.predict(df_input)  # Realizar la predicción con el modelo cargado.
        response = {
            'message': 'Predicción generada con éxito.',
            'prediction': prediction.tolist()  # Convertir la predicción a una lista para enviar en JSON.
        }
        return jsonify(response)  # Enviar la respuesta al cliente en formato JSON.
    except Exception as e:
        # Manejar errores y devolver un mensaje al cliente.
        return jsonify({'error': str(e)}), 400

# Endpoint para obtener la distribución de la demanda
@app.route('/distribution', methods=['GET'])
def distribution():
    """
    Este endpoint maneja solicitudes GET para devolver la distribución de la demanda por plato.
    """
    try:
        # Agrupar los datos por el nombre del plato y sumar las cantidades pedidas.
        demanda_por_plato = df.groupby('Nombre del Plato')['Cantidad Pedida'].sum().to_dict()
        response = {
            'message': 'Distribución de la demanda generada con éxito.',
            'distribution': demanda_por_plato  # Datos listos para visualización en el frontend.
        }
        return jsonify(response)  # Enviar la respuesta al cliente en formato JSON.
    except Exception as e:
        # Manejar errores y devolver un mensaje al cliente.
        return jsonify({'error': str(e)}), 400

# Iniciar el servidor
if __name__ == '__main__':
    # Ejecuta la aplicación Flask en modo de depuración para facilitar el desarrollo.
    app.run(debug=True)

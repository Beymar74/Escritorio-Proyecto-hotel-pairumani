import joblib
import numpy as np
import sys
import json

# Cargar el modelo entrenado y las columnas de entrenamiento
model = joblib.load("scripts/modelo_prediccion.pkl")
columnas = joblib.load("scripts/columnas_entrenamiento.pkl")

def predict(features):
    # Asegúrate de que las características coincidan con las columnas de entrenamiento
    input_features = np.zeros(len(columnas))
    for i, value in enumerate(features):
        input_features[i] = value

    # Realiza la predicción
    prediction = model.predict([input_features])[0]
    return prediction

if __name__ == "__main__":
    # Leer las características desde los argumentos (como JSON)
    features = json.loads(sys.argv[1])
    prediction = predict(features)
    print(f"Predicción: {prediction}")

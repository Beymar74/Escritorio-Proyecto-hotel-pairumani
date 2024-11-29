import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_squared_error
import pickle

# Cargar el dataset
dataset_path = "Dataset_de_Demanda_de_Platos.csv"
data = pd.read_csv(dataset_path)

# Mostrar las primeras filas del dataset (simulación de exploración)
print("Dataset cargado correctamente:")
print(data.head())

# Variables independientes (X) y dependientes (y)
X = data.drop("Cantidad Pedida", axis=1)  #
y = data["Cantidad Pedida"]

# División en conjuntos de entrenamiento y prueba
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Crear y entrenar el modelo
modelo = RandomForestRegressor(n_estimators=100, random_state=42)
modelo.fit(X_train, y_train)

# Evaluar el modelo
predicciones = modelo.predict(X_test)
mse = mean_squared_error(y_test, predicciones)
print(f"Error cuadrático medio (MSE): {mse:.2f}")

# Guardar el modelo entrenado en un archivo .pkl
modelo_path = "modelo_prediccion.pkl"
with open(modelo_path, "wb") as file:
    pickle.dump(modelo, file)

print(f"Modelo entrenado guardado como {modelo_path}")

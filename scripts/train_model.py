import joblib
from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import train_test_split
import pandas as pd
import numpy as np

# Simulación de datos (puedes ajustarlo según tus necesidades reales)
data = {
    'Día de la Semana': np.random.choice(['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'], 500),
    'Temporada': np.random.choice(['Alta', 'Media', 'Baja'], 500),
    'Tipo de Comida': np.random.choice(['Desayuno', 'Almuerzo', 'Cena'], 500),
    'Nombre del Plato': np.random.choice(['Piquemacho', 'Pizza', 'Hot Cakes'], 500),
    'Cantidad Pedida': np.random.randint(5, 50, 500)
}
df = pd.DataFrame(data)

# Convertir columnas categóricas a variables dummies
df_encoded = pd.get_dummies(df.drop('Cantidad Pedida', axis=1))
X = df_encoded
y = df['Cantidad Pedida']

# Dividir en entrenamiento y prueba
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Entrenar el modelo
model = RandomForestRegressor(random_state=42)
model.fit(X_train, y_train)

# Guardar el modelo entrenado
joblib.dump(model, 'scripts/modelo_prediccion.pkl')  # Guardar el modelo en la carpeta scripts
print("Modelo guardado como 'scripts/modelo_prediccion.pkl'")

# Guardar las columnas usadas en el entrenamiento
joblib.dump(X_train.columns.tolist(), 'scripts/columnas_entrenamiento.pkl')
print("Columnas usadas en el entrenamiento guardadas en 'scripts/columnas_entrenamiento.pkl'")

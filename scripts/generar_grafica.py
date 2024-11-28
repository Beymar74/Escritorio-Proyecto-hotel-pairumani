import pandas as pd
import matplotlib.pyplot as plt

# Cargar el dataset
df = pd.read_csv('scripts/Dataset_de_Demanda_de_Platos.csv')

# Agrupar los datos por el nombre del plato y sumar las cantidades pedidas
demanda_por_plato = df.groupby('Nombre del Plato')['Cantidad Pedida'].sum()

# Crear la gráfica de pastel
plt.figure(figsize=(8, 8))
plt.pie(
    demanda_por_plato,
    labels=demanda_por_plato.index,
    autopct='%1.1f%%',
    startangle=90,
    colors=plt.cm.tab20.colors
)

plt.title('Distribución de la Demanda por Plato')
plt.axis('equal')  # Asegura que el gráfico sea circular
plt.tight_layout()

# Guardar la gráfica como archivo o mostrarla
plt.savefig('distribucion_demanda_platos.png')  # Opcional: guarda como imagen
plt.show()

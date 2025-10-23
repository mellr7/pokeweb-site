# ★ PokeWeb - site ★ 

Aplicación web para explorar y coleccionar Pokémon de forma interactiva.
_________________

### ۵ Descripción

PokeWeb es una app desarrollada en React y Vite que permite a los usuarios:

- Explorar la lista completa de Pokémon.

- Marca Pokémon como favoritos para guardarlos en tu lista personal.
______________

### ۵ Instalación --->

Clona el repositorio e instala las dependencias:

```
git clone https://github.com/mellr7/pokeweb-site.git
cd pokeweb-site
npm install
npm run dev
```

**✰Abre: http://localhost:5173 en tu navegador.✰**

____________________

### 🌐 Tecnologías

- React + Vite – Framework y entorno de desarrollo rápido.

- React Router DOM – Manejo de rutas y navegación entre vistas.

- JavaScript (ES6+) – Lenguaje principal del proyecto.

- CSS – Estilos personalizados de la aplicación.

- Axios – Consumo de la API de Pokémon.

- Context API (FavoritesContext, ScoreContext) – Manejo del estado global.

____________________

### ۵ Estructura del Proyecto
src/

│── components/      # Componentes reutilizables 

│── context/         # Contextos para manejo de estado global

│── pages/           # Vistas principales

│── api/             # Funciones para consumir la API de Pokémon

│── App.jsx

│── main.jsx

public/

│── index.html

_______________________

### ۵ Funcionalidades

- ItemCard: muestra cada Pokémon.

- FavoritesContext: permite agregar o remover Pokémon de favoritos.

- Axios: maneja las llamadas a la API de Pokémon con async/await.

______________

۵ Licencia

MIT License © 2025

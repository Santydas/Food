//Importacion de librerias declaradas en el package.json
//Estas dos importaciones siempre son obligatorias
import React from 'react';
import ReactDOM from 'react-dom';

//Importacion de un objeto que se llama app y que viene del archivo App.js
//esta importacion tambien siempre es obligatoria
import App from ',/App';

//Se importa vital para el manejo de la optimizacion de la app
//Esta es opcional
import reportWebVitals from './reportWebVitals';

//Este objeto siempre se coloca en el index de una App con react
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

    <React.StrictMode>

    <App/>


    </React.StrictMode>

)
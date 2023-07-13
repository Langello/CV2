import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const contento = process.env.PUBLIC_URL + '/contento.ico';
const triste = process.env.PUBLIC_URL + '/triste.ico';


let titulo = document.title;
window.addEventListener("blur", () => {
    document.title = "Vuelve";
    document.querySelector('link[rel="icon"]').href = triste;
});
window.addEventListener("focus" , () => {
    document.title=titulo;
    document.querySelector('link[rel="icon"]').href = contento;
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);



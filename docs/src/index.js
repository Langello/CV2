import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
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
let articulosVisibles = {
    educacion: false,
    experienciaLaboral: false,
    idiomas: false,
    sobreMi: false
  };
  
export function mostrarOcultarArticulo(articulo) {
    const icon = document.getElementById(`icon${articulo}`);
    const article = document.getElementById(`${articulo}Article`);
  
    articulosVisibles[articulo] = !articulosVisibles[articulo];
  
    if (articulosVisibles[articulo]) {
      article.style.display = "inline";
      icon.classList.remove("fa-arrow-down");
      icon.classList.remove("fa-beat");
      icon.classList.add("fa-arrow-up");
    } else {
      article.style.display = "none";
      icon.classList.remove("fa-arrow-up");
      icon.classList.add("fa-arrow-down");
      icon.classList.add("fa-beat");
    }
  }



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);



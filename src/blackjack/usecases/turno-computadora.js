//tipos de comentarios personalizados better-comments
/**
 * tipos de comentarios personalizados better-comments
 * * important informacion
 * ! cuidado
 * ? duda
 * TODO: tarea
 */

import { pedirCarta, valorCarta, crearCarta } from "./";

//referencias del HTML
//forma no recomendable por que se esta acoplando el codigo ,es mejor pasarlos como parametros
// const divCartasComputadora = document.querySelector("#computadora-cartas");
// const puntosHTML = document.querySelectorAll("small");
// let puntosComputadora = 0;
/**
 *
 * @param {number} puntosMinimos
 * @param {Array<string>} deck
 * @param {HTMLElement} divCartasComputadora
 * @param {HTMLElement} puntosHTML
 */
export const turnoComputadora = (
  puntosMinimos,
  deck,
  divCartasComputadora,
  puntosHTML,
  ruta
) => {
  console.log(puntosMinimos);
  if (!puntosMinimos) {
    throw "Se requieren los puntos mínimos";
  }
  if (!deck) {
    throw "Se requiere el deck";
  }

  let puntosComputadora = 0;

  do {
    const carta = pedirCarta(deck);

    puntosComputadora = puntosComputadora + valorCarta(carta);
    puntosHTML[1].innerText = puntosComputadora;

    // <img class="carta" src="assets/cartas/2C.png">
    //todo crear carta
    const imgCarta = crearCarta(carta, ruta);
    divCartasComputadora.append(imgCarta);

    if (puntosMinimos > 21) {
      break;
    }
  } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);

  setTimeout(() => {
    if (puntosComputadora === puntosMinimos) {
      alert("Nadie gana :(");
    } else if (puntosMinimos > 21) {
      alert("Computadora gana");
    } else if (puntosComputadora > 21) {
      alert("Jugador Gana");
    } else {
      alert("Computadora Gana");
    }
  }, 300);
};

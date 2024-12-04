/**
 *
 * @param {string} carta
 * @param {string} ruta
 * @returns {HTMLImageElement} imgCarta
 * @example
 * crearCarta('3H','assets/cartas/')
 */
export const crearCarta = (carta, ruta) => {
  if (!carta) {
    throw "Se requiere la carta";
  }
  if (!ruta) {
    throw "Se requiere la ruta";
  }
  const imgCarta = document.createElement("img");
  imgCarta.src = `${ruta}${carta}.png`; //3H, JD
  imgCarta.classList.add("carta");
  return imgCarta;
};

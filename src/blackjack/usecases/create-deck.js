import _ from "underscore";

/**
 * función que crea un deck de cartas
 * @param {array<string>} tiposDeCarta // ejem: ['C', 'D', 'H', 'S']
 * @param {array<string>} tiposEspeciales //ejem: ['A', 'J', 'Q', 'K']
 * @returns {array<string>} deck de cartas
 
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {
  if (!tiposDeCarta || !tiposEspeciales) {
    throw "Se requieren los tipos de carta y los tipos especiales";
  }
  if (tiposDeCarta.length === 0 || tiposEspeciales.length === 0) {
    throw "Los tipos de carta y los tipos especiales no pueden estar vacíos";
  }

  let deck = [];

  for (let i = 2; i <= 10; i++) {
    for (let tipo of tiposDeCarta) {
      deck.push(i + tipo);
    }
  }

  for (let tipo of tiposDeCarta) {
    for (let esp of tiposEspeciales) {
      deck.push(esp + tipo);
    }
  }
  // console.log( deck );
  deck = _.shuffle(deck);
  // console.log(deck);
  return deck;
};

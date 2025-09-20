// 1. Tipăriți toate numerele pare de la 0 la 10

// Încercați să rezolvați această problemă cât mai eficient posibil. Luați în considerare utilizarea buclelor care vă permiteți să tastați
// cele mai multe caractere / comenzi (se acceptă orice abordare bazată pe bucle).
// Deși ați putea pur și simplu să tipăriți numerele par, fiți creativi și încercați să le generați într-un mod în care să funcționeze indiferent de limită setată
// (până la 10 sau chiar până la 10.000).

let numerePare = [];

for (let i = 0; i <= 10; i++) {
  if (i % 2 === 0) {
    numerePare.push(i);
  }
}

console.log(numerePare);

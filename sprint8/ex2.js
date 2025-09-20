// 2. Calculați suma numerelor dintr-un șir de numere

// Vă puteți crea propriul șir de numere, dar luați în considerare să încercați această problemă cu câteva seturi diferite pentru a vă verifica soluția.
// De asemenea, puteți încerca să utilizați matrice de lungimi diferite.
// Exemplu 1:

// Input: [1, -5, 20, -34, 16, 29, 36, -4]
// Output: 59

// Exemplu 2:
// Input: [3.45, -2.68, 356, -75.96, 64, 19.28]
// Output: 364.09000000000003

function calculeazaSuma(sir) {
  let suma = 0;

  for (let i = 0; i < sir.length; i++) {
    suma += sir[i];
  }

  return suma;
}
// Exemplu 1
let sir1 = [1, -5, 20, -34, 16, 29, 36, -4];
console.log("Suma sir1 este:", calculeazaSuma(sir1));

// Exemplu 2
let sir2 = [3.45, -2.68, 356, -75.96, 64, 19.28];
console.log("Suma sir2 este:", calculeazaSuma(sir2));

// Exemplu 3
let sir3 = [5, 222, -40, 27.5, 133];
console.log("Suma sir3 este:", calculeazaSuma(sir3));

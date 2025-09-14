/*Folosind instrucțiunea JavaScript switch se va obține ziua săptămânii.

Veți crea o funcție care va returna un șir de caractere (string) care va reprezenta numele unei zile a săptămânii în raport cu numărul acesteia pe parcursul unei săptămâni.

Exemplu 1:

Input: 1

Output: “Luni”

Exemplu 2:

Input: 5

Output: “Vineri”

Deschide un PR(pull request) cu soluția ta, încarcă link-ul folosind Text reply.*/

function ziSaptamana(numar) {
  switch (numar) {
    case 1:
      return "Luni";
    case 2:
      return "Marți";
    case 3:
      return "Miercuri";
    case 4:
      return "Joi";
    case 5:
      return "Vineri";
    case 6:
      return "Sâmbătă";
    case 7:
      return "Duminică";
    default:
      return "Introdu un număr valid (1 pentru Luni, 7 pentru Duminică).";
  }
}

console.log(ziSaptamana(1));
console.log(ziSaptamana(5));

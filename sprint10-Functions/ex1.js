// Scrieți o funcție care returnează pătratul unui număr
// Funcția findSquare(num) returnează pătratul numărului primit ca date de intrare (este transmis ca argument în apelul funcției).

// Exemplu 1:
// Input: num = 6
// Output: 36

//Exemplu 2:
// Input: num = 0
// Output: 0

// Exemplu 3:
// Input: num = -12
// Output: 144

function findSquare(num) {
  const square = num * num;
  console.log("Pătratul numărului " + num + " este: " + square);
  return square;
}

findSquare(6);
findSquare(0);
findSquare(-12);

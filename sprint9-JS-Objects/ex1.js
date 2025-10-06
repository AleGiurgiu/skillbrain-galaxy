// Scrieți o funcție care creează un obiect pentru a păstra informații despre rețeta ta preferată
// Ar trebui să aibă proprietăți pentru titlu (un șir de caractere), porții (un număr) și ingrediente (o șir de elemente - array). Va fi afișată pe rânduri separate
// (o instrucțiune console.log pentru fiecare) toate informațiile obiectului după crearea acestuia.

// Exemplu 1:
// Input: titlu = “Pizza”, portii = 3, ingrediente = [“sunca”, “cas”, “ketchup”]
// Output: { titlu: “Pizza”, portii: 3, ingrediente: [”sunca”, “cas”, “ketchup”] }

function creeazaReteta(titlu, portii, ingrediente) {
  const reteta = {
    titlu: titlu,
    portii: portii,
    ingrediente: ingrediente,
  };

  console.log("Titlu: " + reteta.titlu);
  console.log("Porții: " + reteta.portii);
  console.log("Ingrediente:");

  reteta.ingrediente.forEach(function (ingredient) {
    console.log("- " + ingredient);
  });

  // Separator vizual între rețete
  console.log("---------------");

  return reteta;
}

// Apel 1
creeazaReteta("Pizza", 3, ["sunca", "cas", "ketchup"]);

// Apel 2
creeazaReteta("Ciorbă de legume", 4, ["morcovi", "cartofi", "ardei", "ceapă"]);

// Apel 3
creeazaReteta("Clătite", 2, ["făină", "lapte", "ouă", "zahăr", "ulei"]);

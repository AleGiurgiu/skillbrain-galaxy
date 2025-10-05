// Scrieți o funcție pentru a găsi numărul de apariții al unei litere într-un șir Funcția letterCount() returnează numărul apariții al unei
//  litere trimise ca parametru dintr-un șir dat.
// Exemplu 1:
// Input: sir = “Îmi place programarea” litera = “a”
// Output: 4

// Exemplu 2:
// Input: sir = “Vreau să lucrez în IT”, litera = “r”
// Output: 2

// Notă: Nu se ține cont de scrierea cu majuscule sau minuscule.
// Litera A și litera a trebuie numărate la calcularea numărului de apariții pentru A sau pentru a.

function letterCount(sir, litera) {
  let text = sir.toLowerCase();
  let target = litera.toLowerCase();

  let count = 0;

  for (let i = 0; i < text.length; i++) {
    if (text[i] === target) {
      count++;
    }
  }

  console.log("Litera '" + litera + "' apare de " + count + ' ori în șirul: "' + sir + '"');
  return count;
}

letterCount("Îmi place programarea", "a");
letterCount("Vreau să lucrez în IT", "r");
letterCount("Învăț JavaScript cu entuziasm", "t");

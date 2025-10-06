// Creați un șir de obiecte în care fiecare obiect descrie o carte și are proprietăți precum titlu (un șir de caractere - string), autor (un șir de caractere - string) și
// esteCitită (un boolean care indică dacă ați citit-o).

// Scrieți o funcție care:

// Iterează prin gama de cărți. Pentru fiecare carte se afișează titlul și autorul cărții astfel: “Hobbitul de J.R.R. Tolkien”.
// Utilizează o instrucțiune if / else ce modifică rezultatul, în funcție de faptul că ați citit-o sau nu. Dacă cartea a fost citită, se afișează cu ajutorul functiei console.log un mesaj de tipul “Ai citit deja “Hobbitul” de J.R.R. Tolkien”, iar dacă nu, se afișează un mesaj de tipul “Trebuie să citești “Hobbitul” de J.R.R. Tolkien”.
// Exemplu 1:

// Input: [ { titlu: "Carte 1", autor: "Autor 1", esteCitita: true }, { titlu: "Carte 2", autor: "Autor 2", esteCitita: false }, ];

// Output:

// “Carte 1 de Autor 1”
// ”Ai citit deja “Carte 1” de Autor 1”
// ”Carte 2 de Autor 2”
// ”Trebuie sa citesti “Carte 2” de Autor 2”

const carti = [
  { titlu: "Micul Prinț", autor: "Antoine de Saint-Exupéry", esteCitita: true },
  { titlu: "Toate pânzele sus!", autor: "Radu Tudoran", esteCitita: false },
  { titlu: "Ion", autor: "Liviu Rebreanu", esteCitita: true },
];

function afiseazaCarti(listaCarti) {
  listaCarti.forEach(function (carte) {
    console.log(carte.titlu + " de " + carte.autor);

    if (carte.esteCitita) {
      console.log(`Ai citit deja: “${carte.titlu}” de ${carte.autor}`);
    } else {
      console.log(`Trebuie să citești: “${carte.titlu}” de ${carte.autor}`);
    }
  });
}

afiseazaCarti(carti);

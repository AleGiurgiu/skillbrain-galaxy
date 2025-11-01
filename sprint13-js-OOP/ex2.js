// Definește încă o clasa numita MasinaDeCurse.
// Această clasă va moșteni clasa Masina definita la exercițiul 1, folosind cuvantul cheie extends si va avea un constructor in care se va apela super() (adica superconstructorul).
// MasinaDeCurse va avea o metoda suplimentara numita participaLaCampionat, metoda ce va primi un parametru numit pozitiaInCampionat (un numar).
// Metoda va afisa “Am castigat locul ” urmat de valoarea parametrului pozitiaInCampionat.
// Metoda va verifica daca pozitiaInCampionat este un numar mai mare ca 0, iar in cazul in care numarul este mai mic sau egal cu 0, se va afisa mesajul “Nu am castigat niciun premiu”.

// Ex:

// const m1 = new MasinaDeCurse("Toyota", "Turbo", "Rosu", 100000);
// m1.participaLaCampionat(30);
// //Va afisa mesajul: Am castigat locul 30

// m1.participaLaCampionat(-1);
// //Va afisa mesajul: Nu am castigat niciun premiu
// La final defineste o functie in care sa instantiezi doua masini de curse, prima va paricipa la campionat si va castiga locul 2,
// iar a doua nu va participa la campionat(folosind metoda definita). De asemenea afiseaza proprietatiile masinilor ca si la exercitiul anterior.

class Masina {
  constructor(marca, model, culoare, kilometraj) {
    this.marca = marca;
    this.model = model;
    this.culoare = culoare;
    this.kilometraj = kilometraj;
  }

  getProprietati() {
    return `Masina [marca=${this.marca}, model=${this.model}, culoare=${this.culoare}, kilometraj=${this.kilometraj}]`;
  }
}

function main() {
  const masina1 = new Masina("Volvo", "XC-60", "Negru", 234_000);
  const masina2 = new Masina("Mazda", "CX-5", "Verde", 111_000);
  const masina3 = new Masina("Dacia", "BIGGSTER", "Albastru", 20_000);

  console.log(masina1.getProprietati());
  console.log(masina2.getProprietati());
  console.log(masina3.getProprietati());
}

class MasinaDeCurse extends Masina {
  constructor(marca, model, culoare, kilometraj, vitezaMaxima, echipa) {
    super(marca, model, culoare, kilometraj);
    this.vitezaMaxima = vitezaMaxima;
    this.echipa = echipa;
  }

  participaLaCampionat(pozitiaInCampionat) {
    if (pozitiaInCampionat > 0) {
      console.log(`Am castigat locul ${pozitiaInCampionat}`);
    } else {
      console.log("Nu am castigat nici un premiu.");
    }
  }
}

function mainMasinaDeCurse() {
  const m1 = new MasinaDeCurse("Ferrari", "SF-24", "Rosu", 50_000, 360, "Scuderia Ferrari");
  const m2 = new MasinaDeCurse("Porsche", "963", "Verde", 40_000, 330, "Team Porsche");

  console.log(m1.getProprietati());
  m1.participaLaCampionat(2);

  console.log(m2.getProprietati());
  m2.participaLaCampionat(0);
}

main();
console.log("---Masini de curse---");
mainMasinaDeCurse();

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

  afiseazaProprietati() {
    console.log(`Masina [marca=${this.marca}, model=${this.model}, culoare=${this.culoare}, kilometraj=${this.kilometraj}]`);
  }
}

class MasinaDeCurse extends Masina {
  constructor(marca, model, culoare, kilometraj) {
    super(marca, model, culoare, kilometraj);
  }

  participaLaCampionat(pozitiaInCampionat) {
    if (pozitiaInCampionat > 0) {
      console.log(`Am castigat locul ${pozitiaInCampionat}!`);
    } else {
      console.log("Nu am castigat niciun premiu!");
    }
  }
}

function mainMasinaDeCurse() {
  const m1 = new MasinaDeCurse("Ferrari", "SF-24", "Rosu", 50000);
  const m2 = new MasinaDeCurse("Porsche", "963", "Verde", 40000);

  m1.afiseazaProprietati();
  m1.participaLaCampionat(2);

  m2.afiseazaProprietati();
  m2.participaLaCampionat(0);
}

mainMasinaDeCurse();

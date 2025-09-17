/*Scrieți o funcție numită tellFortune care:
primește 4 argumente: numărul de copii (N), numele partenerului (Z), locația geografică (Y), locul de muncă (X).
Afișează pe ecran viitorul dvs. în felul următor: "Vei fi un X în Y, căsătorit cu Z și vei avea N copii."
În rezolvarea problemei, vom încerca să abordăm șirurile templetizate (${variabila} este o variabila.).*/

function tellFortune(numarCopii, numePartener, locatieGeografica, Job) {
  return `Vei fi un ${Job} în ${locatieGeografica}, căsătorit cu ${numePartener} și vei avea ${numarCopii} copii.`;
}

console.log(tellFortune(3, "Emanuel", "Italia", "Programator"));

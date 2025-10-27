let preces = [
  { nosaukums: "dators", kategorija: "Elektronika", cena: 340, daudzums: 12 },
  { nosaukums: "datorpele", kategorija: "Elektronika", cena: 8, daudzums: 30 },
  { nosaukums: "bikses", kategorija: "Apģērbi", cena: 20, daudzums: 6 }
];

let summa = 0;

for (let i = 0; i < preces.length; i++) {
  summa += preces[i].cena;
  if (preces[i].kategorija == "Elektronika")
    console.log(preces[i].nosaukums);
}

console.log("\nKopējā summa:", summa, "EUR");
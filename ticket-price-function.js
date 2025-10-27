function printTicketPrice(visitorAge, isStudent) {
  if (visitorAge <= 6) console.log("Ieeja ir bez maksas!");
  else if (isStudent) console.log("Cena ir 5 EUR.");
  else console.log("Cena ir 12 EUR.");
}


printTicketPrice(12, true);
printTicketPrice(35, false);
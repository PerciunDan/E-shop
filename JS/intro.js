// 1. Declară o variabilă goală numită person
let person;

// 2. Creează variabile pentru vârstă și numele de familie
let age = 25;
let lastName = "Doe";

// 3. Generează un ID unic folosind Math.random()
let uniqueID = Math.floor(Math.random() * 100000); // Număr între 0 și 99999

// 4. Construiește fraza folosind template literals
let message = `John ${lastName} is ${age} years old. Their unique ID is ${uniqueID}.`;

// 5. Afișează rezultatul în consolă
console.log(message);

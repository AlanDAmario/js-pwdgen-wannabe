"use strict";

let currentText = document.getElementById('user-password');

let actualText = currentText.innerHTML;

let userName = prompt('Inserisci il tuo nome');
let lastName = prompt('Inserisci il tuo cognome');
let favoriteColor = prompt('Inserisci il tuo colore preferito');
let random = Math.floor(Math.random() * 100);

console.log(userName);
console.log(lastName);
console.log(favoriteColor);

actualText = `${userName}${lastName}${favoriteColor}${random}`;

currentText.innerHTML = actualText;
let userInputEvenOdd = prompt("Scegli Pari o Dispari");
console.log(userInputEvenOdd);

let userInputNumber = prompt("Scegli un numero da 1 a 5");
console.log(userInputNumber);

if (userInputNumber > 5) {

    alert("Per favore inserisci un numero da 1 a 5")

}

function randomNumber(min, max) {

    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);

}

console.log(randomNumber(1, 5))
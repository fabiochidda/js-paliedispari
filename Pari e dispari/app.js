let userInputEvenOdd = prompt("Scegli Pari o Dispari");
console.log(userInputEvenOdd);

let userInputNumber = parseInt(prompt("Scegli un numero da 1 a 5"));
console.log(userInputNumber);

if (userInputNumber > 5) {

    alert("Per favore inserisci un numero da 1 a 5")

}

function randomNumber(min, max) {

    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);

}

const randomNumbers = randomNumber(1, 5)
console.log(randomNumbers)

function numberSum (inputNumber, generatedNumber) {

    const numberSum = inputNumber + generatedNumber;
    return numberSum;

}

console.log(numberSum(userInputNumber, randomNumbers))

const finalResult = (numberSum(userInputNumber, randomNumbers))

if (userInputEvenOdd == "Pari" && finalResult % 2 == 0) {

    alert("Hai vinto")

} else if (userInputEvenOdd == "Dispari" && finalResult % 2 !== 0) {

    alert("Hai vinto")

} else {

    alert("Hai perso")
}

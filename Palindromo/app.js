let userInput = prompt("Inserisci una parola");

function parolaPalindroma (parola) {

    const parolaDivisa = parola.split("");

    const parolaReversed = parolaDivisa.reverse();

    const parolaRiunita = parolaReversed.join("");

    if (userInput == parolaRiunita) {

        alert ("La parola è palindroma")
    
    } else {
    
        alert("La parola non è palindroma")
    
    }

    return parolaRiunita;


}

console.log(parolaPalindroma(userInput))


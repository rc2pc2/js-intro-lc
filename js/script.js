// // ? Dichiarazione di una variabile con assegnazione (inizializzazione)
// let nonno;
// console.log(nonno);

// let firstName = 'Jane';
// const day = 8;

// console.log(firstName);
// console.log(day);

// firstName = 'Ginetta';
// console.log(firstName);

// // day = 6;


// const text = parseInt( prompt('scrivi la tua eta') );

// console.log(text);
// console.log(typeof text);


// ? Chiediamo all'utentessa e o utente la sua eta' e comunichiamo l'anno di nascita


// const userAge = parseInt(prompt('Type your age'));

// const currentYear = 2023;

// const birthYear = currentYear - userAge;
// console.log(birthYear);

// document.getElementById('output').innerHTML = 'Age is ' + birthYear;


// ? Chiediamo all'utente 3 numeri, li sommo e li mostro a schermo.

let sum = 0;

const firstNumber = parseInt( prompt ('Type a number' ));
const secondNumber = parseInt( prompt ('Type a number' ));
const thirdNumber = parseInt( prompt ('Type a number' ));

sum = firstNumber + secondNumber + thirdNumber;

document.getElementById('output').innerHTML = 'La somma dei numeri inseriti e\': ' + sum;


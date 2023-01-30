const password = document.getElementById('password')
console.log(password.innerHTML)

//inserisci nome//

let nome
nome=prompt("Qual'è il tuo nome?")
console.log('Il tuo nome è: '+ nome)

//inserisci cognome//

let cognome
cognome=prompt("Qual'è il tuo cognome?")
console.log('Il tuo cognome è: '+ cognome)

//inserisci colore preferito//

let colore
colore=prompt("Qual'è il tuo colore preferito?")
console.log('Il tuo colore è: '+ colore)

//inserisci numero//

let numero
numero=prompt("Quale numero scegli?")
console.log('Il tuo numero è: '+ numero)

password.innerHTML = nome + cognome + colore + numero
console.log('La tua password è: ' + password.innerHTML)
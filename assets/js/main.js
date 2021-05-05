// Istuzioni:
// Il computer deve generare 16 numeri casuali tra 1 e 100.
// devo creare una variabile che mi generi 16 numeri (tra 1 e 100)
// I numeri non possono essere duplicati.


function random_bombe(min,max){
    return  Math.floor(Math.random() * (max - min + 1) + min);

}

var diff = Number(prompt("Inserisci un livello 0-1-2"));

if(diff < 0 || diff > 2){
    alert("livello non esistente");
}

var bombe = [];
var numero;
var num_massimo;
var contatore = 0;
var lista = []; 

if(diff==0){
    num_massimo = 100;
}else if(diff==1){
    num_massimo = 80
}else if(diff=2){
    num_massimo = 50;
}


var possibilita = num_massimo - 16;

while(bombe.length < 16){
    numero = random_bombe(1, num_massimo);

    if(!bombe.includes(numero)){
        bombe.push(numero);
    }
    
}

console.log(bombe);




// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, 
// sempre compreso tra 1 e 100.


do {
    var user_num = Number(prompt("Inserisci un numero"));
    
    if(bombe.includes(user_num)){
        alert("hai perso. Hai totalizzato " + contatore);
    } else if(lista.includes(user_num)){
        alert("numero duplicato");
    }else if(user_num < 0 || user_num > num_massimo){
        alert("NUMERO NON CONSENTITO");
    }else {
        lista.push(user_num);
        contatore = contatore + 1;
    }
    
} while(lista.length < possibilita && !bombe.includes(user_num));

if (lista.length == possibilita){
    alert("hai vinto");
}
console.log(lista);
console.log(contatore);


document.getElementById("livello").innerHTML = "Hai scelto il livello " + diff;
document.getElementById("vittoria").innerHTML = "Hai vinto. Hai totalizzato un punteggio di " + contatore;

// L’utente non può inserire più volte lo stesso numero.

// Se il numero è presente nella lista dei numeri generati, 
// la partita termina, altrimenti si continua chiedendo all’utente un altro numero.

// La partita termina quando il giocatore inserisce un numero “vietato” 
// o raggiunge il numero massimo possibile di numeri consentiti.

// Al termine della partita il software deve comunicare il punteggio, 
// cioè il numero di volte che l’utente ha inserito un numero consentito.




// BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 => tra 1 e 80
// con difficoltà 2 => tra 1 e 50



// CAMBIA NUMERO IN BOMBA 
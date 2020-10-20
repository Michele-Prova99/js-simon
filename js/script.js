// Un alert espone 5 numeri casuali.
// Dopo la chiusura (manuale, cioè facendo click su ok) dell'alert, parte un timer di 30 secondi.
// Dopo i 30 secondi l'utente deve inserire un prompt alla volta i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e
// quali dei numeri da indovinare sono stati individuati.

// 1) Creo un array di numeri casuali

var numeriCasuali = [];

var numeriUtente = [];

var max = 100;

// 2)

while (numeriCasuali.length < 5) {

  var numero = numeroRandom(1,max);

  if(ricerca(numeriCasuali,numero) == false) {

    numeriCasuali.push(numero);

  }
}

alert(numeriCasuali);

console.log(numeriCasuali);

// 3)

setTimeout(inserimento,2000);

function inserimento() {

  for (var i = 0; i < 5; i++) {

    var n = parseInt(prompt("Inserisci un numero da 1 a" + max));

    while (n <= 0 || n > 100 || isNaN(n)) {

      var n = parseInt(prompt("Attenzione devi inserire un numero da 1 a" + max));

    }

    if (ricerca(numeriCasuali,n) == true && ricerca(numeriUtente, n) == false) {

      numeriUtente.push(n);

    }

  }

  console.log("Hai indovinato " + numeriUtente.length + " numeri e sono : " + numeriUtente);

}

//***** FUNZIONI *****//


function numeroRandom(min,max) {

  return Math.floor(Math.random() * (max - min + 1) + min);

}

// Funzione per i duplicati

function ricerca(array,elemento) {

  var i = 0;

  while (i < array.length) {

    if (elemento == array[i]) {

      return true;

    }
    i++;
  }
  return false;
}

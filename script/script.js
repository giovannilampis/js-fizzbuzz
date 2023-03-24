"use strict"

for (let i = 1; i <= 100; i++) {
    
    // STAMPA "FIZZBUZZ" anzi che i numeri che sono multipli sia di 3 che di 5
    if ( i % 15 == 0 ) {
        console.log(FizzBuzz);

    // STAMPA "FIZZ" anzi che i numeri che sono multipli di 3     
    } else if ( (i != 3) && (i % 3) == 0) {
        console.log(Fizz);

     // STAMPA "BUZZ" anzi che i numeri che sono multipli di 5     
    } else if ( (i != 5) && (i % 5) == 0) {
        console.log(Buzz);

    // IN TUTTI GLI ALTRI CASI STAMPA IL NUMERO APPROPRIATO    
    } else {
        console.log(i);
    }
}


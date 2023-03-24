"use strict"

let boxes = document.querySelector("section");

for (let i = 1; i <= 100; i++) {

    let box = document.createElement("div");

    box.classList.add("box")

    boxes.append(box);
    
    // STAMPA "FIZZBUZZ" anzi che i numeri che sono multipli sia di 3 che di 5
    if (i % 15 == 0) {
        console.log("FizzBuzz");
        box.innerHTML = `${"Fizz Buzz"}`;
        box.style.backgroundColor = "blue";
        box.style.color = "whitesmoke";

    // STAMPA "FIZZ" anzi che i numeri che sono multipli di 3     
    } else if ( (i != 3) && (i % 3) == 0) {
        console.log("Fizz");
        box.innerHTML = `${"Fizz"}`;
        box.style.backgroundColor = "yellow";
        box.style.color = "black";

     // STAMPA "BUZZ" anzi che i numeri che sono multipli di 5     
    } else if ( (i != 5) && (i % 5) == 0) {
        console.log("Buzz");
        box.innerHTML = `${"Buzz"}`;
        box.style.backgroundColor = "lightskyblue";
        box.style.color = "whitesmoke";

    // IN TUTTI GLI ALTRI CASI STAMPA IL NUMERO APPROPRIATO    
    } else {
        console.log(i);
        box.innerHTML = `${i}`
    }
}




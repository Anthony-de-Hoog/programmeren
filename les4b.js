var readlineSync = require("readline-sync");

var antwoord =  readlineSync.question("Welke getal heb ik in mijn hoofd? ")

function rollDice(){
    let rand = Math.ceil(Math.random() * 100);
    return rand;

}
let i = rollDice()
rollDice()
while(antwoord != i ) {
    if(antwoord > i) {
        console.log("lager")
    } else if(antwoord < i) {
        console.log("hoger")
    } 
    antwoord =  readlineSync.question("Welke getal heb ik in mijn hoofd? ")
    
}

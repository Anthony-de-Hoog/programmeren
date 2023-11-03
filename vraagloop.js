var readlineSync = require("readline-sync");

var antwoord =  readlineSync.question("Wat is 1+1? ")

while(antwoord != 2 ) {
    antwoord =  readlineSync.question("Wat is 1+1? ")
}

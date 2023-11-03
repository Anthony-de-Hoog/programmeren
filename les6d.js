var readlineSync = require("readline-sync");

console.log("Jouw boodschappenlijst is nog leeg ")

boodschappen()


function boodschappen() {
    let boodschappenlijst = readlineSync.question("Wat wil je doen? Toevoegen (t) of verwijderen (v)? ")
    const arr = [boodschappenlijst]
    if (boodschappenlijst <= 0) {
        console.log("Jouw boodschappenlijst is nog leeg ")
        console.log(boodschappenlijst)
        arr.push(boodschappenlijst)
        boodschappen()

    } else if (boodschappenlijst >= 0) {
        console.log("Jouw lijst bevat: " + arr)
        console.log(boodschappenlijst)
        boodschappen()
    }
}
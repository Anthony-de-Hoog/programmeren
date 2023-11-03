var readlineSync = require("readline-sync");


let zin = readlineSync.question("Geef mij een zin! ")

console.log(spongebob(zin))

function spongebob(zin) {
    let nzin = ""
    for (let i = 0; i < zin.length; i++) {
        let element = zin[i]
        if (i % 2 == 0) {
            element = element.toUpperCase()
        }
        nzin += element
    }
    return nzin
}

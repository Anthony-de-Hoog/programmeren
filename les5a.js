var readlineSync = require("readline-sync");

function rollDice(){
    let rand = Math.ceil(Math.random() * 6);
    return rand;
}

let hp = 25

let enmhealth = 20 
let enmattack = 5


let naam = readlineSync.question("Welkom beste reisiger! Je bent door deze mysterieuze pportaal naar onze wereld gekomen die geterroriseerd wordt door de meest gevaarlijke wezen, een slijm. Ik kan u niet garranderen dat je terugkeert naar uw vrouw en kinderen, maar wat is uw naam? ")
console.log("Wauw, geweldige naam " + naam + "! Hier is een swaard. Red onze wereld van de monsterlijke slijm en misschien kom u weer terug bij uw vrouw en kinderen! Ga nu!")

console.log("Je loopt rond en je vindt de geweldadige slijm")

enemyEncounter()

function enemyEncounter(){

    let keuze = readlineSync.question("Wat ga je doen? aanvallen of vluchten? AUB gebruik geen hoofdletters! ")
    while (enmhealth > 0){
if (keuze == "aanvallen"){
        let attack = rollDice();  
        let enmdamage = (attack);
        enmhealth -= enmdamage
        console.log(naam +" valt aan met zijn swaard, hij doet " + attack + " damage ");
        
        if (enmhealth <= 0) {
           victory()
           break
        } else if (enmhealth >= 0) {
        hp -= enmattack
        console.log("de slijm valt terug aan, en doet " + enmattack + " damage, je hebt nog " + hp + " health over ")
        
        if (hp < 1){
            gameOver()
            break
        } else if (hp > 1) {
            enemyEncounter()
            break
        }
        } else {
        enemyEncounter()
        }
    } else if (keuze == "vluchten") {
        if (Math.round(Math.random()*4) >= 2){
            console.log("Je bent succesvol gevlucht van het slijm. ")
            gameOver2()
            break
        } else {
            enemyEncounter()
        }
    } else {
        gameOver3()
        break
    }
}
}


function gameOver() {
    console.log("De slijm eet jou en jullie morphen samen tot een wezen met goddelijke krachten. Met deze nieuwe krachten vernietigen jullie niet alleen deze wereld, maar ook de wereld waar jouw vrouw en kinderen in leven. Was je maar sterker. Skill issue. ")
}

function gameOver2() {
    console.log("Je bent gevlucht. Je zult nooit je vrouw en kinderen meer zien. Je probeert een nieuwe leven te starten in de nieuwe wereld, maar de slijm waar je voor was gevlucht was dus blijkbaar meer gegroeid en heeft deze wereld vernietigd. Je hat er iets aan kunnen doen als je niet gevlucht was.")
}

function gameOver3() {
    console.log("Je denkt slim te zijn door iets anders dan de keuze in te voeren, maar raad eens, ik ben slimmer en laat jou nu verliezen. Gefeliciteerd, je hebt iedereen verdoemt. Ben je nu blij?")
}
function victory() {
    console.log("gefeliciteerd " + naam + " je hebt gewonnen. Nu je de wereld heb geredt verwacht je dat een portaal je terug brengt naar de wereld waar jouw vrouw en kinderen wonen, maar dat gebeurt niet. Uiteindelijk accepteer je dat er nooit een portaal zal komen, dus besluit je om door deze wereld door te leven. Je mist je vrouw en kinderen, maar je leeft teminste nog. ")
}
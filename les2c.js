var readlineSync = require("readline-sync");

var schooldag = readlineSync.question("Welke dag is het vandaag? ")

if (schooldag == "maandag") {
    console.log("Ik moet naar school");
} else if (schooldag == "dinsdag") {
    console.log("Ik moet naar school");
} else if (schooldag == "woensdag") {
    console.log("Ik moet naar school");
} else if (schooldag == "donderdag") {
    console.log("Ik moet naar school");
} else if (schooldag == "vrijdag") {
    console.log("Ik moet naar school");
} else if (schooldag == "zaterdag") {
    console.log("Lekker uitslapen!");
} else if (schooldag == "zondag") {
    console.log("Lekker uitslapen!");
} else {
    console.log("Sorry, probeer nog eens.")
}
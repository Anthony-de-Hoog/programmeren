var readlineSync = require("readline-sync");

var geboortejaar = readlineSync.question("In welke jaar ben je geboren? ");
var geboortemaand = readlineSync.question("In welke maan ben je geboren? ");
var geboortedag = readlineSync.question("Op welke dag ben je geboren ")


let now = new Date();
  let birth = new Date(geboortejaar, geboortemaand, geboortedag); 
  let miliseconds = now-birth;

let dagen =(miliseconds / 86400000);
let weken =(dagen / 7);
let jaren =(weken / 52);
console.log(Math.floor(jaren));
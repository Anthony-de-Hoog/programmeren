function rollDice(){
    let rand = Math.ceil(Math.random() * 6);
    return rand;
}
function stats(){
let d1 = rollDice();
let d2 = rollDice();
let d3 = rollDice();
let d4 = rollDice();

const array = []

array.push(d1, d2, d3, d4)

let laagsts = Math.min.apply(Math, array)

let stat = d1 + d2 + d3 + d4 - laagsts
return stat
}

console.log("STR " + stats())
console.log("DEX " + stats())
console.log("CON " + stats())
console.log("INT " + stats())
console.log("WIS " + stats())
console.log("CHA " + stats())
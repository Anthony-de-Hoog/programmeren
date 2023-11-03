function rollDice(){
    let rand = Math.ceil(Math.random() * 6);
    return rand;
}
let d1 = rollDice();
console.log(d1);
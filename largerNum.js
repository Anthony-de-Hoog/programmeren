function largerNum(rand, rand2){

    if (rand > rand2) {
        return rand;
    } else if (rand2 > rand) {
        return rand2;
    } else {
        return 0;
    }
}
let x = largerNum(7,99);
console.log(x);
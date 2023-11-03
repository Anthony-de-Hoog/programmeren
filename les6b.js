let mijnArray = [42, "Hallo", true, [1, 2, 3], { naam: "John" }];

console.log("Oorspronkelijke array:", mijnArray);


mijnArray.push("Nieuw item");
console.log("Array na push():", mijnArray);

mijnArray.pop();
console.log("Array na pop():", mijnArray);

mijnArray.unshift(10);
console.log("Array na unshift():", mijnArray);

mijnArray.shift();
console.log("Array na shift():", mijnArray);

let gesnedenArray = mijnArray.slice(1, 3);
console.log("Gesneden array:", gesnedenArray);

mijnArray.splice(1, 1, "Gewijzigd item");
console.log("Array na splice():", mijnArray);

let andereArray = [4, 5, 6];
let samengevoegdeArray = mijnArray.concat(andereArray);
console.log("Samengevoegde array:", samengevoegdeArray);

mijnArray.reverse();
console.log("Array na reverse():", mijnArray);

let index = mijnArray.indexOf(true);
console.log("Index van 'true':", index);

let arrayAlsString = mijnArray.join(" - ");
console.log("Array als string:", arrayAlsString);
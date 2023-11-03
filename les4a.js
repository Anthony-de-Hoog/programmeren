
let i = 0
let j = 1

while(i <= 10000000 && j < 10000000) {
   i = i + j
   console.log(i)
   j = j + i
   console.log(j)
}
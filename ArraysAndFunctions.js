let ages = [3, 9, 23, 64, 2, 8, 28, 93]

function subtract(first, last){
    let sub = ages[0] - ages[ages.length - 1]
    return sub;
} console.log(subtract(ages[0],ages[ages.length - 1]));
 
ages.push(30);
console.log(subtract(ages[0],ages[ages.length - 1]));
ages.push(53);
console.log(subtract(ages[0],ages[ages.length - 1]));

for(i = 0; i < ages.length; i++){
    console.log(ages[i]);       
} 
let average = ages.reduce((a, b) => a + b) / ages.length;
console.log(average);


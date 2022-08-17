// problem 1:

let ages = [3, 9, 23, 64, 2, 8, 28, 93];

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
    if (i == ages.length -1){
        let average = ages.reduce((a, b) => a + b) / ages.length;
console.log(average);
    }   
} 

// problem 2:

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

for (i = 0; i < names.length; i++){
    console.log(names[i]);
    if (i == names.length -1){
        let nameAverage = names.join('').length / names.length;
console.log(nameAverage);
    }
} 
for (i = 0; i < names.length; i++){
    console.log(names[i]);
    if (i == names.length -1){
        let concatenate = names.join(' ');
        console.log(concatenate);
    }
}

//probelm 3:

// this code allows you to access the last element in an array. (array.length - 1)

//problem 4:
// using array[0] you can access the first element in an array.

//problem 5:
  
let nameLengths = [];





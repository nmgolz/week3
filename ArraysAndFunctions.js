// problem 1:

let ages = [3, 9, 23, 64, 2, 8, 28, 93];

console.log(ages[ages.length - 1] - ages[0])
 // origionally tried to make this a function which isnt needed it makes the code too complicated
ages.push(30);
console.log(ages[ages.length - 1] - ages[0])
ages.push(53);
console.log(ages[ages.length - 1] - ages[0])

let sum = 0

for (i = 0; i < ages.length; i++){
    sum += ages[i];
} console.log(sum / ages.length);

// problem 2:

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

let totalCharacters = 0

for (i = 0; i < names.length; i++){
    totalCharacters += names[i].length;
}
    console.log(totalCharacters / names.length);

    let newName = "";
for (i = 0; i < names.length; i++){
    newName += names[i] + ' ';
}
console.log(newName.trim());

//problem 3:

// this code allows you to access the last element in an array. (array.length - 1)

//problem 4:
// using array[0] you can access the first element in an array.

//problem 5:
  
let nameLengths = [];

for (i = 0; i < names.length; i++){
        nameLengths.push(names[i].length);
}

console.log(nameLengths);

// problem 6:
let newTotal = 0

for (i = 0; i < nameLengths.length; i++){
    newTotal += nameLengths[i];
} console.log(newTotal)
// problem 7:

function multiplyWords(word, n){
    let multipleWords = word.repeat(n);
    return multipleWords;
} console.log(multiplyWords('Hello', 3));

// Problem 8:

function createFullName(firstName, LastName){
   let fullName = firstName + ' ' + LastName;
    return fullName;
}

console.log(createFullName('George', 'Lucas'));

// Problem 9:
let find100 = 0;
let arr = [10, 150, 5, 15]

function findGreaterThan100(array1){
    for(i = 0; i < array1.length; i++){
    find100 += array1[i];
    } if (find100 > 100) {return 'True';
    } 
}
console.log(findGreaterThan100(arr));

// problem 10:

function findAverage(array1){
    let arrayAvg = array1.reduce((a, b) => a + b, 0) / array1.length;
    return arrayAvg;
}

console.log(findAverage(arr));

// Problem 11:


let arr2 = [14, 16, 12, 199]
function findGreaterAverage(array1, array2){
    let array1Avg = array1.reduce((a, b) => a + b, 0) / array1.length;
    let array2Avg = array2.reduce((a, b) => a + b, 0) / array2.length;
    if (array1Avg > array2Avg){
        return 'true';
    } else return 'false';
}
console.log(findGreaterAverage(arr2, arr));

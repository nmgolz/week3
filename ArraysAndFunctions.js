// problem 1:

let ages = [3, 9, 23, 64, 2, 8, 28, 93];

function subtract(first, last){
    let sub = ages[ages.length - 1] - ages[0];
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

//problem 3:

// this code allows you to access the last element in an array. (array.length - 1)

//problem 4:
// using array[0] you can access the first element in an array.

//problem 5:
  
let nameLengths = [];

for (i = 0; i < names.length; i++){
    console.log(names[i])
    if (i < names.length){
        nameLengths.push(names[i].length);
    }
}

console.log(nameLengths);

// problem 6:

for (i = 0; i < nameLengths.length; i++){
    console.log(nameLengths[i]);
    if (i == nameLengths.length - 1){
        let total = nameLengths.reduce((a,b) => a + b);
        console.log(total);
    } 
}
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

let arr = [10, 150, 5, 15]
function findGreaterThan100(array1){
    let arraySum = array1.reduce((a,b) => a + b);
    if (arraySum > 100){
      return console.log("True");
    } else {console.log('False')}
}
findGreaterThan100(arr);

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

// Problem 1

/* Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
Programmatically subtract the value of the first element in the array from the value in the last element of the array.
Do not use numbers to reference the last element, find it programmatically.
ages[7] - ages[0] is not allowed! */

let ages = [3, 9, 23, 64, 2, 8, 28, 93]; // Array of ages
let lastElementMinusFirst = ages[ages.length - 1] - ages[0]; // Subtract first element from last element
console.log(`Ages`, ages);
console.log(`Last Element Minus the First`, lastElementMinusFirst);

// Part 1.b Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).

ages.push(100); // Add a new age to the array
console.log(`Ages + 100`, ages);
let lastElement2 = ages[ages.length - 1] - ages[0]; // Repeat subtraction dynamically
console.log(`Repeated Step 1 to show it is dynamic`, lastElement2);

// Part 1.c Use a loop to iterate through the array and calculate the average age.

let sum = 0; // Initialize sum variable
for (let i = 0; i < ages.length; i++) {
    sum += ages[i]; // Add each age to the sum
}
console.log(`Sum of Ages`, sum);

let averageAge = sum / ages.length; // Calculate average by dividing sum by array length
console.log(`Average Age`, averageAge);

// Problem 2
/*Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
Use a loop to iterate through the array and calculate the average number of letters per name.
Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.*/

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']; // Array of names
let totalLength = 0; // Initialize total length variable
for (let i = 0; i < names.length; i++) {
    totalLength += names[i].length; // Add the length of each name to total length
}
let averageNameLength = totalLength / names.length; // Calculate average name length
console.log(`Average length of names`, averageNameLength);

let concatNames = []; // Initialize an empty array for concatenated names
for (let i = 0; i < names.length; i++) {
    concatNames = concatNames.concat(names[i]) + ' '; // Concatenate names with a space
}
console.log(`Loop`, concatNames);
console.log(`Skip the loop:`, names.join(' ')); // Use join method to concatenate names with spaces

// Problem 3 How do you access the last element of any array?

// To access the last element of any array, use the length property and subtract 1.
console.log(names[names.length - 1]); // Access the last element of the names array

// Problem 4 How do you access the first element of any array?

// To access the first element of any array, use index 0.
console.log(names[0]); // Access the first element of the names array

// Problem 5 
/*Create a new array called nameLengths. Write a loop to iterate over the previously created names array 
and add the length of each name to the nameLengths array.*/

let nameLengths = []; // Initialize an empty array for name lengths
for (let i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length); // Push the length of each name into the array
}
console.log(`nameLengths array`, nameLengths);

// Problem 6
//Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.

let sumOfNameLengths = 0; // Initialize sum variable
for (let i = 0; i < nameLengths.length; i++) {
    sumOfNameLengths += nameLengths[i]; // Add each name length to the sum
}
console.log(sumOfNameLengths);

// Problem 7
//Write a function that takes two parameters, word and n, as arguments and returns the word
//concatenated to itself n number of times.

function multiplyNames(name, n) {
    // Function to repeat a name n times
    let result = ''; // Initialize result string
    for (let i = 0; i < n; i++) {
        result += name; // Append the name to the result
    }
    return result; // Return the concatenated result
}
console.log(`multiplyNames Function:`, multiplyNames('John', 3));

// Problem 8
//Write a function that takes two parameters, firstName and lastName, and returns a full name. 
//The full name should be the first and the last name separated by a space.

function fullName(firstName, lastName) {
    // Function to concatenate first and last name
    return `${firstName} ${lastName}`; // Return full name
}
console.log(`fullName Function:`, fullName('John', 'Doe'));

// Problem 9
//Write a function that takes an array of numbers and 
//returns true if the sum of all the numbers in the array is greater than 100

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 100]; // Array of numbers
function sumNumbers(numbers) {
    // Function to calculate the sum of numbers and check if it's greater than 100
    let sum = 0; // Initialize sum variable
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]; // Add each number to the sum
    }
    return sum > 100; // Return true if sum is greater than 100, otherwise false
}
console.log(`sumNumbers Function:`, sumNumbers(numbers));

// Problem 10
//Write a function that takes an array of numbers and returns the average of all the elements in the array.

function averageNumbers(numbers) {
    // Function to calculate the average of numbers
    let sum = 0; // Initialize sum variable
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]; // Add each number to the sum
    }
    return sum / numbers.length; // Return the average
}
console.log(`averageNumbers Function:`, averageNumbers(numbers));

// Problem 11
// Write a function that takes two arrays of numbers and returns true if the average of the 
// elements in the first array is greater than the average of the elements in the second array.

let littleArray = [1, 2, 3, 4, 5]; // Smaller array of numbers
let bigArray = [6, 7, 8, 9, 10]; // Larger array of numbers

function greaterAverage(bigArray, littleArray) {
    // Function to compare the averages of two arrays
    let averageBigArray = averageNumbers(bigArray); // Calculate average of bigArray
    let averageLittleArray = averageNumbers(littleArray); // Calculate average of littleArray
    return averageBigArray > averageLittleArray; // Return true if bigArray's average is greater
}
console.log(`greaterAverage Function True:`, greaterAverage(bigArray, littleArray));
console.log(`greaterAverage Function False:`, greaterAverage(littleArray, bigArray));

// Problem 12
//Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, 
//and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

function willBuyDrink(isHotOutside, moneyInPocket) {
    // Function to determine if a drink will be bought
    return isHotOutside && moneyInPocket > 10.50; // Return true if it's hot and money is greater than $10.50
}
console.log(`willBuyDrink Function:`, willBuyDrink(true, 20));

// Problem 13
// Create a function of your own that solves a problem. 
// In comments, write what the function does and why you created it.

let duplicates = [1, 2, 2, 3, 4, 4, 5, 6, 6, 7, 8, 9, 10, 10]; // Array with duplicate values
function removeDuplicates(array) {
    // Function to remove duplicate values from an array
    return Array.from(new Set(array)); // Use Set to remove duplicates and convert back to an array
}
console.log(`removeDuplicates Function:`, removeDuplicates(duplicates));
// 1. Write a program that takes a positive integer from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

let userInput = prompt("Enter a positive number:");
let number = parseFloat(userInput);

if (number > 0) {
    document.writeln("<h2>Number: " + number + "</h2>");
    document.writeln("<p>Round off value: " + Math.round(number) + "</p>");
    document.writeln("<p>Floor value: " + Math.floor(number) + "</p>");
    document.writeln("<p>Ceil value: " + Math.ceil(number) + "</p>");
} else {
    document.writeln("<p>Please enter a valid positive number.</p>");
}


// 2. Write a program that takes a negative floating point number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number


let user = prompt("Enter a negative floating point number :");
let numbers = parseFloat(user);

if (numbers < 0) {
    document.writeln("<h2>Number: " + numbers + "</h2>");
    document.writeln("<p>Round off value: " + Math.round(numbers) + "</p>");
    document.writeln("<p>Floor value: " + Math.floor(numbers) + "</p>");
    document.writeln("<p>Ceil value: " + Math.ceil(numbers) + "</p>");
} else {
    document.writeln("<p>Please enter a valid positive number.</p>");
}


// 3. Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5


let userInputs = prompt("Enter any number (positive or negative):");
let number1 = parseFloat(userInputs);
let absoluteValue = Math.abs(number1);

document.write("<h2>Original Number: " + number1 + "</h2>");
document.write("<p>Absolute Value: " + absoluteValue + "</p>");


// 4. Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your browser.:

let diceValue = Math.floor(Math.random() * 6) + 1;

document.write("<h2> Dice Rolled: " + diceValue + "</h2>");


// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your browser


let toss = Math.floor(Math.random() * 2);
let result = toss === 0 ? "Heads" : "Tails";

document.writeln("<h2> Coin Toss Result: " + result + "</h2>");


// 6. Write a program that shows a random number between 1 and 100 in your browser.

let num = Math.floor(Math.random()*100);
console.log(num);

// 7. Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser. Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

let userInputes = prompt("Enter your weight (e.g., 50, 50kgs, 50.2kgs, 50.2kilograms)");

let weight = parseFloat(userInputes);

if (!isNaN(weight)) {
    document.writeln("Your weight is " + weight + " kilograms");
} else {
    document.writeln("Invalid input. Please enter a valid weight.");
}



// 8. Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.


let human = prompt("enter a number 1 to 10. if it's match from random number you will win ");
human = parseInt(human);
let nums = Math.floor(Math.random()*10)+1;
if (human == nums){
    console.log("congulation you find a same number");
}else {
    console.log("try again");
}

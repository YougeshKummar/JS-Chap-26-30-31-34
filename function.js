// FUCTION 

// 1. Write a function that displays current date & time in your browser.

function showDateTime() {
    let now = new Date();
    alert("Current Date and Time: " + now);
}

showDateTime();

// 2. Write a function that takes first & last name and then it
// greets the user using his full name.

function greetUser() {
  let firstName = prompt("Enter your first name:");
  let lastName = prompt("Enter your last name:");
  let fullName = firstName + " " + lastName;
  alert("Hello, " + fullName + "! Welcome 😊");
}

greetUser(); 

// 3. Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.

function addTwoNumbers() {
  let num1 = prompt("Enter the first number:");
  let num2 = prompt("Enter the second number:");

  // Convert inputs to numbers
  num1 = Number(num1);
  num2 = Number(num2);

  let sum = num1 + num2;
  alert("The sum is: " + sum);
  return sum;
}

addTwoNumbers(); 

// 4. Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.

function calculator(num1, num2, operator) {
  let result;

  if (operator === '+') {
    result = num1 + num2;
  } else if (operator === '-') {
    result = num1 - num2;
  } else if (operator === '*') {
    result = num1 * num2;
  } else if (operator === '/') {
    result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
  } else {
    result = "Invalid operator";
  }

  alert("Result: " + result);
  return result;
}

// Getting input from user
let num1 = Number(prompt("Enter first number:"));
let num2 = Number(prompt("Enter second number:"));
let operator = prompt("Enter operator (+, -, *, /):");

calculator(num1, num2, operator);

// 5. Write a function that squares its argument.

function square(num) {
  return num * num;
}
let input = Number(prompt("Enter a number to square:"));
let resultes = square(input);
alert("The square of " + input + " is: " + resultes);


// 6. Write a function that computes factorial of a number.

function factorial(n) {
  let results = 1;
  for (let i = 1; i <= n; i++) {
    results *= i;
  }
  return results;
}

console.log(factorial(5)); 

// 7. Write a function that take start and end number as inputs
// & display counting in your browser.

    function displayCounting(start, end) {
      for (let i = start; i <= end; i++) {
        document.write(i + "<br>");
      }
    }

    displayCounting(1, 10);


// 8. Write a nested function that computes hypotenuse of a
// right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()

    function calculateHypotenuse(base, perpendicular) {
  function calculateSquare(num) {
    return num * num;
  }

  let baseSquare = calculateSquare(base);
  let perpendicularSquare = calculateSquare(perpendicular);
  let hypotenuse = Math.sqrt(baseSquare + perpendicularSquare);

  return hypotenuse;
}

let results = calculateHypotenuse(3, 4);
console.log("Hypotenuse is: " + results);


// 9. Write a function that calculates the area of a rectangle.
// A = width * height
// Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables

                    //   (i)

function calculateArea(width, height) {
  return width * height;
}

console.log("Area (with values): " + calculateArea(5, 10));

                        //  (ii)

 let w = 7;
let h = 3;

function calculateArea(width, height) {
  return width * height;
}

console.log("Area (with variables): " + calculateArea(w, h));


// 10. Write a JavaScript function that checks whether a passed
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as
// forward, e.g., madam.


function isPalindrome(str) {
  let reversed = str.split('').reverse().join('');
  return str === reversed;
}

console.log(isPalindrome("madam"));  
console.log(isPalindrome("hello")); 


// 11. Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'


function capitalizeWords(str) {
  let words = str.split(" ");
  let capitalized = words.map(function(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return capitalized.join(" ");
}

let example = "the quick brown fox";
let resultss = capitalizeWords(example);
console.log(resultss); 


// 12. Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'

function findLongestWord(str) {
  let words = str.split(" ");
  let longest = "";

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }

  return longest;
}

console.log(findLongestWord("Web Development Tutorial"));



// 13. Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of
// occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'



function countLetter(str, letter) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      count++;
    }
  }
  return count;
}

let result = countLetter("JSResourceS.com", "o");
console.log("Occurrences of 'o':", result); 


// 14. The Geometrizer
// Create 2 functions that calculate properties of a circle, using
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".

// Circumference of circle = 2πr
// Area of circle = πr2


function calcCircumference(radius) {
  let circumference = 2 * Math.PI * radius;
  console.log("The circumference is " + circumference.toFixed(2));
}

function calcArea(radius) {
  let area = Math.PI * radius * radius;
  console.log("The area is " + area.toFixed(2));
}

calcCircumference(5); 
calcArea(5);          

// FUNCTIONS, SWITCH STATEMENTS, WHILE... DO-WHILE LOOPS


// 1. Write a custom function power ( a, b ), to calculate the value of a raised to b.

function power(a, b) {
  let result = 1;
  for (let i = 0; i < b; i++) {
    result *= a;
  }
  return result;
}

let base = 2;
let exponent = 4;
let answer = power(base, exponent);
console.log(`${base} raised to ${exponent} is: ${answer}`);


// 2. Any year is entered through the keyboard. Write a function to
// determine whether the year is a leap year or not.
// Leap years ..., 2012, 2016, 2020, ...


function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    return true;
  } else {
    return false;
  }
}

let inputYear = +prompt("Enter a year:");
if (isLeapYear(inputYear)) {
  alert(inputYear + " is a leap year.");
} else {
  alert(inputYear + " is not a leap year.");
}


// 3. If the lengths of the sides of a triangle are denoted by a, b, and
// c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
// Calculate area of triangle using 2 functions


function calculateS(a, b, c) {
  return (a + b + c) / 2;
}

function calculateArea(a, b, c) {
  let s = calculateS(a, b, c);
  let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  return area;
}

let a = +prompt("Enter side a:");
let b = +prompt("Enter side b:");
let c = +prompt("Enter side c:");

let area = calculateArea(a, b, c);
alert("Area of triangle is: " + area.toFixed(2));


// 4. Write a function that receives marks received by a student in 3
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction
// and other are for average and percentage. Call those functions
// from mainFunction and display result in mainFunction.


function calculateAverage(m1, m2, m3) {
  return (m1 + m2 + m3) / 3;
}

function calculatePercentage(m1, m2, m3) {
  let totalMarks = 300; 
  let obtained = m1 + m2 + m3;
  return (obtained / totalMarks) * 100;
}

function mainFunction() {
  let sub1 = +prompt("Enter marks for Subject 1:");
  let sub2 = +prompt("Enter marks for Subject 2:");
  let sub3 = +prompt("Enter marks for Subject 3:");

  let avg = calculateAverage(sub1, sub2, sub3);
  let percent = calculatePercentage(sub1, sub2, sub3);

  alert("Average Marks: " + avg.toFixed(2));
  alert("Percentage: " + percent.toFixed(2) + "%");
}

mainFunction();


// 5. You have learned the function indexOf. Code your own custom
// function that will perform the same functionality. You can code
// for single character as of now.


function customIndexOf(str, char) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      return i; 
    }
  }
  return -1; 
}

let text = "Hello World";
let searchChar = prompt("Enter a character to find:");

let index = customIndexOf(text, searchChar);

if (index !== -1) {
  alert(`Character '${searchChar}' found at index ${index}`);
} else {
  alert(`Character '${searchChar}' not found.`);
}


// 6. Write a function to delete all vowels from a sentence. Assume
// that the sentence is not more than 25 characters long.


function removeVowels(sentence) {
  return sentence.replace(/[aeiouAEIOU]/g, ""); 
}

let input = prompt("Enter a sentence (max 25 characters):");

if (input.length > 25) {
  alert("Sentence is too long. Please enter less than 25 characters.");
} else {
  let result = removeVowels(input);
  alert("Sentence without vowels: " + result);
}


// 7. Write a function with switch statement to count the number of
// occurrences of any two vowels in succession in a line of text.
// For example, in the sentence 
// “Pleases read this application and give me gratuity”
// Such occurrences are ea, ea, ui.


function countSuccessiveVowels(text) {
  let count = 0;

  for (let i = 0; i < text.length - 1; i++) {
    let firstChar = text[i].toLowerCase();
    let secondChar = text[i + 1].toLowerCase();

    switch (firstChar) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
        switch (secondChar) {
          case 'a':
          case 'e':
          case 'i':
          case 'o':
          case 'u':
            count++;
            break;
        }
        break;
    }
  }

  return count;
}

let line = "Pleases read this application and give me gratuity";
let result = countSuccessiveVowels(line);
alert("Number of successive vowels: " + result);


// 8. The distance between two cities (in km.) is input through the
// keyboard. Write four functions to convert and print this
// distance in meters, feet, inches and centimeters.


function toMeters(km) {
  return km * 1000;
}

function toFeet(km) {
  return km * 3280.84;
}

function toInches(km) {
  return km * 39370.1;
}

function toCentimeters(km) {
  return km * 100000;
}

let distanceKm = +prompt("Enter distance between two cities in kilometers:");

alert("Distance in Meters: " + toMeters(distanceKm));
alert("Distance in Feet: " + toFeet(distanceKm).toFixed(2));
alert("Distance in Inches: " + toInches(distanceKm).toFixed(2));
alert("Distance in Centimeters: " + toCentimeters(distanceKm));


// 9. Write a program to calculate overtime pay of employees.
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour
// worked above 40 hours. Assume that employees do not work
// for fractional part of an hour.


function calculateOvertimePay(hoursWorked) {
  const regularHours = 40;
  const overtimeRate = 12;
  
  if (hoursWorked > regularHours) {
    let overtimeHours = hoursWorked - regularHours;
    let overtimePay = overtimeHours * overtimeRate;
    return overtimePay;
  } else {
    return 0; 
  }
}

let hours = +prompt("Enter total hours worked:");

let overtime = calculateOvertimePay(hours);

if (overtime > 0) {
  alert("Overtime Pay is Rs. " + overtime);
} else {
  alert("No Overtime. You worked 40 hours or less.");
}


// 10. A cashier has currency notes of denominations 10, 50 and
// 100. If the amount to be withdrawn is input through the
// keyboard in hundreds, find the total number of currency notes
// of each denomination the cashier will have to give to the
// withdrawer.


function calculateNotes(amount) {
  let hundred = Math.floor(amount / 100);
  let remainder = amount % 100;

  let fifty = Math.floor(remainder / 50);
  remainder = remainder % 50;

  let ten = Math.floor(remainder / 10);

  alert("Required notes:");
  alert("100s: " + hundred);
  alert("50s: " + fifty);
  alert("10s: " + ten);
}

let amount = +prompt("Enter amount to withdraw (multiple of 10):");

if (amount % 10 !== 0) {
  alert("Please enter amount in multiples of 10 only.");
} else {
  calculateNotes(amount);
}

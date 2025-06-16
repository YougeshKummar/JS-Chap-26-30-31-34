//  JS chap 30-34
// 1. Write a program that displays current date and time in your browser.

let x = new Date();
alert(x);

// 2. Write a program that alerts the current month in words. For example December.

let y = new Date();
let monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

let currentMonthName = monthNames[y.getMonth()];
alert("Current month is: " + currentMonthName);

// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show Sun.

let currentDa = new Date();
let dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

let currentDay = dayNames[currentDa.getDay()];
alert("Today is: " + currentDay);

// 4. Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.

const today = new Date();
const day = today.getDay(); 

if (day === 0 || day === 6) {
    console.log("Its Fun day");
} else {
    console.log("It's a regular day");
}

// 5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.

const todays = new Date();
const date = todays.getDate(); // Get the day of the month (1-31)

if (date < 16) {
    console.log("First fifteen days of the month");
} else {
    console.log("Last days of the month");
}

// 6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.

let currentDat = new Date();
minutesSinceEpoch = Math.floor(currentDat.getTime() / (1000 * 60)); 

console.log("Minutes since midnight, Jan. 1, 1970:", minutesSinceEpoch);

// 7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.

const currentTime = new Date();
const hours = currentTime.getHours(); 

if (hours < 12) {
    alert("It's AM");
} else {
    alert("It's PM");
}

// 8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named laterDate.

const laterDate = new Date(2020, 11, 31); 

console.log("Later Date:", laterDate);

// 9. Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015


const ramadanStart = new Date("June 18, 2015");

const currentDate = new Date(); // renamed to avoid conflict

const diffInMs = currentDate - ramadanStart;

const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

alert(`${diffInDays} days have passed since 1st Ramadan, 2015`);




// 10. Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.


 var start2015 = new Date("January 1, 2015");

   var milliseconds = start2015.getTime();

   var seconds = Math.floor(milliseconds / 1000);

   document.writeln("Seconds elapsed between Jan 1, 1970 and Jan 1, 2015: " + seconds);


// 11. Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.

  var currentDatess = new Date();

   var currentHour = currentDatess.getHours();

   currentDatess.setHours(currentHour + 1);
   document.writeln("Date and time one hour ahead: " + currentDatess);


//    12. Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?

var currentDates = new Date();

        var currentYear = currentDates.getFullYear();

        currentDates.setFullYear(currentYear - 100);

        alert("Date 100 years back: " + currentDates);

// 13. Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.

 var age = prompt("Enter your age:");

        age = parseInt(age);

        var currentYear = new Date().getFullYear();

        var birthYear = currentYear - age;

        document.writeln("Your age is: " + age + "<br>");
        document.writeln("Your birth year is: " + birthYear);


// 14. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,

// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge



 var customerName = "yougesh kummar";
        var currentMonth = new Date().toLocaleString('default', { month: 'long' });
        var numberOfUnits = 410;
        var chargesPerUnit = 16;
        var latePaymentSurcharge = 350;

        // Calculations
        var netAmount = numberOfUnits * chargesPerUnit;
        var grossAmount = netAmount + latePaymentSurcharge;

        // Round to 2 decimal places
        netAmount = netAmount.toFixed(2);
        grossAmount = grossAmount.toFixed(2);

        // Display the bill
        document.writeln("<b>Customer Name:</b> " + customerName + "<br>");
        document.writeln("<b>Current Month:</b> " + currentMonth + "<br>");
        document.writeln("<b>Number of Units:</b> " + numberOfUnits + "<br>");
        document.writeln("<b>Charges per Unit:</b> " + chargesPerUnit + "<br>");
        document.writeln("<b>Net Amount Payable (within Due Date):</b> " + netAmount + " PKR<br>");
        document.writeln("<b>Late Payment Surcharge:</b> " + latePaymentSurcharge + " PKR<br>");
        document.writeln("<b>Gross Amount Payable (after Due Date):</b> " + grossAmount + " PKR<br>");
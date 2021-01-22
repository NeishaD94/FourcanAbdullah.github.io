/*There are two teams, Nets and Knicks.They compete against each other 3 times.
The team with the highest average score wins a trophy!

Your tasks:
1. Calculate the average score for each team, using the test data below

2. Compare the team's average scores to determine the winner of the competition,
and print it to the console.Don't forget that there can be a draw, so test for that
as well(draw means they have the same average score)

3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points.Hint: Use a logical operator to test for minimum
score, as well as multiple else -if blocks.
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points.Otherwise, no team wins the trophy
Test data:
§ Data 1: Nets score 96, 108 and 89. Knicks score 88, 91 and 110

§ Data Bonus 1: Nets score 97, 112 and 101. Knicks score 109, 95 and 123
§ Data Bonus 2: Nets score 97, 112 and 101. Knicks score 109, 95 and 106
*/
console.log("Task (Data 1):")
let netsAve = (96 + 108 + 89) / 3;
let knicksAve = (88 + 91 + 110) / 3;
if (netsAve > knicksAve) {

    console.log("Nets Won They won with " + netsAve + " points.");
}
else if (netsAve < knicksAve) {
    console.log("Knicks Won, they won with " + knicksAve + " points.");
}
else if (netsAve === knicksAve) {
    console.log("its a Draw, both teams have " + knicksAve + " points.");
}


//§ Data Bonus 1: Nets score 97, 112 and 101. Knicks score 109, 95 and 123
console.log("Bonus Task (Data Bonus 1):")
netsAve = (97 + 112 + 101) / 3;
knicksAve = (109 + 95 + 123) / 3;
if ((netsAve > knicksAve) && (netsAve >= 100)) {

    console.log("Nets Won They won with " + netsAve + " points.");
}
else if ((netsAve < knicksAve) && (knicksAve >= 100)) {
    console.log("Knicks Won, they won with " + knicksAve + " points.");
}
else if ((netsAve === knicksAve) && (netsAve >= 100)) {
    console.log("its a Draw, both teams have " + knicksAve + " points.");
}

else {
    console.log("No Teams Won")
}

// § Data Bonus 2: Nets score 97, 112 and 101. Knicks score 109, 95 and 106
console.log("Bonus Task (Data Bonus 2):")
netsAve = (97 + 112 + 101) / 3;
knicksAve = (109 + 95 + 106) / 3;
if ((netsAve > knicksAve) && (netsAve >= 100)) {

    console.log("Nets Won They won with " + netsAve + " points.");
}
else if ((netsAve < knicksAve) && (knicksAve >= 100)) {
    console.log("Knicks Won, they won with " + knicksAve + " points.");
}
else if ((netsAve === knicksAve) && (netsAve >= 100)) {
    console.log("its a Draw, both teams with " + knicksAve + " points.");
}

else {
    console.log("No Teams Won")
}

/*Jason wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his
country, it's usual to tip 15% if the bill value is between 30 and 300. If the value is different, the tip is 20%.
1. Your task is to calculate the tip, depending on the bill value. Create a variable called 'tip' for this. Try not
to use an if/else statement.
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example:
'The bill was 275, the tip was 41.25, and the total value 316.25'
§ TEST DATA: Test for bill values 275, 28 and 430*/
// Bill value 275
let bill = 275;
let tip = 0;
let totalValue = bill;
switch (true) {
    case ((bill < 30) || (bill > 300)):
        tip = bill * .20;
        totalValue = totalValue + tip;
        break;
    case ((bill >= 30) && (bill <= 300)):
        tip = bill * .15;
        totalValue = totalValue + tip;
        break;
}
let statement = `The bill was ${bill}, the tip was ${tip}, and the total value is ${totalValue}.`
console.log(statement)

//Bill value 28
bill = 28;
tip = 0;
totalValue = bill;
switch (true) {
    case bill < 30 || bill > 300:
        tip = bill * .20;
        totalValue = totalValue + tip;
        break;
    case bill >= 30 && bill <= 300:
        tip = bill * .15;
        totalValue = totalValue + tip;
        break;
}
statement = `The bill was ${bill}, the tip was ${tip}, and the total value is ${totalValue}.`
console.log(statement)

//Bill value 430
bill = 430;
tip = 0;
totalValue = bill;
switch (true) {
    case bill < 30 || bill > 300:
        tip = bill * .20;
        totalValue = totalValue + tip;
        break;
    case bill >= 30 && bill <= 300:
        tip = bill * .15;
        totalValue = totalValue + tip;
        break;
}
statement = `The bill was ${bill}, the tip was ${tip}, and the total value is ${totalValue}.`
console.log(statement)

/*Create a function called celsiusToFahrenheit:
1. Store a celsius temperature into a variable. Convert it to fahrenheit and output "NN°C is NN°F".
Create a function called fahrenheitToCelsius;
2. Store a fahrenheit temperature into a variable. Convert it to celsius and output "NN°F is NN°C."*/


function celsiusToFahrenheit(value) {
    let fahrenheit = (value * (9 / 5)) + 32;
    let statement2 = `${value}\u00B0C is ${fahrenheit}\u00B0F`;
    console.log(statement2);


}

function fahrenheitToCelsius(value1) {
    let c = (value1 - 32) * (5 / 9);
    let statement3 = `${value1}\u00B0C is ${c}\u00B0F`;
    console.log(statement3);
}


let celsius = Number(prompt('Enter Celcius:'));
celsiusToFahrenheit(celsius);

let fahrenheit = Number(prompt('Enter Fahrenheit:'));
fahrenheitToCelsius(fahrenheit);
let firstName1 = "Lucas";
let firstName2 = "John";
let lucasHeight = 1.88;
let lucasWeight = 95;
let johnHeight = 1.76;
let johnWeight = 85;

const heightInfo = `${firstName1} and ${firstName2} are best friends. ${firstName1} is ${lucasHeight} meters tall and  ${firstName2} is ${johnHeight} meters tall.`;
const weightInfo = `${firstName1} and ${firstName2} have different weights. ${firstName1} weighs ${lucasWeight} kg and  ${firstName2} weighs ${johnWeight} kg.`;
console.log(heightInfo);
console.log(weightInfo);

let lucasBMI = lucasWeight / (lucasHeight ** 2);
let johnBMI = johnWeight / (johnHeight ** 2);
let lucasHigherBMI = lucasBMI > johnBMI;
let johnHigherBMI = lucasBMI < johnBMI;
console.log("So" + " " + firstName2 + " " + "has a heigher BMI then" + " " + firstName1 + ", that is" + " " + (johnHigherBMI) + ".");
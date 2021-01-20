let firstName1 = "Lucas";
let firstName2 = "John";
let lucasHeight = 1.88;
let lucasWeight = 95;
let johnHeight = 1.76;
let johnWeight = 85;

let lucasHeight1 = 1.69;
let lucasWeight1 = 78;
let johnHeight1 = 1.95;
let johnWeight1 = 92;


let lucasBMI = lucasWeight / (lucasHeight ** 2);
let johnBMI = johnWeight / (johnHeight ** 2);

let lucasBMI_1 = lucasWeight1 / (lucasHeight1 ** 2);
let johnBMI_1 = johnWeight1 / (johnHeight1 ** 2);
let lucasHigherBMI_1 = lucasBMI_1 > johnBMI_1;
let johnHigherBMI_1 = lucasBMI_1 < johnBMI_1;

let lucasHigherBMI = lucasBMI > johnBMI;
let johnHigherBMI = lucasBMI < johnBMI;

const heightInfo = `${firstName1} and ${firstName2} are best friends. ${firstName1} is ${lucasHeight} meters tall and  ${firstName2} is ${johnHeight} meters tall.`;
const weightInfo = `${firstName1} and ${firstName2} have different weights. ${firstName1} weighs ${lucasWeight} kg and  ${firstName2} weighs ${johnWeight} kg.`;
console.log(heightInfo);
console.log(weightInfo);
console.log("So" + " " + firstName2 + " " + "has a heigher BMI then" + " " + firstName1 + ", that is" + " " + (johnHigherBMI) + ".");
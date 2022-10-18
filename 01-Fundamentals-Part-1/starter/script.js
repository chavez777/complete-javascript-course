// let js = 'amazing';
// console.log(40 + 8 + 23 - 10);

// console.log("jonas");

// let firstName = "bob";
// console.log(firstName);

// // let t = ;
// // console.log(t)
// console.log(typeof null)
// let markMass = 78;
// let markHeight = 1.69;
// let johnMass = 92;
// let johnHeight = 1.95;
// let markBmi = markMass / markHeight ** 2;
// let johnBmi = johnMass / johnHeight ** 2;
// let markHigherBmi = markBmi > johnBmi;
// console.log(markBmi)
// console.log(johnBmi)
// console.log(markHigherBmi)

// const firstName = "jonas";
// const jonasnew = `I'm ${firstName}`;
// console.log(jonasnew)

// const age = 15;
// const isOldEnough = age >= 18;
// if (isOldEnough) {
//     console.log(`he can start dv🙌`);
// } else {
//     console.log(`he is too yong wait another ${18 - age} years`);

// }
// const birthYear = 1991;
// let century;
// if (birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }
// console.log(century);
// let markMass = 78;
// let markHeight = 1.69;
// let johnMass = 92;
// let johnHeight = 1.95;
// let markBmi = markMass / markHeight ** 2;
// let johnBmi = johnMass / johnHeight ** 2;
// if (markBmi > johnBmi) {
//     console.log(`mark' bmi (${markBmi}) is higher than john's (${johnBmi})`);
// } else {
//     console.log(`john' bmi (${johnBmi}) is higher than mark's (${markBmi})`);
// }
//ytpe conversion
// const year = '1991';
// console.log(year + 19);
// console.log(Number("jonas"));
// console.log(typeof NaN);
// console.log(String(23), 23);

// //type coercion
// console.log('i am ' + 23 + " year");
// console.log('23' - '10' - 3);

// // 5 falsy value:0,'',undefined,null,NaN
// const money = 0;
// if (money) {
//     console.log("hi");
// } else {
//     console.log("hey");
// }
// let height;
// if (height) {
//     console.log("yay");
// } else {
//     console.log("no");
// }

// const age = 18;
// if (age === 18) {
//     console.log('you hit 18');
// }

// const favorite = Number(prompt("what is your favor number"));
// console.log(favorite);
// console.log(typeof favorite);
// if (favorite === 23) {
//     console.log(`${favorite} is a amazing number`)
// } else if (favorite === 7) {
//     console.log(`${favorite} is a also amazing number`)
// } else {
//     console.log(`${favorite} is not 23 or 7`)
// }
// if (favorite !== 23) {
//     console.log(`why not ${favorite} `)
// }

// const hasDriverLicense = true;
// const hasGoodVision = true;
// console.log(hasDriverLicense && hasGoodVision);
// const age = 23;
// console.log(`${age > 18 ? 'i like wine' : 'i like water'}`)

const bills = 430;
let tip = (((bills >= 50) && (bills <= 300)) ? 0.15 : 0.2) * bills;
console.log(`The bill was ${bills} the tip was ${tip}, and the total value is ${bills + tip}`);
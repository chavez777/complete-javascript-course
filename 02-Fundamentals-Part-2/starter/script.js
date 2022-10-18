'use strict';

// let hasDriveLicense = false;
// const passTest = true;
// if (passTest) hasDriveLicense = true;
// if (hasDriveLicense) console.log('i can drive');

// //const interface = 'audio';
// function logger() {
//     console.log(' my name is jonas')
// }
// //calling
// logger();

// function fruitProcessor(apples, organes) {
//     //console.log(apples, organes);
//     const juice = `juice with ${apples} apples and ${organes} organes`;
//     return juice;
// }

// const applejuice = fruitProcessor(5, 0);
// console.log(fruitProcessor(5, 0));
// function calcAge1(birthyear) {
//     const age = 2037 - birthyear;
//     return age;
// }

// const age1 = calcAge1(1991);
// console.log(age1);
// //function expression
// const calcAge2 = function (birthyear) {
//     return 2037 - birthyear;
// }
// const age2 = calcAge2(1991);
// console.log(age1, age2);

//arrow function
// const calcAge3 = birth => 2037 - birth;
// const age3 = calcAge3(1991);
// console.log(age3);


// const yearUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retire in ${retirement} years`;
// }

// console.log(yearUntilRetirement(1991, 'jonas'));


// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }
// function fruitProcessor(apples, organes) {
//     const applePieces = cutFruitPieces(apples);
//     const organesPieces = cutFruitPieces(organes);
//     const juice = `juice with ${applePieces} piece of apples and ${organesPieces} piece of organes`;
//     return juice;
// }
// console.log(fruitProcessor(2, 3));

// const calcAverage = function (firstNum, secondNum, thirdNum) {
//     return (firstNum + secondNum + thirdNum) / 3;
// }
// const checkWinner = function (avgDol, avgKol) {
//     if (avgDol >= 2 * avgKol) {
//         console.log(`Dolhins win ${avgDol} vs ${avgKol}`)
//     }
//     else if (avgKol >= 2 * avgDol) {
//         console.log(`Dolhins win ${avgKol} vs ${avgDol}`)
//     } else {
//         console.log("no one win")
//     }
// }

// checkWinner(30, 15);

//const friends = ['mike', 'jack', 'peter'];
// console.log(friends);

// const years = new Array(1991, 1992, 1993, 2002)
// //console.log(friends['mike']);
// friends[2] = 'jay';
// console.log(friends);
// const firstName = 'jonas';
// const jonas = [firstName, 'white', 19, friends];
// console.log(jonas);
// const friends = ['mike', 'jack', 'peter'];
// //add element
// friends.push('jay');
// console.log(friends);
// friends.unshift('jhon');
// console.log(friends);

// //remove element
// friends.pop();
// friends.shift();
// console.log(friends)
// friends.push(23);
// console.log(friends.indexOf('jack'))
// console.log(friends.includes('mike'))
// if (friends.includes('jack')) {
//     console.log("yeah");
// }
// const calcTip = function (bill) {
//     const tip = (bill >= 50 && bill <= 300) ? 0.15 * bill : 0.2 * bill;
//     return tip;
// }
// console.log(calcTip(100));
// const bills = new Array(125, 555, 44);
// const total = new Array(calcTip(bills[0]) + bills[0], calcTip(bills[1]) + bills[1], calcTip(bills[2]) + bills[2]);
// console.log(total);

// const jonas = {
//     firstName: "Jonas",
//     lastName: 'ma',
//     age: 48,
//     job: 'teacher',
//     friend: ["jack", 'peter', 'steven']
// };
// console.log(jonas);
// console.log(jonas.lastName);
// console.log(jonas['lastName']);

// //const interest= prompt("hello");
// if(jonas[interest]){
//     console.log(jonas[interest])
// }else{
//     console.log('weong request')
// }
// jonas.location='china';
// jonas['twitter']='@jonas.com';
// console.log(jonas);
// console.log(`${jonas.firstName} has ${jonas.friend.length} friend, and his best frient is called ${jonas.friend[0]}`)

// const jonas = {
//     firstName: "Jonas",
//     lastName: 'ma',
//     birthYear: 1991,
//     job: 'teacher',
//     friend: ["jack", 'peter', 'steven'],
//     hasDl:true,

//     calcAge: function(){
//         this.age=2037-this.birthYear;
//         return this.age;
//     },
//     getSummary:  function(){
//         return `${this.firstName} is a ${this.calcAge()} year old ${this.job}, and he ${this.hasDl?'has a':' do not have a'} driver' license`
//     }
// };
// console.log(jonas.getSummary())
// const mark = {
//     firstName: "Mark",
//     lastName: 'Miller',
//     mass:78,
//     height:1.69,
//     calcBMI: function(){
//         this.BMI=this.mass/(this.height**2);
//         return this.BMI
//     }
// };
// const john = {
//     firstName: "john",
//     lastName: 'Smith',
//     mass:92,
//     height:1.95,
//     calcBMI: function(){
//         this.BMI=this.mass/(this.height**2);
//         return this.BMI
//     }
// };

// console.log(mark.calcBMI(),john.calcBMI());

// for(let rep=1;rep<=10;rep++){
//     console.log(`lifting weight rep ${rep}`)
// }

const jonasArray=[
    'jonas',
    'jack',
    2037-1991,
    'teacher',
    ['leo','jb','kk'],
    true

];
const types =[];
for(let i=0;i<jonasArray.length;i++){
    if(typeof jonasArray[i]!=='string') break;
    console.log(jonasArray[i], typeof jonasArray[i]);

    //types[i]=typeof jonasArray[i];
    //types.push(typeof jonasArray[i]);
}
console.log(types);

let dice = Math.trunc(Math.random()*6)+1;
while(dice !==6){
    console.log(`you rolled a ${dice}`);
    dice = Math.trunc(Math.random()*6)+1;
    if(dice ===6){
        console.log(`we do get a ${dice}`)
    }
}

const bills=[22,295,176,440,37,105,10,1100,86,52];
const tips=[];
const total=[];
const calcTip = function (bill) {
    const tip = (bill >= 50 && bill <= 300) ? 0.15 * bill : 0.2 * bill;
    return tip;
};
for(let i=0;i<bills.length;i++){
    tips.push(calcTip(bills[i]));
    total.push(bills[i]+tips[i]);
};
// const calcAverage = function( arr){
//     let sum=0;
//     for(let i=0;i<arr.length;i++){
//         sum+=arr[i];
//     }
//     return sum/arr.length;

// };
function calcAverage ( arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum/arr.length;

};
console.log(calcAverage(total));
console.log(calcAverage(tips));
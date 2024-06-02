
// whether a given number is positive or negative.
// function checkNumber(num) {
//     if (num > 0) {
//         console.log(num + " is positive.");
//     } else if (num < 0) {
//         console.log(num + " is negative.");
//     } else {
//         console.log(num + " is zero.");
//     }
// }

// // if a number is even or odd.
// function oddevenNum(num) {
//     if (num % 2 === 0){
//         console.log(num + "is even.");
//     }
//     else{
//         console.log(num + "is odd");
//     }
// }

// // ticket price based on age
// function ticketPrice(age){
//     if (age < 12){
//         console.log("The ticket price is $5");
//     }
//     else if (age < 18){
//         console.log("The ticket price is $10");
//     }
//     else if (age < 60){
//         console.log("The ticket price is $20");
//     }
//     else{
//         console.log(" The ticket price is $15.");
//     }
// }

// // discount based on the purchase amount.
// function discountAmount(price){
//     if (price >= 100){
//         console.log("You have a discount of 20");
//     }
//     else if (age >= 50){
//         console.log("You have a discount of 10");
//     }
//     else{
//         console.log("You have 0 discount");
//     }
// }

// // BMI calculaor

// function calculateBMI (weight, height){
//     return weight / (height * height);

// }

// function categorizeBMI (bmi){
//         if (bmi < 18.5) {
//             return "underweight";
//         } 
//         else if (bmi < 24.9) {
//             return "normal weight";
//         } 
//         else if (bmi < 29.9) {
//             return "overweight";
//         } 
//         else {
//             return "obese";
//         }
//     }



// // Print the numbers from 12 to 24
for (let i = 12; i <= 24; i++) {
    console.log(i);
}

// // Print the ODD numbers from 7 to 31

// for (let i = 7; i <=31; i +=2){
//     console.log(i);
// }

// // FizzBuzz
// for (let i = 0; i <= 100; i++){
//     if (i % 3 == 0 && i % 5 ==0){
//         console.log("FizzBuzz")
//     }
//     else if(i % 3 == 0){
//         console.log("Fizz")
//     }
//     else if (i % 5 == 0){
//         console.log("Buzz")
//     }   
//     else{
//         console.log(i)
//     }
// }

// // Print all the elements of an array
// for (let index = 0; index < array.length; index++) {
//     console.log(array[index]);
// }

// // the sum of all the numbers in an array
// let sum = 0;
// for (let i = 0; i < array.length; i++){
//     sum += array(i); 
// }
// console.log(sum)
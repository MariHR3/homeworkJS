"use strict";

const credits = 23580;
const pricePerDroid = 3000;

const number = prompt('Кількість дроїдів');
const totalPrice = number * pricePerDroid;

if (number === null) {
    console.log("Скасовано користувачем!");

} else if (totalPrice > credits) {
    console.log("Недостатньо коштів на рахунку!");

} else {
  console.log(`Ви купили ${number} дроїдів, на рахунку залишилося ${credits - totalPrice} кредитів.`);
}
"use strict";

let input;
const numbers = [];
let total = 0;

while (true) {
    input = prompt("Введіть число");
    if (input === null) {
      break;
    }

    input = Number(input);
    if (Number.isNaN(input)) {
      alert("Було написано не число, спробуйте ще раз");
    } else {
      numbers.push(input);
    }

}

if(numbers.length > 0) {
    for(let i = 0; i < numbers.length; i += 1) {
      total += numbers[i];
    }
  } 
  
console.log(`Загальна сума чисел дорівнює ${total}`);
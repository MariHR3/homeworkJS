"use strict";

let total = 0;

while (true){
    let number = prompt("Введіть число");

    if (number === null){
        break;
    }


    if (isNaN(number)){
        alert("Було написано не число, спробуйте ще раз");
    }
    else{
        total += Number(number);
    }
    
}

alert(`Загальна сума чисел дорівнює ${total}`);
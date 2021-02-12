"use strict";

const userAge = 55;

if (userAge >= 0 && userAge <= 16) {
    console.log('Діти');
} else if (userAge >= 17 && userAge <= 60) {
    console.log('Дорослі');
} else if (userAge >= 61 && userAge <= 100) {
    console.log('Пенсіонери');
}

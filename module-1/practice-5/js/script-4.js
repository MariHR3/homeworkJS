"use strict";

let characterName = '';


while (characterName.length < 6){
    characterName = prompt('Введіть ім"я улюбленого героя')
    if (characterName.length >= 6){
        break;
    }
    else {
        console.log(characterName);
    }
}
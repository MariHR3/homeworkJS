"use strict";

const userName = prompt('Введіть ім"я');
const userSurname = prompt('Введіть прізвище');

if (userName.length > 4 && userSurname.length > 5) {
    alert(userName.length + userSurname.length);
} else {
    alert('Упс!');
}

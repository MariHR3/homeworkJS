"use strict";

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function (login) {
    if (login.length >= 4 && login.length <= 16) {
        return true;
      } 
      else {
        console.log('Помилка! Логін повинен бути від 4 до 16 символів');
      }
};

const isLoginUnique = function (allLogins, login) {
    if(allLogins.includes(login)) {
        console.log('Такий логін уже використовується!');
        return false;
    }
    return true;
};

const addLogin = function (allLogins, login) {
    if (isLoginValid(login) && isLoginUnique(logins, login)) {
        allLogins.push(login);
        console.log('Логін успішно доданий!');
    }
};

/*
 * Виклич функції для перевірки працездатності твоєї реалізації.
 */

console.log(addLogin(logins, 'Ajax')); // 'Логін успішно доданий!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такий логін вже використовується!'
console.log(addLogin(logins, 'Zod')); // 'Помилка! Логін повинен бути від 4 до 16 символів'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Помилка! Логін повинен бути від 4 до 16 символів'



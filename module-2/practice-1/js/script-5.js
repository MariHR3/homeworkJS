"use strict";

const styles = ['Джаз', 'Блюз'];
styles.push('Рок-н-ролл');

console.log(styles);

styles.splice(1, 1, 'Класика');
const styleDeleted = styles.splice(0, 1);
console.log(styleDeleted);
styles.unshift('Реп', 'Реггі');

console.log(styles);

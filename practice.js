const path = require('path');
const colors = require('colors');
const greetings = require('./my_modules/greetings');

console.log(colors.yellow('I love brown colors'));

const person = 'Rhoda';

console.log(colors.black(greetings.appreciation(person)));
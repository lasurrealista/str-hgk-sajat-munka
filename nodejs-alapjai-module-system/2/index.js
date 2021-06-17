const { generateUserList, getUserNames } = require('./utils');
const userService = require('./utils');

const users = [
  {
    firstName: 'Ana',
    lastName: 'de Armas',
    age: 30,
  },
  {
    firstName: 'Bobby',
    lastName: 'Ewing',
    age: 52,
  },
  {
    firstName: 'Ernesto',
    lastName: 'Guevara',
    age: 17,
  },
];

console.log(userService.generateUserList(users));
console.log(userService.getUserNames(users));

console.log(Object.isFrozen(getUserNames));
console.log(Object.isFrozen(generateUserList));
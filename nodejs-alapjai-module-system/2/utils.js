const generateUserList = (users) =>
  users.map(user => ({
    isAdult: user.age > 18,
    fullName: `${user.firstName} ${user.lastName}`
  })
  );

const getUserNames = (users) =>
  users.map(user => `${user.firstName} ${user.lastName}`).join(', ');

Object.freeze(getUserNames);
Object.freeze(generateUserList);

module.exports = {
  generateUserList, getUserNames
};
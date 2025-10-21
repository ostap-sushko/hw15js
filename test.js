// Отримати загальну суму балансу (поле balance) всіх користувачів.

const calculateTotalBalance = (users) =>
  users.reduce((acc, item) => acc + item.balance, 0);

console.log(calculateTotalBalance(users)); // 20916

//Масив імен всіх користувачів у яких є друг із зазначеним ім'ям.
const getUsersWithFriend = (users, friendName) => {
  return users
    .filter((user) => user.friends.includes(friendName))
    .map((user) => user.name);
};

console.log(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]

//Масив імен (поле name) людей, відсортованих в залежності від кількості їх друзів (поле friends)
const getNamesSortedByFriendsCount = (users) =>
  [...users]
    .sort((a, b) => a.friends.length - b.friends.length)
    .map(({ name }) => name);
console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

//Отримати масив всіх умінь всіх користувачів (поле skills), при цьому не має бути повторюваних умінь і вони повинні бути відсортовані в алфавітному порядку.
const getSortedUniqueSkills = (users) =>
  users
    .flatMap(({ skills }) => skills)
    .filter((item, idx, array) => array.indexOf(item) === idx)
    .sort((a, b) => a.localeCompare(b));
console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]

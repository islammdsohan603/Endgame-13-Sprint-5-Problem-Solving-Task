// find()

const users = [
  { id: 1, name: "Sohan" },
  { id: 2, name: "Rahim" },
  { id: 3, name: "Karim" },
];

const user = users.find((user) => user.id === 2);
console.log(user);

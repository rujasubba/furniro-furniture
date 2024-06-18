const users = [
    { name: "John", age: 25 },
    { name: "Jane", age: 30 },
    { name: "Joe", age: 22 }
];
// Use map to create a new array with only the names
const names = users.map(user => user.name);

console.log(names);
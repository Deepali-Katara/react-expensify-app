//object destructutring

// const person = {
//   name: "deepali",
//   age: 21,
//   location: {
//     city: "philodelphia",
//     temp: 72,
//   },
// };
// const { name: firstName, age } = person;
// // const name = person.name;
// // const age = person.age;
// console.log(`${firstName} is ${age}`);
// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//   title: "Ego",
//   author: "deepali",
//   publisher: {
//     //name: "penguin",
//   },
// };
// const { name: publisherName = "self-published" } = book.publisher;
// console.log(publisherName);

// const address = ["Reedha", "Mathura", "UP", "281301"];
// const [, city, state = "New york"] = address;
// console.log(`you are in ${city} ${state} `);

// Array destructuring

const item = ["coffee(hot)", "$2.00", "$2.50", "$3.00"];
const [itemName, , mediumPrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}`);

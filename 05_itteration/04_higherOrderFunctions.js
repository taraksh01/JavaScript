const skills = ["html", "css", "js", "react", "github", "git"];

// const values = skills.forEach((item) => console.log(item));
// console.log(values);

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const myNewNumbers = myNumbers.filter((num) => num > 5);
console.log(myNewNumbers);

// Filter using forEach
// const filteredNumbers = [];
// myNumbers.forEach((num) => {
//   if (num > 5) {
//     filteredNumbers.push(num);
//   }
// });
// console.log(filteredNumbers);

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

// const userBooks = books.filter((book) => book.genre === "History");
const userBooks = books.filter(
  (book) => book.publish >= 1995 && book.genre === "History"
);

// console.log(userBooks);

// const addTen = myNumbers.map((number) => number * 10);
// console.log(addTen);
const chainedValue = myNumbers
  .map((number) => number * 10)
  .map((number) => number + 2)
  .filter((number) => number > 50);
// console.log(chainedValue);

const sumWithInitial = myNumbers.reduce((sum, number) => {
  console.log(`${sum} ${number}`);
  return sum + number;
}, 10);
console.log(sumWithInitial);

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 999,
  },
  {
    itemName: "mobile dev course",
    price: 5999,
  },
  {
    itemName: "data science course",
    price: 12999,
  },
];

const totalPrice = shoppingCart.reduce((total, item) => {
  return total + item.price;
}, 0);

console.log(totalPrice);

let i = 0;
while (i < 10) {
  console.log(`value of i = ${i}`);
  i++;
}

let arr = 0;
const myArray = [
  "flash",
  "batman",
  "ironman",
  "superman",
  "black panther",
  "thor",
  "loki",
];

while (arr < myArray.length) {
  console.log(myArray[arr]);
  arr++;
}

do {
  console.log(arr);
  arr++;
} while (arr < myArray.length);

for (let index = 0; index < 10; index++) {
  if (index == 7) {
    console.log("7 is my favorite");
  }
  console.log(index);
}

const object = { 0: "0", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6" };
for (const key in object) {
  if (Object.hasOwnProperty.call(object, key)) {
    const element = object[key];
    console.log(element);
  }
}

for (let i = 0; i < 2; i++) {
  console.log(`inner loop: ${i}`);
  for (let j = 0; j < 3; j++) {
    console.log(`outer loop: ${j} inner loop: ${i}`);
  }
}

for (let i = 0; i < 10; i++) {
  const element = i;
  if (element == 5) {
    console.log("5 detected");
    break;
  }
  console.log(`Index value: ${element}`);
}

for (let i = 0; i < 10; i++) {
  const element = i;
  if (element == 5) {
    console.log("5 detected");
    continue;
  }
  console.log(`Index value: ${element}`);
}

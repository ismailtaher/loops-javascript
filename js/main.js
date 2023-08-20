// Loops

let myNumber = 50;

// While Loop

/* while (myNumber < 50) {
  myNumber++;
  console.log(myNumber);
}
 */

/* while (myNumber < 50) {
  myNumber += 2;
  console.log(myNumber);
} */

// Do not creat an Endless loop

// Do-While Loop

/* do {
  console.log(myNumber);
} while (myNumber < 50);
 */

// For Loop

/* for (let i = 0; i <= 10; i++) {
  console.log(i);
} */

/* let name = "Ismail";
for (let i = 0; i < name.length; i++) {
  console.log(name.charAt(i));
}
 */

let name = "Ismail";
let counter = 0;
let myLetter;
while (true) {
  myLetter = name[counter];
  console.log(myLetter);
  if (counter === 1) {
    counter += 2;
    continue;
  }
  if (myLetter === "l") break;
  counter++;
}
console.log(counter);

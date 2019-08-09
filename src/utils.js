var i = 0;
let j = 0;
const j = 0;
console.log('Value of i before function ', i);
console.log('Value of j before function ', j);

function xyz() {
  let j = 5;
  i = 7;
  console.log('Value of j inside function ', j);
  console.log('Value of i inside function ', i);
}
xyz();
console.log('Value of i after function ', i);
console.log('Value of j after function ', j);

function abc() {
  let j = 8;
  // do sometihing with i
  console.log('Value of i inside function ', i);
  console.log('Value of j inside function ', j);
}
abc();

console.log('Value of J last ', j);
console.log('Value of i last ', i);

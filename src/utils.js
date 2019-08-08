var i = 0;
let j = 0;
console.log('Value of i before function ', i);
console.log('Value of j before function ', j);

function xyz() {
  i = 6;
  j = 6;
  console.log('Value of i inside function ', i);
  console.log('Value of j inside function ', j);
}
xyz();
console.log('Value of i after function ', i);
console.log('Value of j after function ', j);

function abc() {
  i = i + 6;
  // 6
  j = j + 6;
  console.log('Value of i inside function ', i);
  console.log('Value of j inside function ', j);
}
abc();

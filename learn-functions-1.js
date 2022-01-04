//Learning HIGHER-ORDER FUNCTIONS
// That is a function that either:
// A. Accepts a function as an argument.
// B. Returns a function.

/* document.addEventListener("click", ourAmazingFunction);
function ourAmazingFunction() {
  console.log("Thank you for clicking.");
} */

function createMultiplier(multiplier) {
  return function (x) {
    return x * multiplier;
  };
}

let doubleMe = createMultiplier(2);
let tripleMe = createMultiplier(3);
let quadrupleMe = createMultiplier(4);

console.log(doubleMe(10));
console.log(tripleMe(10));
console.log(quadrupleMe(10));

//Really High Order Functions

let myColors = ["red", "orange", "yellow"];

myColors.forEach(saySthNice);

function saySthNice(color) {
  console.log("That color " + color + " is great.");
}

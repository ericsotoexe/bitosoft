// ANONYMOUS FUNCTIONS
// Has not name.

/* document.addEventListener("click", function () {
  alert("Thanks for clicking.");
}); */

// ARROW FUNCTIONS
// Use a minimalist syntax. using =>...

/* document.addEventListener("click", () => {
  alert("Thanks for clicking.");
}); */

// Or more minimalist

/* document.addEventListener("click", () => alert("Thanks for clicking.")); */

/* let myNums = [10, 500, 2000];
let doubledNums = myNums.map((x) => x * 2);
console.log(doubledNums); */

// FUNCTIONS HOISTING
// The order of our code-line matters in JS, but when it comes to FUNCTIONS, it will look for the reference in the entire code. But it will not count if is a ANONYMOUS FUNCTION.

/* coolF();

function coolF() {
  console.log("This is superb");
}

let cool = () => console.log("This is cool.");
cool(); */

// TEMPLATE LITERALS ``

/* let myN = "Eric";
INSTEAD OF console.log("Hello, my name is " + myN + ". How are you?");
console.log(`Hello, my name is ${myN}, how are you?`); */

// SEMICOLONS
// let myN = "Eric"; console.log(`Hello, my name is ${myN}, how are you?`);

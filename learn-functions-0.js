function greet(theName, favColor, aka) {
  let text00 = "Hello, my name is ";
  let text01 = ", and my favorite color is ";
  let text02 = ", and my friends call me ";
  let quotes = "''";
  let dot = ".";
  console.log(
    text00 + theName + text01 + favColor + text02 + quotes + aka + quotes + dot
  );
}
greet("Joshua", "blue", "Jay");
greet("Sophia", "pink", "Pita");
function tripleMe(num) {
  let msg00 = "The number ";
  let msg01 = " multiplied by 3 is: ";
  let msg02 = ".";
  let q = "''";
  console.log(msg00 + q + num + q + msg01 + num * 3 + msg02);
}
tripleMe(10);

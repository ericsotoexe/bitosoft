//An array is a collection made up from multiple items.
let myNum = 7;
let myNums = [3, 5, 7];
let myColors = ["green", "blue", "red"]; // as code, it is read like 0 , 1 , 2.

console.log(myNums);
console.log(myNums[2]); //Calling just the item in position 2.
console.log(myColors);
myColors.push("purple"); //Adding an item from an array.
console.log(myColors);
myColors.splice(0, 1); //Removing an item s from an array. first value is to select the item, the second refers to how many items are going got be removed from there.
console.log(myColors);

let myName = "Eric";
console.log(myName);
console.log(myName.toUpperCase());

let yourNum = 3.14;
console.log(yourNum);
console.log(yourNum.toFixed());

let myObjects = [
  //This is an array with objects.
  { name: "Meowphelot", species: "cat" },
  { name: "Barkphelot", species: "dog" },
  { name: "Parrotphelot", species: "parrot" },
];
console.log(myObjects[2].species); //Calling an array's object's propriety.

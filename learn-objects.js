//In order to create an object, we have to equal the THING with brackets...
//An object is a container.
//Each propriety of and object it is separate from a coma.
let cat = {
  name: "Rolly",
  age: 4,
  // You can add an object INSIDE of another object
  foods: {
    fav: "Tuna",
    lessFav: "Mice",
  },
  //
  eyeColor: "blue",
  meow() {
    console.log("Meeeeoooowwwwwwwww");
  },
};
cat.meow();
console.log(cat.foods.fav);

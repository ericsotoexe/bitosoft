// Differences between RETURNING and MUTATING.
// MUTATING is changing or modifying.

let pets = [
  { name: "Mewosalot", species: "cat", age: 2 },
  { name: "Barksalot", species: "dog", age: 3 },
  { name: "Doggo", species: "dog", age: 8 },
];

console.log(pets.push({ name: "Puppster", species: "dog", age: 1 }));

// RETURNING functions:
// .map is a HIGH LEVEL function.

let ourTest = pets.map(nameOnly);

function nameOnly(x) {
  return x.name;
}

console.log(ourTest);

// RETURNING functions:
// .filter is a HIGH LEVEL function.

let dogs = pets.filter(onlyDogs);

function onlyDogs(x) {
  return x.species == "dog";
}

console.log(dogs);

function onlyBabies(x) {
  return x.age < 3;
}

let babyDogNames = pets.filter(onlyDogs).filter(onlyBabies).map(nameOnly);

console.log(babyDogNames);

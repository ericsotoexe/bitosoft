// SCOPE is the biggest source of confusion regarding VARIABLES.
// CONTEXT is the biggest source of confusion regarding OBJECTS.

// SCOPE.
// SCOPE is a one way street; begins in words and move out words.
// It will always looking the closer location to home.
// The objective is to know WHERE we access a VARIABLE from.
// lET helps to CREATE a variable & uses BLOCK scope.
// VAR uses function SCOPE, it is more accessible.

let pName = "Link";

function firstRound() {
  if (2 + 2 == 4) {
    pName = "Zelda";
  }
}

firstRound();
console.log("In the global scope: ", pName);

// CONTEXT: THIS keyboard.
// THIS does not point towards the inclosing object.
// THIS points towards the the object that is EXECUTING the current function.

let peter = {
  firstName: "Peter",
  lastName: "Parker",
  driveCar() {
    /* function testIng() {
      console.log(this);
    }
    testIng(); */
    console.log(this.firstName + " " + this.lastName + " is driving a car.");
  },
};

peter.driveCar();

function breath() {
  console.log(
    this.firstName + " " + this.lastName + " just inhaled and exhaled."
  );
}

breath.call(peter);

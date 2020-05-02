// [x] Create a Ninja class
class Ninja {
  constructor(name, health, speed, strength) {
    // [x] add an attribute: name
    this.name = name;
    // [x] add an attribute: health
    this.health = health;
    // [x] add a attribute: speed - give a default value of 3
    this.speed = 3;
    // [] add a attribute: strength - give a default value of 3
  }
  // [] add a method: sayName() - This should log that Ninja's name to the console
  sayName() {
    console.log(this.name);
  }
  // [] add a method: showStats() - This should show the Ninja's name, strength, speed, and health.
  showStats() {}
  // [] add a method: drinkSake() - This should add +10 Health to the Ninja
  drinkSake() {
    this.health += 10;
  }
}

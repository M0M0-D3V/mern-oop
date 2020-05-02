// [x] Create a Ninja class
class Ninja {
  constructor(name, health, speed = 3, strength = 3) {
    // [x] add an attribute: name
    this.name = name;
    // [x] add an attribute: health
    this.health = health;
    // [x] add a attribute: speed - give a default value of 3
    this.speed = speed;
    // [x] add a attribute: strength - give a default value of 3
    this.strength = strength;
  }
  // [x] add a method: sayName() - This should log that Ninja's name to the console
  sayName() {
    console.log(this.name);
  }
  // [x] add a method: showStats() - This should show the Ninja's name, strength, speed, and health.
  showStats() {}
  // [x] add a method: drinkSake() - This should add +10 Health to the Ninja
  drinkSake() {
    this.health += 10;
  }
}

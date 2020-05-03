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
  showStats() {
    console.log(this.name, this.health, this.speed, this.strength);
  }
  // [x] add a method: drinkSake() - This should add +10 Health to the Ninja
  drinkSake() {
    this.health += 10;
  }
}

const ninja1 = new Ninja("Hyabusa", 40);
ninja1.sayName();
ninja1.showStats();

// Super Ninja Assignment
// [x] create a class Sensei that inherits from the Ninja class
class Sensei extends Ninja {
  constructor(name) {
    super(name, 200, 10, 10);
    // [x] add an attribute: wisdom - default to 10
    this.wisdom = 10;
  }
  // [x] create a method: speakWisdom()
  speakWisdom() {
    // [x] create a method: drinkSake()
    super.drinkSake();
    console.log(
      "What one programmer can do in one month, two programmers can do in two months."
    );
    const newStats = super.showStats();
    console.log(newStats);
  }
}
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();

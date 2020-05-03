// Build main Card class. All cards share these properties
class Card {
  constructor(name, cost) {
    this.name = name;
    this.cost = cost;
  }
}

// Unit cards are a specific type of Card that also have other properties
class Unit extends Card {
  constructor(name, cost, power, res) {
    super(name, cost); // Unit card still needs a name and cost because it is extension of Card class
    this.power = power; // Unit cards can attack and will use power
    this.res = res; // short for Resilience. will be used in attack phase
  }
  //Unit cards feature an Attack capability
  attack(target) {
    // [] if check target is actually a Unit Card
    if (target instanceof Unit) {
      // [] reduce target res by power
      target.res -= this.power; // target is an instance of Unit which has Unit and Card properties
    } else {
      throw new Error("Target must be a Unit Card!");
    }
  }
}

// [] Effect cards have their own properties as well but still a card
class Effect extends Card {
  constructor(name, cost, target) {
    // [] stuff about properties of this Effect Card
  }
  // [] build methods that activate Play
  play(target) {
    if (target instanceof Unit) {
      // [] implement card text here
    } else {
      throw new Error("Target must be a Unit Card!");
    }
  }
}

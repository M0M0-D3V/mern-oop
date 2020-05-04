// Build main Card class. All cards share these properties
class Card {
  // Card is parent Class
  constructor(name, cost) {
    this.name = name;
    this.cost = cost;
  }
}

// Unit cards are a specific type of Card that also have other properties
class Unit extends Card {
  // Unit is child Class of Card
  constructor(name, cost, power, res) {
    super(name, cost); // Unit card still needs a name and cost because it is extension of Card class
    this.power = power; // Unit cards can attack and will use power
    this.res = res; // short for Resilience. will be used in attack phase
  }
  //Unit cards feature an Attack capability
  attack(target) {
    // [x] if check target is actually a Unit Card
    if (target instanceof Unit) {
      // [x] reduce target res by power
      target.res -= this.power; // target is an instance of Unit which has Unit and Card properties
    } else {
      throw new Error("Target must be a Unit Card!");
    }
  }
}

// [x] Effect cards have their own properties as well but still a card
class Effect extends Card {
  // Effect is another child Class of Card
  constructor(name, cost, text, stat, magnitude) {
    // [x] stuff about properties of this Effect Card
    super(name, cost); // Effect card still needs a name and cost as inherited from parent Card
    this.text = text;
    this.stat = stat;
    this.magnitude = magnitude;
  }
  // [] build methods that activate Play
  play(target) {
    if (target instanceof Unit) {
      // [] implement card text here
      // increase or decrease either power or resilience of target Unit based on text
      // search text if 'raise' or 'lower'
      if (this.text.includes("increase")) {
      } else if (this.text.includes("reduce")) {
      }
      // check for power or resilience
      if (this.text.includes("power")) {
      } else if (this.text.includes("resilience")) {
      }
    } else {
      throw new Error("Target must be a Unit Card!");
    }
  }
}

// Build Player Class..
class Player {
  constructor(name) {
    this.name = name;
  }
}
// *******************************************
// Make instances of the following Unit Cards
// *******************************************
// name	cost	power	resilience
// Red Belt Ninja	3	3	4
// Black Belt Ninja	4	5	4
// ==========================================
// [x]  Make an instance of "Red Belt Ninja"
let redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);
// [x]  Make an instance of "Black Belt Ninja"
let blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);
// *******************************************
// Make instances of the following Effect Cards
// *******************************************
// name	cost	text	stat	magnitude
// Hard Algorithm	2	increase target's resilience by 3	resilience	+3
// Unhandled Promise Rejection	1	reduce target's resilience by 2	resilience	-2
// Pair Programming	3	increase target's power by 2	power	+2
// ==========================================
// [x]  Make an instance of "Hard Algorithm"
let hardAlgo = new Effect(
  "Hard Algorithm",
  2,
  "increase target's resilience by 3",
  resilience,
  3
);
// [x]  Make an instance of "Unhandled Promise Rejection"
let unhandledPromRej = new Effect(
  "Unhandled Promise Rejection",
  1,
  "reduce target's resilience by 2",
  resilience,
  2
);
// [x]  Make an instance of "Pair Programming"
let pairProgramming = new Effect(
  "Pair Programming",
  3,
  "increase target's power by 2",
  power,
  2
);
// ==========================================
// []  Play out the scenario
// ******************************************
// turn	action
let Player1 = new Player("Player1");
// [] 1	Player 1 summons "Red Belt Ninja"
// [] 1	Player 1 plays "Hard Algorithm" on "Red Belt Ninja"
// [] 2	Player 2 summons "Black Belt Ninja"
let Player2 = new Player("Player2");
// [] 2	Player 2 plays "Unhandled Promise Rejection" on "Red Belt Ninja"
// [] 3	Player 1 plays "Pair Programming" on "Red Belt Ninja"
// [] 3	Player 1 has "Red Belt Ninja" attack "Black Belt Ninja"

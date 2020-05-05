class Card {
  constructor(name, cost) {
    this.name = name;
    this.cost = cost;
  }
}
class Unit extends Card {
  constructor(name, cost, power, resilience) {
    super(name, cost);
    this.power = power;
    this.resilience = resilience;
  }
  attack(target) {
    if (target instanceof Unit) {
      target.resilience -= this.power;
    } else {
      throw new Error("Target must be a unit Card!");
    }
  }
}

class Effect extends Card {
  constructor(name, cost, text, stat, magnitude) {
    super(name, cost);
    this.text = text;
    this.stat = stat;
    this.magnitude = magnitude;
  }
  play(target) {
    if (target instanceof Unit) {
      switch (this.stat) {
        case "resilience":
          target.resilience += this.magnitude;
          break;
        case "power":
          target.power += this.magnitude;
          break;
      }
    }
  }
}
class Player {
  constructor(name, deck) {
    this.deck = deck;
    this.name = name;
  }
  // pass in a parameter of the card we want to funciton
  // that
  summon(cardToSummon) {
    console.log(`${cardToSummon} has been summoned`);
    console.log(this.deck[cardToSummon]);
    return this.deck[cardToSummon];
  }
  cast(cardToCast) {
    console.log(`${cardToCast} has been summoned`);
    console.log(this.deck[cardToCast]);
    return this.deck[cardToCast];
  }
}

const isiah = new Player("Isiah", {
  hardAlgorithm: new Effect(
    "Hard Algorithm",
    2,
    "Increase target's resilience by 3",
    "resilience",
    3
  ),
  unhandledPromiseRejection: new Effect(
    "UnhandledPromiseRejection",
    1,
    "reduce target's resilience by 2",
    "resilience",
    -2
  ),
  pairProgramming: new Effect(
    "Pair Programming",
    3,
    "Increase target's power by 2",
    "power",
    2
  ),
  redBeltNinja: new Unit("Red Belt Ninja", 3, 3, 4),
  blackBeltNinja: new Unit("Black Belt Ninja", 4, 5, 4),
});

const monica = new Player("Monica", {
  hardAlgorithm: new Effect(
    "Hard Algorithm",
    2,
    "Increase target's resilience by 3",
    "resilience",
    3
  ),
  unhandledPromiseRejection: new Effect(
    "UnhandledPromiseRejection",
    1,
    "reduce target's resilience by 2",
    "resilience",
    -2
  ),
  pairProgramming: new Effect(
    "Pair Programming",
    3,
    "Increase target's power by 2",
    "power",
    2
  ),
  redBeltNinja: new Unit("Red Belt Ninja", 3, 3, 4),
  blackBeltNinja: new Unit("Black Belt Ninja", 4, 5, 4),
});

const p1RedBeltNinja = isiah.summon("redBeltNinja");
console.log("red belt ninja before\n");
console.log(p1RedBeltNinja);
const p1HardAlgorithm = isiah.cast("hardAlgorithm");
p1HardAlgorithm.play(p1RedBeltNinja);
console.log("red belt ninja after\n");
console.log(p1RedBeltNinja);

const p2BlackBeltNinja = monica.summon("blackBeltNinja");
console.log("before");
console.log(p2BlackBeltNinja);
const p2UnhandledPromiseRejection = monica.cast("unhandledPromiseRejection");
p2UnhandledPromiseRejection.play(p1RedBeltNinja);
console.log("red belt ninja after unhandled rejection");
console.log(p1RedBeltNinja);
console.log("after");
console.log(p2BlackBeltNinja);
const p1PairProgramming = isiah.cast("pairProgramming");
p1PairProgramming.play(p1RedBeltNinja);
console.log(p1RedBeltNinja);
p1RedBeltNinja.attack(p2BlackBeltNinja);
console.log(p2BlackBeltNinja);

// function playingField() {

// }

// function gameRules() {

// }

// function isPlaying() {

// }

// function graveyard() {

// }

// isiah.deck.hardAlgorithm.play(isiah.deck.redBeltNinja);
// console.log(isiah.deck.redBeltNinja.resilience);

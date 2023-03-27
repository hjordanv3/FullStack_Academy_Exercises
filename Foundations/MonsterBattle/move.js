/* Write your Move class here! */

///////////////////////////////////////

/* Write your Move subclasses here! */

class Move {
    constructor(name, power, accuracy) {
      this.name = name;
      this.power = power;
      this.accuracy = accuracy;
    }
  
    didHit() {
      return Math.random() < this.accuracy;
    }
  }
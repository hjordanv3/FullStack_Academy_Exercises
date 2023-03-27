/* Write your Monster class here! */

///////////////////////////////////////

/* Write your Monster subclasses here! */

class Monster {
    constructor(name, hp, atk, def, move) {
      this.name = name;
      this.hp = hp;
      this.atk = atk;
      this.def = def;
      this.move = move;
    }
  
    attack(other) {
      if (this.move.didHit()) {
        const damage = Math.floor(this.atk * this.move.power / other.def);
        other.hp -= damage;
        return `${this.name} used ${this.move.name} to deal ${damage} damage to ${other.name}!`;
      } else {
        return `${this.name} missed with ${this.move.name}!`;
      }
    }
  }

  
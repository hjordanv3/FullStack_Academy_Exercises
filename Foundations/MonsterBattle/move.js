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

class Fireball extends Move {
constructor() {
super("Fireball", 120, 0.75);
}
}

class Confusion extends Move {
constructor() {
super("Confusion", 80, 1);
}
}

class IceBeam extends Move {
constructor() {
super("Ice Beam", 95, 0.90);
}
}

class ThunderShock extends Move {
constructor() {
super("Thunder Shock", 50, 0.95);
}
}
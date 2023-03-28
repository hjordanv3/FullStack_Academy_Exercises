class Monster {
  constructor(name, hp, atk, def, move) {
    this.name = name;
    this.hp = hp;
    this.maxHp = hp; // added
    this.atk = atk;
    this.def = def;
    this.move = move;
  }

  attack(other) {
    // ...
  }

  render(imgSrc) {
    const monsterElement = document.createElement("div");
    monsterElement.classList.add("monster");

    const headerElement = document.createElement("div"); // updated
    headerElement.classList.add("monster-header");
    monsterElement.appendChild(headerElement);

    const nameElement = document.createElement("h2");
    nameElement.textContent = this.name;
    headerElement.appendChild(nameElement);

    const hpElement = document.createElement("p");
    hpElement.textContent = `HP: ${this.hp} / ${this.maxHp}`; // updated
    headerElement.appendChild(hpElement);

    const hpBarElement = document.createElement("div");
    hpBarElement.classList.add("hp-bar");
    headerElement.appendChild(hpBarElement);

    const hpBarProgressElement = document.createElement("div");
    hpBarProgressElement.classList.add("hp-bar-progress");
    hpBarProgressElement.style.width = `${(this.hp / this.maxHp) * 100}%`;
    hpBarElement.appendChild(hpBarProgressElement);

    const hpBarValueElement = document.createElement("div");
    hpBarValueElement.classList.add("hp-bar-value");
    hpBarValueElement.textContent = `${this.hp} / ${this.maxHp}`; // updated
    hpBarElement.appendChild(hpBarValueElement);

    const imgElement = document.createElement("img");
    imgElement.src = imgSrc;
    monsterElement.appendChild(imgElement);

    return monsterElement;
  }
}

class Dragon extends Monster {
  constructor() {
    const move = new Fireball();
    super("Dragon", 200, 50, 20, move);
  }

  render() {
    return super.render("dragon.png");
  }
}

class Moth extends Monster {
  constructor() {
    super("Moth", 300, 15, 60, new Confusion());
  }

  render() {
    const monsterElement = super.render("moth.png");
    monsterElement.classList.add("moth");
    return monsterElement;
  }
}
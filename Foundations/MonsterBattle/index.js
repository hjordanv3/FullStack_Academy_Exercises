// index.js
const fireball = new Fireball();
const confusion = new Confusion();

const player = new Dragon();
const opponent = new Moth();

const battle = new Battle(player, opponent);

const fightButton = document.getElementById("fight-button");
fightButton.addEventListener("click", () => {
  battle.fight();
  battle.render();
});
class Battle {
  constructor(player, opponent) {
  this.player = player;
  this.opponent = opponent;
  this.battleOver = false;
  }
  
  checkWin() {
    if (this.player.hp <= 0 && this.opponent.hp <= 0) {
      return "Both parties lose!";
    } else if (this.player.hp <= 0) {
      return `${this.opponent.name} wins!`;
    } else if (this.opponent.hp <= 0) {
      return `${this.player.name} wins!`;
    } else {
      return null;
    }
  }
  
  fight() {
    let events = "";
  
    events += this.player.attack(this.opponent) + " ";
    events += this.opponent.attack(this.player) + " ";
  
    const winner = this.checkWin();
    if (winner !== null) {
      this.battleOver = true;
      events += `The winner is ${winner}`;
    }
  
    return events.trim();
  }
  render() {
  const playerSection = document.querySelector("section.player");
  const playerElement = this.player.render();
  playerSection.replaceChildren(playerElement);
  const opponentSection = document.querySelector("section.opponent");
  const opponentElement = this.opponent.render();
  opponentSection.replaceChildren(opponentElement);
  }
  }
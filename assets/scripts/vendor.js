const monsterHealthBar = document.getElementById('monster-health');
const playerHealthBar = document.getElementById('player-health');
const bonusLifeEl = document.getElementById('bonus-life');

const attackBtn = document.getElementById('attack-btn');
const strongAttackBtn = document.getElementById('strong-attack-btn');
const healBtn = document.getElementById('heal-btn');
const logBtn = document.getElementById('log-btn');

function adjustHealthBars(maxLife) {
  monsterHealthBar.max = maxLife;
  monsterHealthBar.value = maxLife;
  playerHealthBar.max = maxLife;
  playerHealthBar.value = maxLife;
}

function dealMonsterDamage(damage) {
  const dealtDamage = Math.random() * damage;
  monsterHealthBar.value = +monsterHealthBar.value - dealtDamage;
  return dealtDamage;
}

function dealPlayerDamage(damage) {
  const dealtDamage = Math.random() * damage;
  playerHealthBar.value = +playerHealthBar.value - dealtDamage;
  return dealtDamage;
}

function increasePlayerHealth(healValue) {
  playerHealthBar.value = +playerHealthBar.value + healValue;
}

function resetGame(value) {
  playerHealthBar.value = value;
  monsterHealthBar.value = value;
}

function removeBonusLife() {
  bonusLifeEl.parentNode.removeChild(bonusLifeEl);
}

function addBonusLife() {
  const bonusLifeEl = document.getElementById('bonus-life');

  if (!bonusLifeEl) {
    const newBonusLifeEl = document.createElement('span');
    newBonusLifeEl.setAttribute('id', 'bonus-life');
    newBonusLifeEl.textContent = '1';

    const playerHealthEl = document.querySelector(
      '#health-levels h2:last-of-type'
    );
    playerHealthEl.appendChild(newBonusLifeEl);
  } else {
    bonusLifeEl.textContent = '1';
  }
}

function setPlayerHealth(health) {
  playerHealthBar.value = health;
}

const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 14;
const STRONG_ATTACK_VALUE = 17;
const HEAL_INCREASE = 3;
const HEAL_COUNT = 0;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let healBtnCount = HEAL_COUNT;

adjustHealthBars(chosenMaxLife);

function attackMonster(mode) {
  let maxDamage;

  if (mode === 'ATTACK') {
    maxDamage = ATTACK_VALUE;
  } else if (mode === 'STRONG_ATTACK') {
    maxDamage = STRONG_ATTACK_VALUE;
  }

  const monsterDamage = dealMonsterDamage(maxDamage);
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentMonsterHealth -= monsterDamage;
  currentPlayerHealth -= playerDamage;
  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert('You won!');
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert('You lost!');
  } else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
    alert("It's a tie!");
  }
}

function attackHandler() {
  attackMonster('ATTACK');
}

function strongAttackHandler() {
  attackMonster('STRONG_ATTACK');
}

function healPLayerHandler() {
  if (healBtnCount <= 0) {
    increasePlayerHealth(HEAL_INCREASE);
    console.log(healBtnCount);
  } else if (healBtnCount >= 1) {
    alert('You have used all your heal abilities!');
    console.log(healBtnCount);
  }
  healBtnCount++;
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPLayerHandler);

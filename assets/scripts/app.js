const ATTACK_VALUE = 10;

let chosenMaxLife = 100;
let currentMosterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function attackHandler() {
  const damage = dealMonsterDamage(ATTACK_VALUE);
  currentMosterHealth -= damage;
}

attackBtn.addEventListener('click', attackHandler);

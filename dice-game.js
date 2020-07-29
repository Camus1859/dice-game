let rollDice = document.getElementById('roll-dice')
rollDice.addEventListener('click', randomDice)

function randomDice(){
  let dice = Math.floor(Math.random() * 6) + 1
  let diceDOM = document.querySelector('.dice')
  diceDOM.style.display = "block";
  diceDOM.src = "dice-" + dice + ".gif";
}
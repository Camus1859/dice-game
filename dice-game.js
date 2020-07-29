let rollDice = document.getElementById('roll-dice')
rollDice.addEventListener('click', randomDice)

function randomDice(){
  let dice = Math.floor(Math.random() * 6) + 1
  let diceDOM = document.querySelector('.dice')
  diceDOM.style.display = "block";
  diceDOM.src = "dice-" + dice + ".gif";
}


function displayOnStart(){
 let totalPoints = document.querySelectorAll('.total-points-number-both')
let currentPoints = document.querySelectorAll('.points-current-number')
let cashInButton = document.getElementById('cash-in-button')

totalPoints.forEach(item => {
  item.style.visibility  = "hidden"
})
currentPoints.forEach(item => {
  item.style.visibility = "hidden"
})

cashInButton.style.display =  "none"


}

displayOnStart()

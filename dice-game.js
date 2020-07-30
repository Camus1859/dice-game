let dice = 0;
let rollDice = document.getElementById('roll-dice')
rollDice.addEventListener('click', randomDice)
let roundScore = 0
let score = [0,0]
let activePlayer = 1


function randomDice(){
  dice = Math.floor(Math.random() * 6) + 1
  let diceDOM = document.querySelector('.dice')
  diceDOM.style.display = "block";
  diceDOM.src = "dice-" + dice + ".gif";
  gameStarts()
}



function gameStarts(){
  if (dice !== 1) {
    roundScore += dice;
   document.getElementById('current-' + activePlayer).textContent = roundScore 
  } else{
    document.getElementById('current-' + activePlayer).textContent = 0
    roundScore = 0 
    activePlayer === 1 ?  activePlayer = 2 : activePlayer = 1;
  }
}



let cashInButton = document.getElementById('cash-in-button')
cashInButton.addEventListener('click', cashInPoints)


function cashInPoints(){
  document.getElementById('score-'+ activePlayer).textContent = roundScore
  document.getElementById('current-' + activePlayer).textContent = 0
  activePlayer === 1 ?  activePlayer = 2 : activePlayer = 1;
  roundScore = 0 




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
displayOnStart();

let startButton = document.getElementById('start')
startButton.addEventListener('click', scoresAppear)
function scoresAppear(){
  let totalPoints = document.querySelectorAll('.total-points-number-both')
  let currentPoints = document.querySelectorAll('.points-current-number')
  let cashInButton = document.getElementById('cash-in-button')
    totalPoints.forEach(item => {
      item.style.visibility  = "visible"
    })
    currentPoints.forEach(item => {
      item.style.visibility = "visible"
    })
    cashInButton.style.display =  "block"
}



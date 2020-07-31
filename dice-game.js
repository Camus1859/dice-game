let dice = 0;
let roundScore = 0
let totalScore1 = 0
let totalScore2 = 0
let activePlayer = 1
let rollDice = document.getElementById('roll-dice')
let cashInButton = document.getElementById('cash-in-button')
let clear = document.getElementById('clear')
clear.disabled = true
let startButton = document.getElementById('start')

startButton.addEventListener('click', scoresAppear)
clear.addEventListener('click', clearButton)
cashInButton.addEventListener('click', cashInPoints)

function randomDice(){
  dice = Math.floor(Math.random() * 6) + 1
  let diceDOM = document.querySelector('.dice')
  diceDOM.style.display = "block";
  diceDOM.src = "dice-" + dice + ".gif";
  gameStarts()
}

function opacityValue() {
  if (activePlayer === 1){
    document.getElementById('the-2').style.opacity = ".3"
    document.getElementById('the-1').style.opacity = "1"

  }else if(activePlayer === 2){
    document.getElementById('the-1').style.opacity = ".3"
    document.getElementById('the-2').style.opacity = "1"
  }
}

function gameStarts(){
  if (dice !== 1) {
    roundScore += dice;
   document.getElementById('current-' + activePlayer).textContent = roundScore 
   opacityValue()
  } else{
    document.getElementById('current-' + activePlayer).textContent = 0
    roundScore = 0 
    activePlayer === 1 ?  activePlayer = 2 : activePlayer = 1;
    opacityValue()
  }
}

function winner(){
  if (totalScore1 >= 30) {
    clearButton()
    document.getElementById('score-1').textContent = "WINNER!"
    document.getElementById('the-2').style.opacity = ".3"
    document.getElementById('roll-dice').disabled = true
    document.getElementById('clear').disabled = true
    document.getElementById('cash-in-button').disabled = true
  }
  else if(totalScore2 >= 30){
    clearButton()
    document.getElementById('score-2').textContent = "WINNER!"
    document.getElementById('the-1').style.opacity = ".3"
    document.getElementById('roll-dice').disabled = true
    document.getElementById('clear').disabled = true
    document.getElementById('cash-in-button').disabled = true
  }
}

function cashInPoints(){
  if (activePlayer ===1){
    totalScore1  = totalScore1 + roundScore
    document.getElementById('score-'+ activePlayer).textContent = totalScore1
    roundScore = 0
    document.getElementById('current-' + activePlayer).textContent = 0
    activePlayer === 1 ?  activePlayer = 2 : activePlayer = 1;
    opacityValue()
  }
  else{
    totalScore2  = totalScore2 + roundScore
    document.getElementById('score-'+ activePlayer).textContent = totalScore2
    roundScore = 0
    document.getElementById('current-' + activePlayer).textContent = 0
    activePlayer === 1 ?  activePlayer = 2 : activePlayer = 1;
    opacityValue()
  }
  winner()
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

function scoresAppear(){
  document.getElementById('score-1').textContent = 0
  document.getElementById('score-2').textContent = 0
  document.getElementById('roll-dice').disabled = false
  document.getElementById('clear').disabled = false
  document.getElementById('the-2').style.opacity = ".3"
  document.getElementById('the-1').style.opacity = "1"
  document.getElementById('cash-in-button').disabled = false
  document.getElementById('start').disabled = true
  rollDice.addEventListener('click', randomDice)
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

function clearButton(){
  document.getElementById('start').disabled = false
  document.getElementById('cash-in-button').disabled = true
  document.getElementById('roll-dice').disabled = true
  let totalPoints = document.querySelectorAll('.total-points-number-both')
  let currentPoints = document.querySelectorAll('.points-current-number')
    totalPoints.forEach(item => {
      item.textContent  = Number("0")
    })
    currentPoints.forEach(item => {
      item.textContent = Number("0")
    })
    document.getElementById('the-1').style.opacity = "1"
    document.getElementById('the-2').style.opacity = "1"
  dice = 0;
  roundScore = 0
  totalScore1 = 0
  totalScore2 = 0
  activePlayer = 1
}

function gameRules(){
  alert("Roll the die to accumlate points, cash in those points when you choose. But be aware that if you roll a 1 you lose all points that were not cashed-in. First player to 30 points Wins!")
}
gameRules()



var computerChoice;
var options = ["rock", "paper", "scissors"]
var userChoice;
var compare
var display = document.getElementById('display')
var choices = document.getElementsByClassName("choice");
choices.innerHTML;
computerChoice = options[Math.floor(Math.random() * options.length)];

for(var i = 0; i < choices.length; i++) {
  choices[i].addEventListener("click", function() {
    userChoice = this.id;
    document.getElementById('computer').innerHTML = "the computer picked " + computerChoice;
    compare = userChoice + computerChoice
    if (userChoice === 'paper' && computerChoice === 'rock') {
      display.innerHTML = 'player wins!'
  } else if (userChoice === 'rock' && computerChoice === 'scissors'){
    display.innerHTML = "player wins!"
  } else if (userChoice === 'scissors' && computerChoice === 'paper'){
    display.innerHTML = "player wins!"
  } else if (computerChoice === 'paper' && userChoice === 'rock') {
    display.innerHTML("computer wins")
  } else if (computerChoice === 'rock' && userChoice === 'scissors') {
    display.innerHTML = "computer wins"
  } else if (computerChoice === 'scissors' && userChoice === 'paper') {
    display.innerHTML = "computer wins"
  } else if (computerChoice === userChoice) {
    display.innerHTML = "its a tie"
  };
  });
}




console.log(userChoice)

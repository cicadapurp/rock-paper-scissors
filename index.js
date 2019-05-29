
var computerChoice;
var options = ["rock", "paper", "scissors"]
var userChoice;
var compare
var choices = document.getElementsByClassName("choice");
choices.innerHTML;
computerChoice = options[Math.floor(Math.random() * options.length)];

for(var i = 0; i < choices.length; i++) {
  choices[i].addEventListener("click", function() {
    userChoice = this.id;
    document.getElementById('computer').innerHTML = "the computer picked " + computerChoice;
    compare = userChoice + computerChoice;
    if (userChoice === 'paper' && computerChoice === 'rock') {
    alert("player wins!")
  } else if (userChoice === 'rock' && computerChoice === 'scissors'){
    alert("player wins!")
  } else if (userChoice === 'scissors' && computerChoice === 'paper'){
    alert("player wins!")
  } else if (computerChoice === 'paper' && userChoice === 'rock') {
    alert("computer wins")
  } else if (computerChoice === 'rock' && userChoice === 'scissors') {
    alert("computer wins")
  } else if (computerChoice === 'scissors' && userChoice === 'paper') {
    alert("computer wins")
  } else if (computerChoice === userChoice) {
    alert("its a tie")
  };
  });
}




console.log(userChoice)

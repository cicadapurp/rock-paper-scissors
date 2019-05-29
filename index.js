
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
    if (userChoice === computerChoice) {
      alert('its a tie')
    } else {
        alert("can find winner")
    }
  });
}




console.log(userChoice)

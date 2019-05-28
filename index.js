

console.log("test")
var options = ["rock", "paper", "scissors"]
var userChoice;
var computerchoice
var choices = document.getElementByClassName("choice");
console.log(choices);


for(var i = 0; i < choices.length; i++) {
  choices[i].addEventListener("click", function() {
    userChoice = this.id;
    //display choices
    //get the comp choice figure out winner
    //figure out winner
  });
}

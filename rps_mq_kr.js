// var weapons = ['rock', 'paper', 'scissors']
// var weaponOfChoice = weapons[parseInt(Math.random()*weapons.length) %3];
//
// var user = ("Please choose rock paper or scissors");
// console.log(user)
// console.log(weaponOfChoice);
//
// if (user === weaponOfChoice) {
//   console.log("You have tied with the computer. No one wins.")
// } else if ((user === "rock" && weaponOfChoice === "scissors") || (user === "scissors" && weaponOfChoice === "paper") || (user === "paper" && weaponOfChoice === "rock")) {
//   console.log("You won this round");
//
// } else {
//   console.log("You lost this round");
// }

var weapons = ["rock", "paper", "scissors"];

var playerOneWeapon = weapons[parseInt(Math.random()*weapons.length) %3];
var playerTwoWeapon = weapons[parseInt(Math.random()*weapons.length) %3];

console.log(playerOneWeapon);
console.log(playerTwoWeapon);

var user1score= 0; user1score < 3; user1score++;


if (playerOneWeapon === playerTwoWeapon) {
  console.log("You have tied with the computer. No one wins.")
} else if ((playerOneWeapon === "rock" && playerTwoWeapon === "scissors") || (playerOneWeapon === "scissors" && playerTwoWeapon === "paper") || (playerOneWeapon === "paper" && playerTwoWeapon === "rock")) {
  console.log("You won this round, your new score is " + (user1score++));
  var newscore = user1score++
  console.log(newscore);
} else {
  console.log("You lost this round");
}

// for (var play = 0; play <= 6; play++) {
//   console.log("Player One has played " + playerOneWeapon + " and player 2 has played " + playerTwoWeapon);
// }

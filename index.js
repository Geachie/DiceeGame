"use strict";

const randomNumber1 = Math.ceil(Math.random() * 6);
const randomNumber2 = Math.ceil(Math.random() * 6);
console.log(randomNumber1, randomNumber2);

document.querySelector(".img1").src = `images/dice${randomNumber1}.png`;
document.querySelector(".img2").src = `images/dice${randomNumber2}.png`;

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerHTML = "Draw!";
}

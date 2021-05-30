var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var dice1 = "./images/dice" + randomNumber1 + ".png";
document.querySelector(".img1").src = dice1;

var randomNumber2 = Math.floor(Math.random() * 6 + 1);
var dice2 = "./images/dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src", dice2); // Can do like this too

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerText = "🚩Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerText = "Player 2 Wins!🚩";
} else {
    document.querySelector("h1").innerText = "Draw!";
}
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSrc = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSrc);

var randomNumber2 = Math.floor(Math.random()* 6) + 1;

var randomDice = "dice" + randomNumber2 + ".png";

var randomImageSrc2 = "images/" + randomDice;

document.querySelectorAll("img")[1].setAttribute("src", randomImageSrc2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🏁 Player 1 Wins!";
    document.querySelector(".player1").innerHTML = "Winner!";
} else if(randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "🏁 Player 2 Wins!";
    document.querySelector(".player2").innerHTML = "Winner!";
} else if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Draw!"
    
}
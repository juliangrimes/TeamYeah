
var hands = ["rock", "paper", "scissors"];
  function getHand() {return hands[parseInt(Math.random()*10)%3;];
  };

var playerOne = {
    name: "mariah",
    getHand: getHand
  };

var playerTwo = {
  name: "minaj"
  getHand: getHand
};

function playRound(playerOne,playerTwo) {
  var playerOne = playerOne.hands();
  var playerTwo = playerTwo.hands();
  var winner;
  if (playerOne = "Scissors" && playerTwo = "paper" || 
      playerOne = "Rock" && playerTwo = "Scissors" ||
      playerOne = "Paper" && playerTwo = "Rock"){
        winner = playerOne.name;
        playerOne.winner++;
      }
  else if (playerOne !== playerTwo){
        winner = playerTwo.name;
        playerTwo.winner++;
      }
  else if (playerOne === playerTwo){
    console.log("It's a tie");
  }
};






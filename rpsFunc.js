# TeamYeah
RPS game homework, Julian, Latori, and Heather


var playerOneScore = 0
var playerTwoScore = 0

 var hands = ["rock", "paper", "scissors"];
   function getHand() {
     var myIndex = parseInt(Math.random()*10)%3;
    return hands[myIndex];
  };

  var playerOne = {
         name: "mariah",
         getHand: getHand
  };

  var playerTwo = {
        name: "minaj"
        getHand: getHand
 };

//Confused how to set up the playRound function
function playRound() {
  console.log(playerOne.getHand, playerTwo.getHand)
};

//while loop to continue to run the game until playerOneWins or playerTwoWins is met
while (playerOneWins < 3 && playerTwoWins <3) {console.log ('Rock, Paper, Scissors, Shoot! Anything you want to do!')}

//Conditions to determine winner
if (playerOne.getHand === 0 && playerTwo.getHand === 0); {
  console.log (playerOne.name + "got rock");
  console.log (playerTwo.name + "got rock");
  console.log ("It's a tie!");
}
// Remember to duplicate the above code for paper 1 and scissors 2

    else if (playerOne.getHand === 0 && playerTwo.getHand === 1); {
      playerTwoScore ++;
      console.log (playerOne.name + "got rock");
      console.log (playerTwo.name + "got paper");
      console.log (playerTwo.name + "wins");
    }

    else if (playerOne.getHand === 0 && playerTwo.getHand === 2); {
      playerOneScore++;
      console.log (playerOne.name + "got rock");
      console.log (playerTwo.name + "got scissors");
      console.log (playerOne.name + "wins");
    }

    else if (playerOne.getHand === 1 && playerTwo.getHand === 0); {
      playerOneScore++;
      console.log (playerOne.name + "got paper");
      console.log (playerTwo.name + "got rock");
      console.log (playerOne.name + "wins");
    }

    else if (playerOne.getHand === 1 && playerTwo.getHand === 1); {
      console.log (playerOne.name + "got paper");
      console.log (playerTwo.name + "got paper");
      console.log ("It's a tie!");
    }

    else if (playerOne.getHand === 1 && playerTwo.getHand === 2); {
      playerTwoScore++;
      console.log (playerOne.name + "got paper");
      console.log (playerTwo.name + "got scissors");
      console.log (playerTwo.name + "wins");
    }

    else if (playerOne.getHand === 2 && playerTwo.getHand === 2); {
      console.log (playerOne.name + "got scissors");
      console.log (playerTwo.name + "got scissors");
      console.log ("It's a tie!");
    }

    else if (playerOne.getHand === 2 && playerTwo.getHand === 0); {
      playerTwoScore++;
      console.log (playerOne.name + "got scissors");
      console.log (playerTwo.name + "got rock");
      console.log (playerTwo.name + "wins");
    }

    else if (playerOne.getHand === 2 && playerTwo.getHand === 1); {
      playerOneScore++;
      console.log (playerOne.name + "got scissors");
      console.log (playerTwo.name + "got paper");
      console.log (playerOne.name + "wins");
    }}

//Should a break be inserted to stop the loop?
    if playerOneScore === 3 {
      console.log("Congratulations" + playerOne.name + "wins the game!");
    }
      else {
        console.log("Congratulations" + playerTwo.name + "wins the game!")
      }

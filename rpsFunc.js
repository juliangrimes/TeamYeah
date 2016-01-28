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

// here is what I did. It's a bit shortened to save time
function playRound(playerOne, playerTwo) {
  var p1Hand = p1.hands();
  var p2Hand = p2.hands();
  var winner;
};

//while loop to continue to run the game until playerOneWins or playerTwoWins is met
while (playerOneWins < 3 && playerTwoWins <3) {console.log ('Rock, Paper, Scissors, Shoot! Anything you want to do!')}

// run an 'if' statement for the conditions to deteremine if player1 wins. 'else' player2 or tie
if (p1 === "scissor" && p2 === "paper" || p1 === "paper" && p2 === "rock" || p1 === "rock" && p2 === "scissors")
{winner = p1.name; p1.win++;}
else if (p1 !== p2)
{winner = p2.name; p2.win++;}
else if(p1 === p2){console.log("It's a tie")}

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

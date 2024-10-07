let playGame = () => {
    let getComputerChoice = () => {
      let ch = Math.floor(Math.random() * 3);
      if (ch == 0) {
        return "rock";
      }
      if (ch == 1) {
        return "paper";
      }
      if (ch == 2) {
        return "scissors"; 
      }
    };
  
    let getUserChoice = () => {
      let ch = prompt("Enter your choice e.g., rock / paper / scissors");
      return ch.toLowerCase();
    };
  
    var humanScore = 0;
    var computerScore = 0;
  
    let playRound = () => {
      const computerChoice = getComputerChoice(); // Get new computer choice
      const userChoice = getUserChoice(); // Get new user choice
  
      if (computerChoice == "rock") {
        if (userChoice == "rock") {
          console.log(
            "Draw. Computer choice: " + computerChoice + " | Human Choice: " + userChoice
          );
        } else if (userChoice == "paper") {
          console.log(
            "Human Won. Computer choice: " + computerChoice + " beaten by Human Choice: " + userChoice
          );
          humanScore += 1;
        } else if (userChoice == "scissors") {
          console.log(
            "Computer Won. Computer choice: " + computerChoice + " beats Human Choice: " + userChoice
          );
          computerScore++;
        }
      } else if (computerChoice == "paper") {
        if (userChoice == "rock") {
          console.log(
            "Computer Won. Computer choice: " + computerChoice + " beats Human Choice: " + userChoice
          );
          computerScore++;
        } else if (userChoice == "paper") {
          console.log(
            "Draw. Computer choice: " + computerChoice + " | Human Choice: " + userChoice
          );
        } else if (userChoice == "scissors") {
          console.log(
            "Human Won. Computer choice: " + computerChoice + " beaten by Human Choice: " + userChoice
          );
          humanScore += 1;
        }
      } else if (computerChoice == "scissors") {
        if (userChoice == "rock") {
          console.log(
            "Human Won. Computer choice: " + computerChoice + " beaten by Human Choice: " + userChoice
          );
          humanScore += 1;
        } else if (userChoice == "paper") {
          console.log(
            "Computer Won. Computer choice: " + computerChoice + " beats Human Choice: " + userChoice
          );
          computerScore++;
        } else if (userChoice == "scissors") {
          console.log(
            "Draw. Computer choice: " + computerChoice + " | Human Choice: " + userChoice
          );
        }
      }
      console.log(
        "Human Score: " + humanScore + " | Computer Score: " + computerScore
      );
    };
  
    // Loop to play 5 rounds
    for (let j = 0; j < 5; j++) {
      playRound(); // Call playRound() without passing any parameters
    }
  
    // Declare winner
    if (humanScore > computerScore) {
      console.log("Human is the winner of the game");
    } else if (computerScore > humanScore) {
      console.log("Computer is the winner of the game");
    } else {
      console.log("It's a Draw!!!!");
    }
  };
  
  playGame();
  
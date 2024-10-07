console.log("script connected");

let getComputerChoice = () => {
  let ch = Math.floor(0 + Math.random() * 3);
  if (ch == 0) {
    return "rock";
  } else if (ch == 1) {
    return "paper";
  } else {
    return "scissors";
  }
};

let gethumanChoice = () => {
  let ch = prompt("Enter your choice (rock/paper/scissors): ");
  ch = ch.toLowerCase();
  if (ch !== "rock" && ch !== "paper" && ch !== "scissors") {
    alert("wrong input");
    return;
  }
  return ch;
};

//scores
let human = 0;
let comp = 0;

let playRound = (cc, hc) => {
  if (cc === "rock") {
    if (hc === "rock") {
      console.log("draw");
    } else if (hc === "paper") {
      console.log("human wins");
      human++;
    } else {
      console.log("computer wins");
      comp++;
    }
  } else if (cc === "paper") {
    if (hc === "rock") {
      console.log("computer wins");
      comp++;
    } else if (hc === "paper") {
      console.log("draw");
    } else {
      console.log("human wins");
      human++;
    }
  } else {
    if (hc === "rock") {
      console.log("human wins");
      human++;
    } else if (hc === "paper") {
      console.log("computer wins");
      comp++;
    } else {
      console.log("draw");
    }
  }
};

let decideWinner = (humanScore, computerScore) => {
  if (humanScore === computerScore) {
    console.log(
      `This is a draw.Human score = ${humanScore} & Computer score = ${computerScore}`
    );
  }
  if (humanScore > computerScore) {
    console.log(
      `human wins the game.Human score = ${humanScore} & Computer score = ${computerScore}`
    );
  } else {
    console.log(
      `computer wins the game.Human score = ${humanScore} & Computer score = ${computerScore}`
    );
  }
};

let playGame = () => {
  for (let i = 0; i < 5; i++) {
    //inputs
    const cc = getComputerChoice();
    const hc = gethumanChoice();
    playRound(cc, hc);
  }
  decideWinner(human, comp);
};
playGame();

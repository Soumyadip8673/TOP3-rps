console.log("script connected");
// variables
//scores
let human = 0;
let comp = 0;

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
  if (humanScore === 5) {
    console.log(
      `human wins the game.Human score = ${humanScore} & Computer score = ${computerScore}`
    );
  }
  if (computerScore===5) {
    console.log(
      `computer wins the game.Human score = ${humanScore} & Computer score = ${computerScore}`
    );
  }
};

document.getElementById("rock").addEventListener("click", () => {
  const hc = "rock";
  const cc = getComputerChoice();
  imgForInput(cc,hc)
  playRound(cc, hc);
  setScore(human,comp)
  decideWinner(human,comp)
});
document.getElementById("paper").addEventListener("click", () => {
  const hc = "paper";
  const cc = getComputerChoice();
  imgForInput(cc,hc)
  playRound(cc, hc);
  setScore(human,comp)
  decideWinner(human,comp)
});
document.getElementById("scissors").addEventListener("click", () => {
    const hc = "scissors";
    const cc = getComputerChoice();
    imgForInput(cc,hc)
    playRound(cc, hc);
    setScore(human,comp)
    decideWinner(human,comp)
  });


  // reset button 
  document.getElementById('reset').addEventListener('click',()=>{
    comp=0
    human=0
    document.querySelector(".human-score").innerHTML = `<h3>Human score: ${human}</h3>`;
    document.querySelector(".computer-score").innerHTML = `<h3>Computer score: ${comp}</h3>`;
     document.querySelector('#hInput').innerHTML=' <img src="assets/bg.jpeg" alt="" class="input-img">'
    document.querySelector('#cInput').innerHTML=' <img src="assets/bg.jpeg" alt="" class="input-img">'
  })


  // set input image 
  let imgForInput=(cinput,hinput)=>{
    if (hinput==='rock') {
      document.querySelector('#hInput').innerHTML=' <img src="assets/rock.jpeg" alt="" class="input-img">'
    }
    else if(hinput==='paper'){
      document.querySelector('#hInput').innerHTML=' <img src="assets/paper.jpeg" alt="" class="input-img">'
    }
    else if(hinput==='scissors'){
      document.querySelector('#hInput').innerHTML=' <img src="assets/scissors.jpeg" alt="" class="input-img">'
    }
    if (cinput==='rock') {
      document.querySelector('#cInput').innerHTML=' <img src="assets/rock.jpeg" alt="" class="input-img">'
    }
    else if(cinput==='paper'){
      document.querySelector('#cInput').innerHTML=' <img src="assets/paper.jpeg" alt="" class="input-img">'
    }
    else if(cinput==='scissors'){
      document.querySelector('#cInput').innerHTML=' <img src="assets/scissors.jpeg" alt="" class="input-img">'
    }
  }

  // set score 
  let setScore=(human,comp)=>{
    document.querySelector(".human-score").innerHTML = `<h3>Human score: ${human}</h3>`;
    document.querySelector(".computer-score").innerHTML = `<h3>Computer score: ${comp}</h3>`;
  }
 
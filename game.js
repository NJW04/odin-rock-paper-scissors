function getComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "rock"){
        results.textContent = 'We tie! Rock equals rock.';
    }
    else if (playerSelection === "rock" && computerSelection === "paper"){
        results.textContent = "You lose! Paper beats Rock!";
        computerScore++;
    }
    else if (playerSelection === "rock" && computerSelection === "scissors"){
        results.textContent = "You win! Rock beats Scissors!";
        playerScore++;
    }
    else if (playerSelection === "paper" && computerSelection === "rock"){
      results.textContent = "You win! Paper beats rock!";
      playerScore++;
    }
    else if (playerSelection === "paper" && computerSelection === "paper"){
      results.textContent = "We tie! Paper equals paper!";
    }
    else if (playerSelection === "paper" && computerSelection === "scissors"){
      results.textContent = "You lose! Scissors beats paper!";
      computerScore++;
    }
    else if (playerSelection === "scissors" && computerSelection === "rock"){
      results.textContent = "You lose! Rock beats scissors!";
      computerScore++;
    }
    else if (playerSelection === "scissors" && computerSelection === "paper"){
      results.textContent = "You win! Scissors beats paper!";
      playerScore++;
    }
    else if (playerSelection === "scissors" && computerSelection === "scissors"){
      results.textContent = "We tie! Scissors equals scissors!";
    }
  }


const scoreHuman = document.querySelector('.score-human');
const scoreComputer = document.querySelector('.score-computer');
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const resultFooter = document.querySelector('.results-footer');
const results = document.querySelector('.results');

let playerScore = 0;
let computerScore = 0;
scoreHuman.textContent = 'Your score is:' + playerScore;
scoreComputer.textContent = 'The computers score is' + computerScore;


rock.addEventListener('click', () => {
    let computerChoice = getComputerChoice();
    playRound('rock',computerChoice);
    scoreHuman.textContent = 'Your score is: ' + playerScore;
    scoreComputer.textContent = 'My score is: ' + computerScore;

    if (playerScore == 5){
      results.textContent = 'Game Over! You won!';
      const replayButton = document.createElement('button');
      replayButton.textContent = 'Click me to play again';
      resultFooter.appendChild(replayButton);
      disableButtons();
      replayButton.addEventListener('click', () => {
        playerScore = 0;
        computerScore = 0;
        updateScores();
        resultFooter.removeChild(replayButton);
        enableButtons();
      });
  
    }else if (computerScore == 5){
      results.textContent = 'Game Over! You lost!';
      const replayButton = document.createElement('button');
      replayButton.textContent = 'Click me to play again';
      resultFooter.appendChild(replayButton);
      disableButtons();
      replayButton.addEventListener('click', () => {
        playerScore = 0;
        computerScore = 0;
        updateScores();
        resultFooter.removeChild(replayButton);
        enableButtons();
      });
    }
});

paper.addEventListener('click', () => {
  let computerChoice = getComputerChoice();
  playRound('paper',computerChoice);
  scoreHuman.textContent = 'Your score is: ' + playerScore;
  scoreComputer.textContent = 'My score is: ' + computerScore;

  if (playerScore == 5){
    results.textContent = 'Game Over! You won!';
    const replayButton = document.createElement('button');
    replayButton.textContent = 'Click me to play again';
    resultFooter.appendChild(replayButton);
    disableButtons();
    replayButton.addEventListener('click', () => {
      playerScore = 0;
      computerScore = 0;
      updateScores();
      resultFooter.removeChild(replayButton);
      enableButtons();
    });

  }else if (computerScore == 5){
    results.textContent = 'Game Over! You lost!';
    const replayButton = document.createElement('button');
    replayButton.textContent = 'Click me to play again';
    resultFooter.appendChild(replayButton);
    disableButtons();
    replayButton.addEventListener('click', () => {
      playerScore = 0;
      computerScore = 0;
      updateScores();
      resultFooter.removeChild(replayButton);
      enableButtons();
    });
  }
});

scissors.addEventListener('click', () => {
  let computerChoice = getComputerChoice();
  playRound('scissors',computerChoice);
  scoreHuman.textContent = 'Your score is: ' + playerScore;
  scoreComputer.textContent = 'My score is: ' + computerScore;

  if (playerScore == 5){
    results.textContent = 'Game Over! You won!';
    const replayButton = document.createElement('button');
    replayButton.textContent = 'Click me to play again';
    resultFooter.appendChild(replayButton);
    disableButtons();
    replayButton.addEventListener('click', () => {
      playerScore = 0;
      computerScore = 0;
      updateScores();
      resultFooter.removeChild(replayButton);
      enableButtons();
    });

  }else if (computerScore == 5){
    results.textContent = 'Game Over! You lost!';
    const replayButton = document.createElement('button');
    replayButton.textContent = 'Click me to play again';
    resultFooter.appendChild(replayButton);
    disableButtons();
    replayButton.addEventListener('click', () => {
      playerScore = 0;
      computerScore = 0;
      updateScores();
      resultFooter.removeChild(replayButton);
      enableButtons();
    });
  }
});

window.onload = (event) => {
  scoreHuman.textContent = 'Your score is: 0';
  scoreComputer.textContent = 'My score is: 0';
};

function updateScores(){
  scoreHuman.textContent = 'Your score is: ' + playerScore;
  scoreComputer.textContent = 'My score is: ' + computerScore;
  results.textContent = "I will display the results of the game...";
}

function disableButtons(){
  const buttons = document.querySelectorAll('.item');
  let arrayButtons = Array.from(buttons);
  for (const element of arrayButtons) {
    element.disabled = true;
  }
}

function enableButtons(){
  const buttons = document.querySelectorAll('.item');
  let arrayButtons = Array.from(buttons);
  for (const element of arrayButtons) {
    element.disabled = false;
  }
}


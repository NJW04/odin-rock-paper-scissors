function getComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
        return 'Rock';
      case 1:
        return 'Paper';
      case 2:
        return 'Scissors';
    }
}

function playRound(PlayerSelection, ComputerSelection) {
    let playerSelection = PlayerSelection.toLowerCase();
    let computerSelection = ComputerSelection.toLowerCase();
    if (playerSelection === "rock" && computerSelection === "rock"){
        return "You tie! Rock equals Rock!";
    }
    else if (playerSelection === "rock" && computerSelection === "paper"){
        return "You lose! Paper beats Rock!";
    }
    else if (playerSelection === "rock" && computerSelection === "scissors"){
        return "You win! Rock beats Scissors!";
    }
    else if (playerSelection === "paper" && computerSelection === "rock"){
        return "You win! Paper beats Rock!";
    }
    else if (playerSelection === "paper" && computerSelection === "paper"){
        return "You tie! Paper equals Paper!";
    }
    else if (playerSelection === "paper" && computerSelection === "scissors"){
        return "You lose! Scissors beats Paper!";
    }
    else if (playerSelection === "scissors" && computerSelection === "rock"){
        return "You lose! Rock beats Scissors!";
    }
    else if (playerSelection === "scissors" && computerSelection === "paper"){
        return "You win! Scissors beats Paper!";
    }
    else if (playerSelection === "scissors" && computerSelection === "scissors"){
        return "You tie! Scissors equals Scissors!";
    }
  }

  function game(){
    for (let i=0;i<5;i++){
        let playerSelection = prompt("Enter rock,paper or scissors");
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
  }

  game();
function getComputerChoice() {
    const pick = ['rock', 'paper', 'scissors'];
    return pick[Math.floor(Math.random() * pick.length)];
}
function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection){
        console.log("draw");
    }else if(playerSelection=='rock' && computerSelection == 'scissors'){
        console.log("you win");
    }else if(playerSelection=='paper' && computerSelection == 'scissors '){
        console.log("you lose");
    }else if(playerSelection=='rock' && computerSelection == 'paper '){
        console.log("you lose");
    }else if(playerSelection=='scissors' && computerSelection == 'paper '){
        console.log("you win");
    }else if(playerSelection=='paper' && computerSelection == 'rock '){
        console.log("you win");
    }else if(playerSelection=='scissors' && computerSelection == 'rock '){
        console.log("you lose");
    }else{console.log("err");}
  }
   
  const playerSelection = prompt();
  const computerSelection = getComputerChoice();
playRound(playerSelection, computerSelection);
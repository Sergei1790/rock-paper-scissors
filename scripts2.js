function getPlayerChoice(){
 
    let playerChoice = prompt('Choose: Rock, Paper or Scissors', 'Rock');
    playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase();
    
    while(playerChoice != 'Rock' && playerChoice !='Paper' && playerChoice !='Scissors'){
        console.log('No Such Option!');
        playerChoice = prompt('Choose: Rock, Paper or Scissors', 'Rock');
        playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase();
    } 
    return  playerChoice;
}

function getComputerChoice (){
    let options = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * options.length);
    
    const computerChoice = options[randomIndex];

    return computerChoice;
    
}

let youWin = 0;
let computerWin = 0;

function playRound (playerSelection, computerSelection){
    let winner;
    if(
        (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
        (playerSelection === 'Paper' && computerSelection === 'Rock') ||
        (playerSelection === 'Scissors' && computerSelection === 'Paper')
    ){
        youWin ++;
        winner = `You Win! ${playerSelection} beats ${computerSelection}`;
    } else if(
        (playerSelection === 'Scissors' && computerSelection === 'Rock') ||
        (playerSelection === 'Rock' && computerSelection === 'Paper') ||
        (playerSelection === 'Paper' && computerSelection === 'Scissors')
    ){
        computerWin ++;
        winner = `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else{
        winner = `It is a Draw! ${computerSelection} = ${playerSelection}`;
    }
    return winner;
}

function game(){
    
    for(let i = 0; i<5; i++){
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice ();
        console.log(`You have chosen ${playerSelection}`);
        console.log(`Computer have chosen ${computerSelection}`);
        console.log(playRound(playerSelection, computerSelection));
    }
    let victory;
    if(youWin > computerWin){
        victory =`YOU WON! The score: ${youWin} vs ${computerWin}`
    } else if(youWin < computerWin){
        victory = `You lost.... The score: ${youWin} vs ${computerWin}`
    }else{
        victory = `It is a draw! The score: ${youWin} vs ${computerWin}`
    }
    return victory;
    
}
console.log(game());

let playerSelection = '';
let computerSelection = '';
let youWin = 0;
let computerWin = 0;
function getComputerChoice (){
    let options = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * options.length);
    const computerChoice = options[randomIndex];
    return computerChoice;
}

let rpsButtons = document.querySelectorAll('.rps-button');
let rps__results = document.querySelector('#rps__results');
let rps__score = document.querySelector('#rps__score');
rpsButtons.forEach(rpsbutton => {
    rpsbutton.addEventListener('click', () => {
        playerSelection = rpsbutton.value;
        game(3);
    });
});

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
    let winnerWrapper = document.createElement('div');
    winnerWrapper.classList.add('winner__result');
    winnerWrapper.innerText = `Opponent - ${computerSelection},\n You - ${playerSelection};\n ${winner}`;
    
    rps__score.innerText = `Current Score: ${youWin} - ${computerWin}`
    rps__results.appendChild(winnerWrapper);
    return winner;
}


function game(score){
    playRound (playerSelection, getComputerChoice());
    if(youWin === score || computerWin === score){
        let victory;
        if(youWin > computerWin){
            victory =`YOU WON! The score: ${youWin} vs ${computerWin}`
        } else if(youWin < computerWin){
            victory = `You lost.... The score: ${youWin} vs ${computerWin}`
        }else{
            victory = `It is a draw! The score: ${youWin} vs ${computerWin}`
        }
        let finalwinnerWrapper = document.createElement('div');
        finalwinnerWrapper.classList.add('final-winner__result');
        finalwinnerWrapper.innerText = victory;
        rps__results.appendChild(finalwinnerWrapper);
        youWin = 0;
        computerWin = 0;
        return victory;
    }
}








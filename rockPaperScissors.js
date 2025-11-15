// **** ROCK PAPER SCISSORS ****



let getComputerChoice = () => {

    let randomIntegerGenerator = (min, max) =>  Math.floor(Math.random()* (max - min + 1)) + min;
    let compute = randomIntegerGenerator(1,3);
    console.log(compute);

    if(compute  ===1) return 'rock';
    if(compute === 2) return "paper";
    return "scissors"

}




let playerScore = 0,
    computerScore = 0;

let playRound = (humanChoice,computerChoice) => {

    let result;
    display.style.backgroundColor = "white";



    if(humanChoice === computerChoice) {
        result = 'Draw';
    
    }else if(humanChoice === "rock" && computerChoice === "paper"||
        humanChoice === "paper" && computerChoice === "scissors"||
        humanChoice === "scissors" && computerChoice === "rock"){
        result = 'computer wins';
        computerScore++;

    }else if(humanChoice === "rock" && computerChoice === "scissors"||
        humanChoice === "paper" && computerChoice === "rock"||
        humanChoice === "scissors" && computerChoice === "paper"){
        result = 'player wins';
        playerScore++;

    }
    display.textContent = `${result} |   player: ${playerScore} CPU: ${computerScore}`;

    if(playerScore >= 5) {
        display.style.backgroundColor = "yellow";
        display.textContent = "You Win! Bravo!...Let's play another game!";
        playerScore = 0;
        computerScore = 0;
        return "You Win! Bravo!";
    }else if(computerScore >= 5) {
        display.style.backgroundColor = "pink";
        display.textContent = "You lose...Let's play another game!";
        playerScore = 0;
        computerScore = 0;
        return "You lose... Try again next time.";
    }

}

const display = document.querySelector(".display");

const buttons = document.querySelectorAll('button');

buttons.forEach((button)=>{

    button.addEventListener("click",(e) => {
        let playerSelection;
        let target = e.target;
        switch(target.textContent){
            case 'Rock':
                playerSelection = "rock";
                break;
            case 'Paper':
                playerSelection = "paper";
                break;
            case 'Scissors':
                playerSelection = "scissors";
                break;
        }
        let computerSelection = getComputerChoice();
        

        playRound(playerSelection,computerSelection);        
    });
});
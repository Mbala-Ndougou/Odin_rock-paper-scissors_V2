let randomIntegerGenerator = (min, max) =>  Math.floor(Math.random()* (max - min + 1)) + min;
    


let getComputerChoice = () => {
    let compute = randomIntegerGenerator(1,3);
    console.log(compute);
    
    // make a variable that return random integer between 1 and 3 (incluive on both ends) 
    // If 1 the rock, 2 paper and 3 scissors

    if(compute  ===1) return 'rock';
    if(compute === 2) return "paper";
    return "scissors"

}

let getHumanChoice = () => {
    let choice = prompt("Choose an option between rock paper and scissors");
    choice = choice.toLowerCase();
    return choice;
}

let playGame = () => {

    let winner;
    let humanScore = 0;
    let computerScore = 0;
    let winnerScore;


    let playRound = (humanChoice,computerChoice) => {

        if(humanChoice === "rock" && computerChoice === "rock"||
            humanChoice === "paper"&& computerChoice === "paper"||
            humanChoice === "scissors" && computerChoice === "scissors"
        ) {
            return "Draw"
        }else if(humanChoice === "rock" && computerChoice === "paper"||
            humanChoice === "paper" && computerChoice === "scissors"||
            humanChoice === "scissors" && computerChoice === "rock"
        ){
            return "Computer Wins"

        }else if(humanChoice === "rock" && computerChoice === "scissors"||
            humanChoice === "paper" && computerChoice === "rock"||
            humanChoice === "scissors" && computerChoice === "paper"
        ) {
            return "Player Wins"

        }else{

        }

    }


    // playRound(humanChoice,computerChoice);

    for(let i = 0; i<5 ; i++){

        let humanChoice = getHumanChoice();
        console.log(humanChoice);
        
        let computerChoice = getComputerChoice();
        console.log(computerChoice);
        

        let result = playRound(humanChoice,computerChoice);
        console.log(result);
        
        
        if(result === "Computer Wins"){
            computerScore += 1;
        }else if(result === "Player Wins!") {
            humanScore += 1;
        }else{

        }
        
    }

    console.log(humanScore);
    console.log(computerScore);

    if(humanScore > computerScore){
        winner = "Player"
        winnerScore = humanScore;
    }else{
        winner = "GPU"
        winnerScore = computerScore;
    }

    console.log(`The winner is ${winner} with a score of ${winnerScore}`);
    
    
    return winner;

}

playGame();
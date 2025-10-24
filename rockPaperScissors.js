
let getHumanChoice = () => {
    let human = prompt("Choose between Rock, Paper and Scissors");
    let humanChoicer = human.toLowerCase()
    console.log(humanChoicer);
    return humanChoicer;
};

let humanChoice = getHumanChoice();

let getComputerChoice = () => {

    let computerChoicer;
    
    let aleaNumber = (min,max) => {
        let minCeiled = Math.ceil(min);
        // console.log(minCeiled);
        
        let maxFloored = Math.floor(max);
        // console.log(maxFloored);
        
        return Math.floor(Math.random()*(maxFloored - minCeiled + 1)) + minCeiled;
    }

    let alea = aleaNumber(1,3);

    switch(alea) {
        case 1:
            computerChoicer = "rock";
            break;
        case 2:
            computerChoicer = "paper";
            break;
        case 3:
            computerChoicer = "scissors";
            break;
    }
    console.log(computerChoicer);
    
    return computerChoicer;
};

let computerChoice = getComputerChoice();

let humanScore = 0;
let computerScore = 0;


let playRound = (humanChoice,computerChoice) => {
    if(humanChoice === "rock") {
        if(computerChoice === "rock") {
            console.log('Draw!');
            
        }else if(computerChoice === "paper") {
            console.log('CPU wins');
            
        }else if(computerChoice === "scissors") {
            console.log('Player wins');
                
        }

    }else if(humanChoice === "paper") {
        if(computerChoice === "rock") {
            console.log('Player wins');
            
        }else if(computerChoice === "paper") {
            console.log('Draw!');
            

        }else if(computerChoice === "scissors") {
            console.log('CPU wins');
               
        }

    }else if(humanChoice === "scissors") {
        if(computerChoice === "rock") {
            console.log('CPU wins');
            
        }else if(computerChoice === "paper") {
            console.log('Player wins');
            
        }else if(computerChoice === "scissors") {
            console.log('Draw!');
            
            
        }

    }
}

playRound(humanChoice, computerChoice);

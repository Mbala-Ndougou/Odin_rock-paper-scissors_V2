// this is where we'll be writing our javascript code

let humanScore = 0;
let computerScore = 0;

let humanChoice = "";
let computerChoice = "";


let getHumanChoice = () => {
    human = prompt("Choose between Rock, Paper and Scissors");
    humanChoice = human.toLowerCase()
    console.log(humanChoice);
    return humanChoice;
}


let getComputerChoice = () => {
    
    let aleaNumber = (min,max) => {
        minCeiled = Math.ceil(min);
        console.log(minCeiled);
        
        maxFloored = Math.floor(max);
        console.log(maxFloored);
        
        return Math.floor(Math.random()*(maxFloored - minCeiled + 1)) + minCeiled;
    }

    let alea = aleaNumber(1,3);
    let machineChoice;

    switch(alea) {
        case 1:
            computerChoice = "rock";
            break;
        case 2:
            computerChoice = "paper";
            break;
        case 3:
            computerChoice = "scissors";
            break;
    }
    return computerChoice;
}


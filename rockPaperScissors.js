// this is where we'll be writing our javascript code

let humanScore = 0;
    computerScore = 0;


let getHumanChoice = () => {
    human = prompt("Choose between Rock, Paper and Scissors");
    let humanChoice = human.toLowerCase()

    switch(humanChoice){

        case "rock":
            console.log("rock");
        break;

        case "scissors":
            console.log("scissors");
        break;

        case "paper":
            console.log("paper");
        break;
        
    }
}

getHumanChoice();

let playRound = (humanChoice, computerChoice) => {
    
    
}
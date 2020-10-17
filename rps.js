let myMap = new Map()

myMap.set("R", "Rock")
myMap.set("P", "Paper")
myMap.set("S", "Scissors")

let computerPlay = () => {
    const hand = ["Rock", "Paper", "Scissors"]
    let choice = Math.round(Math.random() * 2)

    return hand[choice]
}

let playRound = (playerSelection, computerSelection) => {

    console.log(`Computer played ${computerSelection}`)

    if (playerSelection == "Rock") {
        if (computerSelection == "Paper") return "You Lose! Paper beats rock"
        else if (computerSelection == playerSelection) return "Tied!"
        else return "You Win!"
    }

    else if (playerSelection == "Paper") {
        if (computerSelection == "Scissors") return "You Lose! Scissors beats Paper"
        else if (computerSelection == playerSelection) return "Tied!"
        else return "You Win!"
    }

    else if (playerSelection == "Scissors") {
        if (computerSelection == "Rock") return "You Lose! Rock beats scissors"
        else if (computerSelection == playerSelection) return "Tied!"
        else return "You Win!"
    }

}


const playerSelection = "Rock"
const computerSelection = computerPlay()

console.log(playRound(playerSelection, computerSelection))

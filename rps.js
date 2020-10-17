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

const game = () => {
    const playerSelection = prompt("Choose Rock, Paper or Scissors")

    const computerSelection = computerPlay()
    const char = playerSelection.substring(0, 1).toUpperCase()
    console.log(playRound(myMap.get(char), computerSelection))
}

let level = 1

while (level <= 5) {
    game()
    level++
}

console.log("GAME OVER")


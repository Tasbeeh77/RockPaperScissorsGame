//generate computer choice
const generateComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3) + 1
    if (randomNumber === 1) {
        return 'rock'
    }
    else if (randomNumber === 2) {
        return 'scissors'
    }
    else {
        return 'paper'
    }
}

//get the result of the game
const getResult = (userChoice, computerChoice) => {
    if (computerChoice === userChoice) {
        return 'its a draw!'
    }
    if (computerChoice === 'rock' && userChoice === "paper") {
        return 'you win!'
    }
    if (computerChoice === 'rock' && userChoice === "scissors") {
        return 'you lost!'
    }
    if (computerChoice === 'paper' && userChoice === "scissors") {
        return 'you win!'
    }
    if (computerChoice === 'paper' && userChoice === "rock") {
        return 'you lose!'
    }
    if (computerChoice === 'scissors' && userChoice === "rock") {
        return 'you win!'
    }
    if (computerChoice === 'scissors' && userChoice === "paper") {
        return 'you lose!'
    }
}


window.addEventListener("load", () => {
    //selectors
    let possibleChoices = document.querySelectorAll("button")
    let computerchoice = document.querySelectorAll("span")[0]
    let userchoice = document.querySelectorAll("span")[1]
    let result = document.querySelectorAll("span")[2]

    //event
    possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", (event) => {
        userchoice.innerHTML = event.target.innerHTML //your choice : (button innertext (rock or paper or scissors))
        computerchoice.innerHTML = generateComputerChoice() //computer choice : random choice
        result.innerHTML = getResult(userchoice.innerHTML, computerchoice.innerHTML) //result : (you won or you lost)
    }))
})
const computerChoiceDisplay = document.getElementById("computerChoice")
const userChoiceDisplay = document.getElementById("userChoice")
const resultDisplay = document.getElementById("result")

const choices = document.querySelectorAll("button")
let userChoice
let computerChoice
const possibleChoices = ["rock", "paper", "scissors"]

choices.forEach((choice) =>
  choice.addEventListener("click", (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    result()
  })
)

const generateComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * choices.length)

  computerChoice = possibleChoices[randomNumber]
  computerChoiceDisplay.innerHTML = computerChoice
}

const result = () => {
  if (userChoice === computerChoice) resultDisplay.innerHTML = "Draw!"
  else if (
    (userChoice === "rock" && computerChoice === "paper") ||
    (userChoice === "paper" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "rock")
  )
    resultDisplay.innerHTML = "Computer won!"
  else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  )
    resultDisplay.innerHTML = "You won!"
}

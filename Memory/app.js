const cardArray = [
  {
    name: "apple",
    img: "jpg/apple.jpg",
  },
  {
    name: "coconut",
    img: "jpg/coconut.jpg",
  },
  {
    name: "grape",
    img: "jpg/grape.jpg",
  },
  {
    name: "lemon",
    img: "jpg/lemon.jpg",
  },
  {
    name: "watermelon",
    img: "jpg/watermelon.jpg",
  },
  {
    name: "apple",
    img: "jpg/apple.jpg",
  },
  {
    name: "coconut",
    img: "jpg/coconut.jpg",
  },
  {
    name: "grape",
    img: "jpg/grape.jpg",
  },
  {
    name: "lemon",
    img: "jpg/lemon.jpg",
  },
  {
    name: "watermelon",
    img: "jpg/watermelon.jpg",
  },
]

cardArray.sort(() => 0.5 - Math.random())

const scoreDisplay = document.getElementById("score")
const gridDisplay = document.querySelector("#grid")
let cardsChosen = []
let cardsChosenIds = []
const cardsMatched = []

const createBoard = () => {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img")
    card.setAttribute("src", "jpg/card.jpg")
    card.setAttribute("data-id", i)
    card.setAttribute("width", "250px")
    card.addEventListener("click", flipCard)
    gridDisplay.appendChild(card)
  }
}

const checkMatch = () => {
  const cards = document.querySelectorAll("#grid img")
  if (cardsChosenIds[0] === cardsChosenIds[1]) {
    alert("It is the same card!")
    cardsChosenIds.forEach((id) => {
      cards[id].setAttribute("src", "jpg/card.jpg")
    })
  } else if (cardsChosen[0] === cardsChosen[1]) {
    cardsChosenIds.forEach((id) => {
      const card = cards[id]
      card.setAttribute("src", "")
      card.removeEventListener("click", flipCard)
    })
    cardsMatched.push([...cardsChosen])
  } else {
    cardsChosenIds.forEach((id) => {
      cards[id].setAttribute("src", "jpg/card.jpg")
    })
  }

  scoreDisplay.innerHTML = cardsMatched.length
  cardsChosen = []
  cardsChosenIds = []

  if (cardsMatched.length === cardArray.length / 2) {
    scoreDisplay.HTML = "You win!"
  }
}

function flipCard() {
  let cardId = this.getAttribute("data-id") //NOTE TO REMEMBER: this doesn't work on arrow function
  cardsChosen.push(cardArray[cardId].name)
  cardsChosenIds.push(cardId)
  this.setAttribute("src", cardArray[cardId].img)
  cardsChosen.length === 2 && setTimeout(checkMatch, 500)
}

createBoard()

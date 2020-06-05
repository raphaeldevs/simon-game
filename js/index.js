const Game = {
  canStart: true,
  started: false,
  start: () => {
    createClickListeners()

    this.canStart = false
    this.started = true
  },
  over: () => {
    this.canStart = true
    this.started = false

    this.animation.gameOver()
    this.playSong.gameOver()
  },
  sequence: [],
  currentSequence: [],
  currentLevel: 0,
  record: 0,
  animations: {
    gameOver: () => {},
    bip: () => {},
  },
  playSong: {
    button: color => new Audio(`../sounds/${color}.mp3`).play(),
    gameOver: () => {}
  }
}

// Click Controller
const buttons = document.querySelectorAll(".button");

for (const button of buttons) {
  button.addEventListener('click', handleClickController)
}

function handleClickController(event) {
  console.log(event.target.dataset.color)
}


// key pressed controller
document.addEventListener('keypress', handleKeyPressController)

function handleKeyPressController(event) {
  console.log(event.key)
}


//game.start => clickListeners, set variables

// click listener => check click => function to add sequence
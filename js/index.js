const Game = {
  canStart: true,
  started: false,
  start: function() {
    this.canStart = false
    this.started = true

    this.createSequence()
  },
  over: function() {
    this.canStart = true
    this.started = false

    this.sequence = []

    this.animation.gameOver()
    this.playSong.gameOver()
  },
  sequence: [],
  currentSequence: [],
  currentLevel: 0,
  record: 0,
  createSequence: function() {
    const random = Math.floor(Math.random() * 4) //from 0 to 3
    const buttonRamdomized = buttons[random]
    const buttonColor = buttonRamdomized.dataset.color

    this.sequence.push(buttonColor)
    this.currentSequence = []

    this.animate.bip(buttonRamdomized)
    this.playSong.button(buttonColor)

    return this.sequence
  },
  animate: {
    gameOver: () => {
      const background = document.querySelector("#page-game")

      const keyframe = [
        { backgroundColor: "red" },
        { backgroundColor: "var(--black)" }
      ]
      const options = {
        duration: 80,
        iterations: 3
      }

      background.animate(keyframe, options)
    },
    bip: element => {
      const keyframe = [
        { opacity: 0 },
        { opacity: 100 }
      ]
      const options = {
        duration: 100
      }

      element.animate(keyframe, options)
    },
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
  console.log (event.target)
}

// key pressed controller
document.addEventListener('keypress', handleKeyPressController)

function handleKeyPressController(event) {
  console.log(event.key)
}

//game.start => clickListeners, set variables

// click listener => check click => function to add sequence
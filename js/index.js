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
  sequencePlayer: [],
  currentLevel: 0,
  record: 0,
  createSequence: function() {
    const random = Math.floor(Math.random() * 4) //from 0 to 3
    const buttonRamdomized = buttons[random]
    const buttonColor = buttonRamdomized.dataset.color

    this.sequence.push(buttonColor)

    this.animate.bip(buttonRamdomized)
    this.playSong.button(buttonColor)

    return this.sequence
  },
  includeSequence: function (color) {
    this.sequencePlayer.push(color)
    this.checkSequence()
  },
  checkSequence: function () {
    const currentSequence = this.sequencePlayer.length - 1;

    if (!this.sequencePlayer[currentSequence] === this.sequence[currentSequence]) {
      this.over()
    }

    if (currentSequence + 1 === this.sequence.length) {
      this.currentLevel += 1
      this.sequencePlayer = []

      this.createSequence()
    }
  },
  animate: {
    gameOver: () => {
      const background = document.querySelector("#page-game")
      const animation = {
        keyframe: [
          { backgroundColor: "red" },
          { backgroundColor: "var(--black)" }
        ],
        options: {
          duration: 80,
          iterations: 3
        }
      }
      
      background.animate(animation.keyframe, animation.options)
    },
    bip: element => {
      const animation = {
        keyframe: [
          { opacity: 0 },
          { opacity: 100 }
        ],
        options: {
          duration: 100
        }
      }

      element.animate(animation.keyframe, animation.options)
    },
    NoNo: () => {
      const header = document.querySelector("header")
      const animation = {
        keyframe: [
          { opacity: 0 },
          { opacity: 100 }
        ],
        options: {
          duration: 100,
          iterations: 3
        }
      }
      header.animate(animation.keyframe, animation.options)
    }
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
  if (Game.started) {
    const color = event.target.dataset.color
    Game.includeSequence(color)
    
    Game.playSong.button(color)
  } else Game.animate.NoNo()
}

// key pressed controller
document.addEventListener('keypress', handleKeyPressController)

function handleKeyPressController(event) {
  console.log(event.key)
}

//game.start => clickListeners, set variables

// click listener => check click => function to add sequence
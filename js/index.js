const Game = {
  started: false,
  canPlay: false,

  sequence: [],
  sequencePlayer: [],
  currentLevel: 1,

  animate: {
    gameOver: () => {
      const background = document.querySelector('#page-game')
      const animation = {
        keyframes: [
          { backgroundColor: 'var(--red)' },
          { backgroundColor: 'var(--black)' }
        ],
        options: {
          duration: 80,
          iterations: 3
        }
      }

      background.animate(animation.keyframes, animation.options)
    },
    blink: element => {
      const animation = {
        keyframes: [{ opacity: 0 }, { opacity: 100 }],
        options: {
          duration: 100
        }
      }

      element.animate(animation.keyframes, animation.options)
    },
    NoNo: () => {
      const header = document.querySelector('header')
      const animation = {
        keyframes: [{ opacity: 0 }, { opacity: 100 }],
        options: {
          duration: 100,
          iterations: 3
        }
      }
      header.animate(animation.keyframes, animation.options)
    }
  },

  playSong: {
    color: color => new Audio(`../sounds/${color}.mp3`).play(),
    gameOver: () => new Audio(`../sounds/wrong.mp3`).play()
  },

  start() {
    this.started = true
    
    this.innerMessage(`Level ${this.currentLevel}`)

    setTimeout(() => {
      this.createSequence()
    }, 900)
  },

  finish() {
    this.started = false
    this.canPlay = false

    this.sequence = []
    this.sequencePlayer = []

    this.currentLevel = 1
    this.innerMessage('PRESS ENTER TO PLAY')

    this.animate.gameOver()
    this.playSong.gameOver()
  },

  createSequence() {
    const randomIndex = Math.floor(Math.random() * (3 - 0 + 1)) + 0
    const randomButton = buttons[randomIndex]
    const { color } = randomButton.dataset

    this.sequence.push(color)

    this.animate.blink(randomButton)
    this.playSong.color(color)

    this.canPlay = true
  },

  includeSequence(color) {
    this.sequencePlayer.push(color)

    this.checkSequence(color)
  },

  checkSequence(color) {
    const currentSequence = this.sequencePlayer.length - 1
    const isLastIndexInSequence = currentSequence + 1 === this.sequence.length

    const isCorrectSequence =
      this.sequencePlayer[currentSequence] === this.sequence[currentSequence]

    if (!isCorrectSequence) return this.finish()

    this.playSong.color(color)

    if (isLastIndexInSequence) {
      this.canPlay = false

      this.nextLevel()
    }
  },

  nextLevel() {
    this.currentLevel += 1
    this.sequencePlayer = []

    setTimeout(() => {
      this.innerMessage(`Level ${this.currentLevel}`)
      this.createSequence()
    }, 900)
  },

  handleKeypress({ key }) {
    if (!this.started && key === 'Enter') this.start()
  },

  handleClick(event) {
    if (!this.canPlay) return this.animate.NoNo()

    const { color } = event.target.dataset
  
    this.includeSequence(color)
  },

  innerMessage(message) {
    const title = document.querySelector('#game header h1')
    title.textContent = message
  }
}

const buttons = document.querySelectorAll('.button')

buttons.forEach(button => {
  button.addEventListener('click', event => Game.handleClick(event))
})

document.addEventListener('keypress', event => Game.handleKeypress(event))

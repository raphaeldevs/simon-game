const Game = {
  canStart: true,
  started: false,
  sequence: [],
  currentSequence: [],
  currentLevel: 0,
  record: 0
}

const buttons = document.querySelectorAll(".button");

for (const button of buttons) {
  button.addEventListener('click', handleClickController)
}

function handleClickController(event) {
  console.log(event.target.dataset.color)
}
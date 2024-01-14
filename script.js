// Define HTML Elements

const board = document.getElementById('game-board');

// Draw game variables
let snake = [
  {
    x: 10,
    y: 10,
  },
];

// Draw game map and food

function draw() {
  board.innerHTML = '';
  drawSnake();
}

// Draw snake
function drawSnake() {}

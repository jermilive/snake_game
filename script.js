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
function drawSnake() {
  snake.forEach((segment) => {
    const snakeElement = createGameElement('div', 'snake');
    setPosition(snakeElement, segment);
  });
}

// Create a snake or food cube/div
function createGameElement(tag, className) {
  const element = document.createElement(tag);
  element.className = className;
}

// Set position of the snake or food
function setPosition(element, position) {
  element.style.gridColumn = position.x;
  element.style.gridRow = position.y;
}

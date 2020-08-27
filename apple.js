import { snakeEat, growSnake } from "./snake.js";
import { randGridPosition } from "./game-grid.js";

var apple = randApplePosition();
const growth = 3;

// Checks with each repaint whether the snakebody is on the apple.
// Generates a new position for the apple if the above is true.
export function refresh() {
    if (snakeEat(apple)) {
        growSnake(growth);
        apple = randApplePosition();
    }
}


// Function draws the apple in a similar fashion to the snake.
// Note: the apple element does not have segments, so we do not need a forEach loop.
export function draw(gameBoard) {
    const appleElement = document.createElement("div");
    appleElement.style.gridRowStart = apple.y;
    appleElement.style.gridColumnStart = apple.x;
    appleElement.classList.add("apple");
    gameBoard.appendChild(appleElement);
}

//Generates a random position for the apple based on the grid and the snake's body position.
function randApplePosition() {
    let newApplePosition;

    while (newApplePosition == null || snakeEat(newApplePosition)) {
        newApplePosition = randGridPosition();
    }

    return newApplePosition;
}
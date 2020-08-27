import { snakeEat, growSnake } from "./snake.js";
import { randGridPosition } from "./game-grid.js";

var apple = randApplePosition();
const growth = 3;

export function refresh() {
    if (snakeEat(apple)) {
        growSnake(growth);
        apple = randApplePosition();
    }
}

export function draw(gameBoard) {
    const appleElement = document.createElement("div");
    appleElement.style.gridRowStart = apple.y;
    appleElement.style.gridColumnStart = apple.x;
    appleElement.classList.add("apple");
    gameBoard.appendChild(appleElement);
}

function randApplePosition() {
    let newApplePosition;

    while (newApplePosition == null || snakeEat(newApplePosition)) {
        newApplePosition = randGridPosition();
    }

    return newApplePosition;
}
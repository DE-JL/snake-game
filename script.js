import { refresh as refreshSnake, draw as drawSnake, snakeSpeed, getSnakeHead, snakeIntersect } from "./snake.js";
import { refresh as refreshApple, draw as drawApple } from "./apple.js";
import { outsideGrid } from "./game-grid.js";

window.onload = confirm("Use the WASD or arrow keys to guide your snake!");

var latestRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById("game");

function main(now) {
    if (gameOver) {
        if (confirm("You lost! Better luck next time.")) {
            window.location = "/";
        }
        return;
    }

    // Here, the requestAnimationFrame() method was used in conjunction with the speed of the snake.
    window.requestAnimationFrame(main);
    var secsSinceRepaint = (now - latestRenderTime) / 1000;

    if (secsSinceRepaint < 1 / snakeSpeed) return;
    
    latestRenderTime = now;

    refresh();
    draw();
}

window.requestAnimationFrame(main);

function refresh() {
    refreshSnake();
    refreshApple();
    checkFail();
}

function draw() {
    gameBoard.innerHTML = "";
    drawSnake(gameBoard);
    drawApple(gameBoard);
}

function checkFail() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersect();
}
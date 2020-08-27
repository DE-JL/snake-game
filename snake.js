import { getControlDirection } from "./controls.js";

export const snakeSpeed = 15;
var snakeBody = [{x: 26, y: 26}];
var addedSegments = 0;

export function refresh() {
    addSegments();
    const controlDirection = getControlDirection();
    for (let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = {...snakeBody[i]};
    }

    snakeBody[0].x += controlDirection.x;
    snakeBody[0].y += controlDirection.y;
}

export function draw(gameBoard) {
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement("div");
        snakeElement.style.gridRowStart = segment.y;
        snakeElement.style.gridColumnStart = segment.x;
        snakeElement.classList.add("snake");
        gameBoard.appendChild(snakeElement);
    })
}

export function growSnake(growthRate) {
    addedSegments += growthRate;
}

export function snakeEat(position, {ignoreHeadPosition = false} = {}) {
    return snakeBody.some((segment, index) => {
        if (ignoreHeadPosition && index === 0) return false;
        return equalPositions(segment, position);
    })
}

function equalPositions(position1, position2) {
    return (position1.x === position2.x && position1.y === position2.y);
}

function addSegments() {
    for (let i = 0; i < addedSegments; i++) {
        snakeBody.push({ ...snakeBody[snakeBody.length - 1] });
    }

    addedSegments = 0;
}

export function getSnakeHead() {
    return snakeBody[0];
}

export function snakeIntersect() {
    return snakeEat(snakeBody[0], {ignoreHeadPosition: true});
}
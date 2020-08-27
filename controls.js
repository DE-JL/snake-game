var controlDirection = {x: 0, y: 0};
var lastControlDirection = {x: 0, y: 0};

// These are the controls (WASD + arrow keys).
window.addEventListener("keydown", e => {
    switch (e.key) {
        case "w":
        case "ArrowUp":
            if (lastControlDirection.y !== 0) break;
            controlDirection = {x: 0, y: -1};
            break;

        case "s":
        case "ArrowDown":
            if (lastControlDirection.y !== 0) break;
            controlDirection = {x: 0, y: 1};
            break;

        case "d":
        case "ArrowRight":
            if (lastControlDirection.x !== 0) break;
            controlDirection = {x: 1, y: 0};
            break;

        case "a":
        case "ArrowLeft":
            if (lastControlDirection.x !== 0) break;
            controlDirection = {x: -1, y: 0};
            break;
    }
})

// A control direction function is implemented so the snake cannot move unto itself (top to bottom, left to right).
export function getControlDirection() {
    lastControlDirection = controlDirection;
    return controlDirection;
}
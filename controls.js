var controlDirection = {x: 0, y: 0};
var lastControlDirection = {x: 0, y: 0};

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

export function getControlDirection() {
    lastControlDirection = controlDirection;
    return controlDirection;
}
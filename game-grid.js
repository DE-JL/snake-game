const gridWidth = 69;
const gridHeight = 51;

// Generates a random position on the grid.
export function randGridPosition () {
    return {
        x: Math.floor(Math.random() * gridWidth) + 1,
        y: Math.floor(Math.random() * gridHeight) + 1
    }
}

// Checks whether the head of the snake is outside the grid.
export function outsideGrid(position) {
    return (
        position.x < 1 || position.x > gridWidth ||
        position.y < 1 || position.y > gridHeight
    );
}
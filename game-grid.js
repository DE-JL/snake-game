const gridLength = 51;

// Generates a random position on the grid.
export function randGridPosition () {
    return {
        x: Math.floor(Math.random() * gridLength) + 1,
        y: Math.floor(Math.random() * gridLength) + 1
    }
}

// Checks whether the head of the snake is outside the grid.
export function outsideGrid(position) {
    return (
        position.x < 1 || position.x > gridLength ||
        position.y < 1 || position.y > gridLength
    );
}
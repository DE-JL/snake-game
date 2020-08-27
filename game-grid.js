const gridLength = 51;

export function randGridPosition () {
    return {
        x: Math.floor(Math.random() * gridLength) + 1,
        y: Math.floor(Math.random() * gridLength) + 1
    }
}

export function outsideGrid(position) {
    return (
        position.x < 1 || position.x > gridLength ||
        position.y < 1 || position.y > gridLength
    );
}
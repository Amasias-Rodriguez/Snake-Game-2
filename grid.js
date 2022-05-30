const GRID_SIZE = 21

export function getRandomGridPosition() {
    return {
        x: Math.floor(Marh.random() * GRID_SIZE) + 1,
        y: Math.floor(Marh.random() * GRID_SIZE) + 1
    }
}
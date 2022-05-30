import { onSnake, expandSnake } from './snake2.js'
import { randomGridPosition } from './grid.js'
let food = getRandomFoodPosition
const EXPANSION_RATE = 1

export function update(){
    if (onSnake(food)) {
        expandSnake(EXPANSION_RATE)
        food = getRandomFoodPosition
    }
 }

export function draw(gameBoard) {
    const foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y
    foodElement.style.ColumnStart = food.x
    foodElement.classList.add('food')
    gameBoard.appendChild(foodElement)
    }

    function getRandomFoodPosition() {
        let newFoodPosition
        while (newFoodPosition == null || onSnake(newFoodPosition)) {
            newFoodPosition = randomGridPosition()
        }
        return newFoodPosition
    }

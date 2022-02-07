import {onSnake, expandSnake} from './snake.js'
import {randomGridPosition} from './grid.js';

export let foodBody = {x: 10, y: 1};
export let pontuacao = 0;

const EXPASION_RATE = 1;

export function update(){
    if(onSnake(foodBody)){
        console.log(foodBody);
        pontuacao++;
        expandSnake(EXPASION_RATE);
        foodBody = getRandomFoodPostion();
    }
}

export function draw(gameBoard){
    const foodElement = document.createElement('div');
    foodElement.style.gridColumnStart = foodBody.x;
    foodElement.style.gridRowStart =foodBody.y;
    foodElement.classList.add('food');
    gameBoard.appendChild(foodElement);
}


export function getRandomFoodPostion(){
    let newFoodPosition;
    while(newFoodPosition == null || onSnake(newFoodPosition)){
        newFoodPosition = randomGridPosition();
    }
    return newFoodPosition;
}
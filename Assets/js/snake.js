import { foodBody, getRandomFoodPostion, pontuacao } from "./food.js";
import { getInputDirection } from "./input.js";
import { gameBoard } from "./game.js";

export const SNAKE_SPEED = 5; //A cobra se mexerá 2 posições por segundo, vamos atualizar a posição dela a cada 2s.
let snakeBody = [{x: 11, y:11}];
let newSegments = 0;

export function update(){
    addSegments();
    const inputDirection = getInputDirection();
    for(let i = snakeBody.length - 2; i >= 0; --i){
        snakeBody[i + 1] = {...snakeBody[i]};
    }
    snakeBody[0].x += inputDirection.x;
    if(snakeBody[0].x > 21){
        snakeBody[0].x = 1;
    }

    if(snakeBody[0].x < 1){
        snakeBody[0].x = 21;
    }

    snakeBody[0].y += inputDirection.y;
    if(snakeBody[0].y > 21){
        snakeBody[0].y = 1;
    }

    if(snakeBody[0].y < 1){
        snakeBody[0].y = 21;
    }
    if(lose()){
        alert("Você perdeu o jogo!");
        restart();
    }
}

export function draw(gameBoard){
    snakeBody.forEach((value) => {
        const snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = value.y;
        snakeElement.style.gridColumnStart = value.x;
        snakeElement.classList.add('snake');
        gameBoard.appendChild(snakeElement);
    })
}

export function expandSnake(amount) {
    newSegments += amount;
}

export function onSnake(position){
    return snakeBody[0].x == position.x && snakeBody[0].y == position.y;    
}


function addSegments(){
    for(let i = 0; i < newSegments; ++i){
        snakeBody.push({...snakeBody[snakeBody.length - 1]});
    }
    newSegments = 0;
}

export function lose(){
    let sz = snakeBody.length;
    for(let i = 0; i < sz - 1; ++i){
        for(let j = i + 1; j < sz; ++j){
            if(snakeBody[i].x == snakeBody[j].x && snakeBody[i].y == snakeBody[j].y){
                return true;
            }
        }
    }
    return false;
}

function restart(){
    snakeBody = [{x: 11, y:11}];
    newSegments = 0;
    pontuacao = 0;
    foodBody = getRandomFoodPostion();
}
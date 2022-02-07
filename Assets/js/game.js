import { lose, SNAKE_SPEED } from './snake.js';

import { update as updateSnake } from './snake.js';

import { draw as drawSnake } from './snake.js';

import { draw as drawFood } from './food.js';

import { update as updateFood } from './food.js';

import { draw as drawPoints} from './points.js';

import { pontuacao } from './food.js';


let lastRenderTime = 0;

export let gameBoard;

export function start(){
    document.body.innerHTML = '';
    const boardGame = document.createElement('div');
    boardGame.classList.add('gameBoard');
    document.body.appendChild(boardGame);
    gameBoard = document.querySelector('.gameBoard');
    requestAnimationFrame(main);
}

function main(currentTime){
    requestAnimationFrame(main);
    const secondSinceLastRender = (currentTime - lastRenderTime)/1000;
    if(secondSinceLastRender < 1 / SNAKE_SPEED){
        return;
    }
    lastRenderTime = currentTime;

    update();
    draw();
}

function update(){
    updateSnake();
    updateFood();
}

function draw(){
    gameBoard.innerHTML = '';
    drawSnake(gameBoard);
    drawFood(gameBoard);
    drawPoints(gameBoard, pontuacao);
}



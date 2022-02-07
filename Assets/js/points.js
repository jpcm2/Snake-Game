
export function draw(gameBoard, value){
    const pont = document.createElement('p');
    pont.innerHTML = value;
    pont.classList.add('points');
    gameBoard.appendChild(pont);
}
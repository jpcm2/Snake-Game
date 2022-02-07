export function menu(){
    const bg = document.createElement('div');
    const title = document.createElement('h1');
    const buttonPlay = document.createElement('button');

    bg.classList.add('menu-bg');
    buttonPlay.classList.add('play-button');

    title.innerText = "Snake Game";
    buttonPlay.innerText = "Play";
    
    bg.appendChild(title);
    bg.appendChild(buttonPlay);
    document.body.appendChild(bg);
}
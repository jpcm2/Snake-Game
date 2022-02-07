import { start } from "./game.js";
import { menu } from "./menu.js";

let atMenu = true;

function main(){
    menu();
    document.addEventListener('click', (e) =>{
        const target = e.target;
        if(target.innerHTML == "Play"){
            start();
        }
    });
}

main();
let inputDirection = {x : 0, y : 0};

let lastInputDirection = {x: 0, y: 0};

export function getInputDirection(){

    document.addEventListener('keydown', (e) =>{
        const tecla = e.key;

        switch(tecla){
            case 'ArrowUp':
                if(lastInputDirection.y != 0)break;
                inputDirection = {x : 0, y : - 1};
                break;
            case 'ArrowDown':
                if(lastInputDirection.y != 0)break;
                inputDirection = {x:0, y:1};
                break;
            case 'ArrowLeft':
                if(lastInputDirection.x != 0)break;
                inputDirection = {x: -1, y : 0};
                break;
            case 'ArrowRight':
                if(lastInputDirection.x != 0)break;
                inputDirection = {x: 1, y: 0};
                break;
        }
    })
    lastInputDirection = inputDirection;
    return inputDirection;
};
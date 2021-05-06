export default class Game{
    constructor(gameState = 0, money = 100){
        this.gameState = gameState; 
        this.money = money;
        this.zombies = [];
    }

    addZombie(zombie){
        this.zombies.push(zombie);
    }

    getZombies(){
        return this.zombies;
    }



    flipGameState(gameState){
        if (this.gameState){
            this.gameState = 1;
        }else{
            this.gameState = 0;
        }
    }

    checkWin(){
        if(this.money > 10000){
            let message = document.createElement('h1')
            message.innerHTML = 'You made a fortune off zombies, but the world has ended. What will you spend it on? '
        }
    }

    checkLoss(){
        if(this.money < 10){
            let message = document.createElement('h1')
            message.innerHTML = 'You less all your money during a zombie apocalypse. It is a zombie apocalypse, most of the shops are closed anyway'
        }
    }

}
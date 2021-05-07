export default class Game{
    
    constructor(){
        this.gameState = 0; 
        this.money = 100;
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
            // display You made a fortune off zombies, but the world has ended. What will you spend it on?
        }
    }

    checkLoss(){
        if(this.money < 0){
            //display loss
        }
    }
    
}
export default class Game{
    
    constructor(){
        this.gameState = 1;
        this.phase = 1; 
        this.money = 25.00;
    }

    flipGameState(gameState){
        this.gameState ? this.gameState = 0 : this.gameState = 1;
    }

    changeGamePhase(){
        this.phase++;
        if(this.phase == 4){
            this.phase == 2;
        }
    }

    checkWin(){
        if(this.money > 10000){
            // display You made a fortune off zombies, but the world has ended. What will you spend it on?
            return true;
        }
        return false;
    }

    checkLoss(){
        if(this.money < 0){
            return true;
        }
        return false;
    }

    checkBalance(amt){
        if(this.money < amt){
            return true;
        }
        return false;
    }
    
}
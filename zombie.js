export default class Zombie{
    constructor(){
        this.animation = 0;
        this.i = 1;
        this.zombieDiv = document.createElement('div')
        this.zombieDiv.classList.add('zombie');
    }

    static animateZombies(zombies){
        console.log(zombies)
        zombies.forEach((zombie)=>{
            let animation = zombie.animation;
            console.log("why isn't this animating");
            if(animation){
                console.log("why isn't this animating");
                zombie.appear();
            }else if(animation === 1){
                zombie.walk();
            }else if(animation === 2){
                zombie.idle();
            }else{
                zombie.die();
            }

        })
        
    }


    appear(){
        // if (!this.zombieDiv){
        //     this.createZombieDiv();
        //     return this.zombieDiv;
        // }else{
        //     //this.zombieDiv.classList.add(`appear_${this.i}`);
            let last = this.i;             
            this.i++
            if(this.i === 12){
                this.i = 1;
            }
            this.zombieDiv.classList.add(`appear_${this.i}`);
            this.zombieDiv.classList.remove(`appear_${last}`);
            return this.zombieDiv;
        // }
        
    }

    //for all remaining types, assuming zombie is initialized
    idle(){
            let last = this.i;             
            this.i++
            if(this.i === 12){
                this.i = 1;
            }
            this.zombieDiv.classList.add(`appear_${this.i}`);
            this.zombieDiv.classList.remove(`appear_${last}`);
            return this.zombieDiv;
    }

    walk(){
            let last = this.i;             
            this.i++
            if(this.i === 12){
                this.i = 1;
            }
            this.zombieDiv.classList.add(`appear_${this.i}`);
            this.zombieDiv.classList.remove(`appear_${last}`);
            return this.zombieDiv;    
    }

    

    die(){
        let last = this.i;             
        this.i++
        if(this.i === 12){
            this.i = 1;
        }
        this.zombieDiv.classList.add(`appear_${this.i}`);
        this.zombieDiv.classList.remove(`appear_${last}`);
        return this.zombieDiv;
    }        

}
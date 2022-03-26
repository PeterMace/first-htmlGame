import Zombie from './zombie.js';
export default class Horde{
    constructor (){
        this.zombies = [];
        this.spawnRate = 3;
        this.spawnDelay = 0;
    }

    spawnZombie(x = 10, y = 425){
        this.zombies.push(new Zombie(x, y))
    }
    
    moveZombies(){
        this.zombies.forEach((currentZombie, i)=>{
            //Spawn animation transition
            if (currentZombie.imgType === "appear"){
                if(currentZombie.isEndFrame()){
                    currentZombie.setWalk(); 
                } 
            }
            else{
                const previous = this.zombies[i-1]
                //Queue management
                if(previous){
                    if(((previous.x - currentZombie.x) > 50) && currentZombie.x < 550){
                        currentZombie.x += 5;
                        if (currentZombie.imgType === "idle"){
                            currentZombie.setWalk();
                        }
                    }else{
                        if (currentZombie.imgType === "walk"){
                            currentZombie.setIdle();
                        }
                    }
                }
                //First zombie animation management
                else{
                    if(currentZombie.x < 550  && (currentZombie.imgType !== "die")){
                        if (currentZombie.imgType === "idle"){
                            currentZombie.setWalk();
                        }
                        currentZombie.x += 5;
                    }else{
                        if (currentZombie.imgType === "walk"){
                                currentZombie.setDrink(); 
                        }
                        if (currentZombie.imgType === "drink"){
                            if(currentZombie.isEndFrame()){
                                //distance offset to smooth animation transition
                                currentZombie.x -= 45;
                                currentZombie.setDie(); 
                            }
                        }
                        if (currentZombie.imgType === "die"){
                            if(currentZombie.isEndFrame()){
                                currentZombie.x += 45;
                                this.zombies.splice(i, 1);
                            }
                        }
                    }
                    
                }
            }
           

        })
        
    }

    getZombies(){
        return this.zombies;
    }
    
    getZombiesSpacing(){
        return this.zombies.map((zombie)=>{
            return zombie.x
        })
    }


}

    
import Zombie from './zombie.js';
export default class Horde{
    constructor (){
        this.zombies = [];
        this.spawnRate = 10;
        this.spawnDelay = 0;
    }

    spawnZombie(x = 10, y = 425){
        this.zombies.push(new Zombie(x, y))
    }
    
    moveZombies(){
        this.zombies.forEach((currentZombie, i)=>{
            if (currentZombie.imgType === "appear"){
                if(currentZombie.isEndFrame()){
                    currentZombie.setWalk(); 
                } 
            }
            else{
                const previous = this.zombies[i-1]
                if(previous){
                    //console.log(currentZombie.x, previous.x, "result", (currentZombie.x - previous.x > 50))
                    if(((previous.x - currentZombie.x) > 50) && currentZombie.x < 550){
                        currentZombie.x += 5;
                    }else{
                        if (currentZombie.imgType === "walk"){
                            currentZombie.setIdle();
                        }
                    }
                }else{
                    if(currentZombie.x < 550){
                        currentZombie.x += 5;
                    }else{
                        if (currentZombie.imgType === "walk"){
                                currentZombie.setDrink(); 
                        }
                        if (currentZombie.imgType === "drink"){
                            if(currentZombie.isEndFrame()){
                                currentZombie.setDie(); 
                            }
                        }
                        if (currentZombie.imgType === "die"){
                            if(currentZombie.isEndFrame()){
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

    
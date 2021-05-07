import Zombie from './zombie.js';
export default class Horde{
    constructor (){
        this.zombies = [];
    }

    spawnZombie(x = 10, y = 275){
        this.zombies.push(new Zombie(x, y))
    }
    
    moveZombies(zombies){
      
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

    
export default class Zombie{
    constructor(x, y){
        this.img = "walk_1";
        this.i = 1;
        this.x = x;
        this.y = y;
        this.maxFrame = {
            "appear" : 11,
            "die" : 8,
            "idle" : 6,
            "walk" : 10
        }
    }
    next_frame(img){
        img = img.split("_")
        let imgType, imgNum; 
        [imgType, imgNum] = img;
        imgNum = Number(imgNum);

        if(imgNum === this.maxFrame[imgType]){
            imgNum = 1;
        }else{
            imgNum++;
        }
        
        const next_image = `${imgType}_${imgNum}`
        return next_image;
    }

    setAnimation(animation){
        this.animation = animation
    }

    static spawnZombie(zombies, x = 10, y = 275){
        console.log("zombies",Zombie.getZombiesSpacing(zombies));
        return new Zombie(x, y)
    }
    
    static moveZombies(zombies){
      
    }

    static getZombiesSpacing(zombies){

        return zombies.map((zombie)=>{
            return zombie.x
        })
    }

}
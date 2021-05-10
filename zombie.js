export default class Zombie{
    constructor(x, y){
        this.imgType = "walk";
        this.imgNum = 1;
        this.x = x;
        this.y = y;
        this.phase = "arriving";
        this.maxFrame = {
            "appear" : 11,
            "die" : 8,
            "idle" : 6,
            "walk" : 10
        }
    }

    getFrame(){
        return `${this.imgType}_${this.imgNum}`;
    }

    resetAnimation(){
        this.imgNum = 1
    }

    nextFrame( ){
        //reset animation frame if at max index. 
        //Each animation has a different number of sprite images
        this.imgNum === this.maxFrame[this.imgType] ? this.imgNum = 1 : this.imgNum++;
        const next_image = `${this.imgType}_${this.imgNum}`
        this.img = next_image;
    }

    setIdle(){
        this.imgType = "idle";
        this.imgNum = 1;
    }

    setWalk(){
        this.imgType = "walk";
        this.imgNum = 1;
    }
    

    
    

}
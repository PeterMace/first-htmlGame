export default class Zombie{
    constructor(x, y){
        this.imgType = "appear";
        this.imgNum = 1;
        this.x = x;
        this.y = y;
        this.maxFrame = {
            "appear" : 11,
            "die" : 8,
            "idle" : 6,
            "walk" : 10,
            "drink" : 7
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

    isEndFrame(){
        if(this.imgNum === this.maxFrame[this.imgType]){
            return true;
        }
        return false;
    }

    setIdle(){
        this.imgType = "idle";
        this.imgNum = 1;
    }

    setWalk(){
        this.imgType = "walk";
        this.imgNum = 1;
    }

    setDrink(){
        this.imgType = "drink";
        this.imgNum = 1;
    }

    setDie(){
        this.imgType = "die";
        this.imgNum = 1;
    }

}
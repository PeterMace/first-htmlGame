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

    next_frame( ){
        let img = this.img.split("_")
        let imgType, imgNum; 
        [imgType, imgNum] = img;
        imgNum = Number(imgNum);
        imgNum === this.maxFrame[imgType] ? imgNum = 1: imgNum++;
        const next_image = `${imgType}_${imgNum}`
        console.log()
        this.img = next_image;
    }

    setAnimation(animation){
        this.animation = animation
    }

    

}
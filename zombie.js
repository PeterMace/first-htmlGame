export default class Zombie{
    constructor(){
        this.animation = 'appear';
        this.i = 1;
        this.zombieDiv = undefined;
    }
    appear(){
        if(this.i === 12){
            this.i = 1;
        }
        if (!this.zombieDiv){
            let newImg = document.createElement('img')
            newImg.setAttribute('src', `./img/appear/appear_${this.i}.png`); 
            newImg.setAttribute('width','60px');
            newImg.setAttribute('height','80px');
            this.i++
            console.log(this.i);
            newImg.setAttribute('id', 'zombie')
            this.zombieDiv = newImg;
            return this.zombieDiv;
        }else{
            this.zombieDiv.setAttribute('src', `./img/appear/appear_${this.i}.png`); 
            this.i++
            console.log(this.i);
            return this.zombieDiv;
        }
        
    }


}
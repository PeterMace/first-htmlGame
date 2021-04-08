export default class ShopItem{
    constructor(type, amount, price){
        this.type = type;
        this.amount = amount;
        this.price = price;
        //this.imgSrc??
    }

    getType(){
        return this.type
    }
    getAmount(){
        return this.amount
    }
    getPrice(){
        return this.price
    }
}
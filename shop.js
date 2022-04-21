export default class Shop{
    constructor(){
        const UI = document.createElement('div');
        this.UI = UI;
        this._shop = [];
    }

    set_items(items){
        this._shop = items
    }

    get_items(){
        return this._shop;
    }


    getShopDisplay(){
        for (let item of this._shop){
            let displayButton = document.createElement('button');
            displayButton.setAttribute('id', `${item.type}:${item.amount}`)
            displayButton.setAttribute('class', 'shop_button')
            displayButton.innerText = `${item.amount} ${item.type} \n $${item.price.toFixed(2)}`;
            displayButton.style.zIndex = "2";
            this.UI.appendChild(displayButton);
        }
        return this.UI
    }


    // sell(){

    // }


}
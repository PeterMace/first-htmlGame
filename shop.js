export default class Shop{
    constructor(){
        const UI = document.createElement('div');
        this.UI = UI;
        this._shop = [];
    }

    set_items(items){
        this._shop = items
    }

    getShopDisplay(){
        for (let item of this._shop){
            let displayButton = document.createElement('button');
            displayButton.setAttribute('id', `${item.type}:${item.amount}`)
            displayButton.innerText = `${item.type}:${item.amount} for ${item.price}`;
            this.UI.appendChild(displayButton);
        }
        return this.UI
        
    }


    sell(){

    }


}
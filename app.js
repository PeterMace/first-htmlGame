import Game from './game.js';
import Shop from './shop.js';
import Zombie from './zombie.js';
import ShopItem from './shopItem.js';


window.addEventListener('DOMContentLoaded', (event) => {
  let shopItemList = 
  [
    new ShopItem('lemon', 48, 12.00),
    new ShopItem('lemon', 24, 7.00),
    new ShopItem('lemon', 12, 4.00),

    new ShopItem('ice', 500, 10.00),
    new ShopItem('ice', 200, 4.50),
    new ShopItem('ice', 48, 2.75),

    new ShopItem('sugar', 50, 14.50),
    new ShopItem('sugar', 15, 5.25),
    new ShopItem('sugar', 5, 2.00),

    new ShopItem('cups', 200, 19.25),
    new ShopItem('cups', 75, 9.75),
    new ShopItem('cups', 25, 4.50),
]


  const land = document.getElementById('land');




  const scoreDisplay = document.getElementById('money')
  const startBtn = document.getElementById('start-button')

  const gameWindow = document.getElementById('game-container')
  console.log(gameWindow);

  gameWindow.setAttribute('color','black' )
  gameWindow.classList.add('.container');


  function clear_zombie(){
    zombieDiv =  document.getElementById('zombie');
    if(zombieDiv){
      zombieDiv.innerHTML = "";
    }

  }

  function add_zombie(){
    let i = 1;
    let newZombie = new Zombie();
    function animate() {
      console.log("animating")
      let zombieDiv = newZombie.appear()
      gameWindow.appendChild(zombieDiv)
      i++;
      if(i === 12){
        i = 1;
      }
    }
    let animationloop =
      window.setInterval(animate, 100);
  }


  startBtn.addEventListener('click', (event)=>{
    event.preventDefault();
    let game = new Game();
    let shop = new Shop();
    shop.set_items(shopItemList);
    //all game assets intialized
    console.log(shop);
  
    let shopUI = shop.getShopDisplay();
    gameWindow.appendChild(shopUI);
    add_zombie();

    // if(animationloop){
    //   clearInterval(animationloop);
    // }

  })
  
  
















})
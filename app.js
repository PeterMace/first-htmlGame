import Game from './game.js';
import Shop from './shop.js';
import Zombie from './zombie.js';
import ShopItem from './shopItem.js';

const zombies = [];


window.addEventListener('DOMContentLoaded', (event) => {

  //game objects
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

  //Game Display Intialization
  const land = document.getElementById('land');
  const scoreDisplay = document.getElementById('money')
  const startBtn = document.getElementById('start-button')

  const gameWindow = document.getElementById('game-container')
  // console.log(gameWindow);

  gameWindow.setAttribute('color','black' )
  gameWindow.classList.add('.container');

  // function animate() {
  //   let zombieDiv = newZombie.appear()
  //   console.log("animating", zombieDiv)
  //   gameWindow.appendChild(zombieDiv)
  // }


  // let animationloop =
  //   window.setInterval(animate, 225);
  let game = new Game();
  let shop = new Shop();


  function add_zombie_display(div){
    console.log(div);
    gameWindow.appendChild(div)
  }


  function createZombie(){
    let newZombie = new Zombie();
    game.addZombie(newZombie);
    add_zombie_display(newZombie.zombieDiv);
    return newZombie;
  }


 

  startBtn.addEventListener('click', (event)=>{
    event.preventDefault();

    shop.set_items(shopItemList);
    console.log("shop loaded", shop);
    let shopUI = shop.getShopDisplay();
    gameWindow.appendChild(shopUI);

    createZombie();
    createZombie();
    window.setTimeout(createZombie, 500)
    // createZombie();


    function animate(){
      return ()=>{
        console.log(game.getZombies())
        game.getZombies().forEach((zombie)=>{
          zombie.appear();
        })

      }
    }
    window.setInterval(animate(), 225);
    


    
    // if(animationloop){
    //   clearInterval(animationloop);
    // }

  })
  
  
















})
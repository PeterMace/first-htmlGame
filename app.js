import Game from './game.js';
import Shop from './shop.js';
import Horde from './horde.js';
import ShopItem from './shopItem.js';

window.addEventListener('DOMContentLoaded', (event) => {

  function load_images(nameSet, maxImgNum){
    for(let i = 1; i <= maxImgNum; i++){
      const name = `${nameSet}_${i}`;
      const src = `./img/${nameSet}/${name}.png`;
     
      const element = document.createElement("img");
      element.setAttribute('src', src);
      images[name] = element;
    }

  }

  function load_shop(shopItems){
    shop.set_items(shopItems);
  }

  function draw(img, x, y){
    ctx.drawImage(img, x, y);
  }
  
  function clearScreen(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  function animate(){
    clearScreen();
    let horde_zombies = horde.getZombies();
    for(let i = 0; i < horde_zombies.length; i++){
      let currentZombie = horde_zombies[i]
      draw(images[currentZombie.getFrame()], currentZombie.x , currentZombie.y);
      currentZombie.nextFrame();
    }
    horde.moveZombies();
    if(horde.spawnDelay === 0){
      let spawnSeed = Math.floor(Math.random() * 100);
      if(spawnSeed <= horde.spawnRate){
        horde.spawnZombie();
        horde.spawnDelay = 10;
      }
    }
    //Spawn delay control
    horde.spawnDelay ? horde.spawnDelay-=1 : horde.spawnDelay;
    
    //Zombie round duration
    game.roundTimer-=1;
    if(game.roundTimer < 0){
      clearAnimation();
    }
    console.log("test", game.roundTimer)
  }

  //Game Display Intialization
  const canvas = document.getElementById('game');
  const shopDiv = document.getElementById('shop');
  const ctx = canvas.getContext('2d');
  //Set low Z index so stores displays in front
  canvas.style.zIndex = "1";
  ctx.imageSmoothingEnabled = false;

  //Game Objects
  let game = new Game();
  let shop = new Shop();
  let horde = new Horde();
  const images = {}

  //Game Objects Loading
  load_images("appear", 11);
  load_images("idle", 6);
  load_images("walk", 10);
  load_images("die", 8);
  load_images("drink", 7);

  //Shop items
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
  
      new ShopItem('cups', 200, 4.50),
      new ShopItem('cups', 75, 2.75),
    ];
    


  load_shop(shopItemList);

  displayShop();
  //let animation = window.setInterval(animate, 125);

  function clearAnimation(){
    clearInterval(animation);
    clearScreen();
  }

  function displayShop(){
    const shopHtml = shop.getShopDisplay();
    console.log(shopHtml)
    shopDiv.appendChild(shopHtml);
  }

  
  function clearShop(){
    const shopHtml = shop.getShopDisplay();
    canvas.appendChild(shopHtml);
  }

  function startRound(){
    
  }
  
})
import Game from './game.js';
import Shop from './shop.js';
import Horde from './horde.js';
import ShopItem from './shopItem.js';

window.addEventListener('DOMContentLoaded', (event) => {

  //shop items
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
  
  function load_images(nameSet, maxImgNum){
    for(let i = 1; i <= maxImgNum; i++){
      const name = `${nameSet}_${i}`;
      const src = `./img/${nameSet}/${name}.png`;
     
      const element = document.createElement("img");
      element.setAttribute('src', src);
      images[name] = element;
    }

  }

  function draw(img, x, y){
    // console.log(img);
    ctx.drawImage(img, x, y);
  }
  
  function clearScreen(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  function animate(){
    // console.log(horde.getZombies())
    clearScreen();
    let horde_zombies = horde.getZombies();
    for(let i = 0; i < horde_zombies.length; i++){
      let currentZombie = horde_zombies[i]
      draw(images[currentZombie.getFrame()], currentZombie.x , currentZombie.y);
      currentZombie.nextFrame();
    }
    horde.moveZombies();
    let spawnSeed = Math.floor(Math.random() * 10000);
    if(spawnSeed >= horde.spawnRate && horde.spawnDelay === 0){
      horde.spawnZombie();
      horde.spawnDelay = 25;
    }
    horde.spawnDelay ? horde.spawnDelay-=1 : horde.spawnDelay;
  }

  //Game Display Intialization
  const canvas = document.getElementById('game')
  const ctx = canvas.getContext('2d');
  ctx.imageSmoothingEnabled = false;

  //Game Objects
  let game = new Game();
  let shop = new Shop();
  let horde = new Horde();
  const images = {}

  //Game Images Loaded
  load_images("appear", 11);
  load_images("idle", 6);
  load_images("walk", 10);
  load_images("die", 8);
  load_images("drink", 7);

  // horde.spawnZombie(10);
  // horde.spawnZombie(100);
  // horde.spawnZombie(200);
  // horde.spawnZombie(260);
  // horde.spawnZombie(340);

  window.setInterval(animate, 125);

})
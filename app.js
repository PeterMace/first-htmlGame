import Game from './game.js';
import Shop from './shop.js';
import Zombie from './zombie.js';
import ShopItem from './shopItem.js';

// const zombies = [];


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


  
  // console.log(gameWindow);

  
  function load_images(nameSet, maxImgNum){
    for(let i = 1; i <= maxImgNum; i++){
      const name = `${nameSet}_${i}`;
      const src = `./img/${nameSet}/${name}.png`;
     
      const element = document.createElement("img");
      element.setAttribute('src', src);
      //element.classList.add('hidden');
      console.log(element);
      images[name] = element;
    }

  }
  





  


  function draw(img, x, y){
    console.log(img);
    ctx.drawImage(img, x, y);
  }
  
  function clear(){
    console.log()
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  function animate(){
    console.log(game.zombies)
    clear();
    for(let i = 0; i < game.zombies.length; i++){
      let currentZombie = game.zombies[i]
      let currentImg = currentZombie.img;
      draw(images[currentImg], currentZombie.x , currentZombie.y);
      currentZombie.img = currentZombie.next_frame(currentImg);
    }
  }


  //Game Display Intialization
  const canvas = document.getElementById('game')
  const ctx = canvas.getContext('2d');
  ctx.imageSmoothingEnabled = false;

  //Game Objects
  let game = new Game();
  let shop = new Shop();
  const images = {}

  //Game Objects Initialization
  load_images("appear", 11);
  load_images("idle", 6);
  load_images("walk", 10);
  load_images("die", 8);

  game.zombies.push(Zombie.spawnZombie(game.zombies,10));
  game.zombies.push(Zombie.spawnZombie(game.zombies,100));
  game.zombies.push(Zombie.spawnZombie(game.zombies,200));
  game.zombies.push(Zombie.spawnZombie(game.zombies,340));
  game.zombies.push(Zombie.spawnZombie(game.zombies,260));



  window.setInterval(animate, 175, game.zombies);



})
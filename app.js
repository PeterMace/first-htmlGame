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


  
  // console.log(gameWindow);

  
  function load_images(nameSet, maxImgNum){
    for(let i = 1; i <= maxImgNum; i++){
      const name = `${nameSet}_${i}`;
      const src = `./img/${nameSet}/${name}.png`;
      const element = document.createElement("img");
      element.setAttribute('src', src);
      element.classList.add('hidden');
      console.log(element);
      images[name] = element;
    }

  }
  





  function next_frame(img){
    img = img.split("_")
    let imgType, imgNum; 
    [imgType, imgNum] = img;
    imgNum = Number(imgNum);
    imgNum++;
    const next_image = `${imgType}_${imgNum}`
    return next_image;
  }


  function draw(img, x= 10, y= 10){
    ctx.drawImage(img, x, y);
  }
  
  function clear(){
    console.log()
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  function animate(zombie){
    // zombieAnimation.forEach((animation)=>{
    //   draw(images[animation]);
    //   next_frame()
    // })
    clear();
    for(let i = 0; i < zombies.length; i++){
      console.log(images);
      let current = zombies[i]
      console.log(images[current].height);
      draw(images[current]);
      console.log(next_frame(current));
      zombies[i] = next_frame(current);
      console.log(current)
    }
    
  }


  //Game Display Intialization
  const canvas = document.getElementById('game')
  const ctx = canvas.getContext('2d');
  ctx.imageSmoothingEnabled = false;

  const images = {}
  const zombies = ["appear_1"];
  load_images("appear", 11);
  console.log(images);
  window.setInterval(animate, 125);

  // function animate() {
  //   let zombieDiv = newZombie.appear()
  //   console.log("animating", zombieDiv)
  //   gameWindow.appendChild(zombieDiv)
  // }


  // let animationloop =
  //   window.setInterval(animate, 225);
  let game = new Game();
  let shop = new Shop();


  // function add_zombie_display(div){
  //   console.log(div);
  //   gameWindow.appendChild(div)
  // }


  // function createZombie(){
  //   let newZombie = new Zombie();
  //   game.addZombie(newZombie);
  //   add_zombie_display(newZombie.zombieDiv);
  //   return newZombie;
  // }


 

  // startBtn.addEventListener('click', (event)=>{
  //   event.preventDefault();

  //   shop.set_items(shopItemList);
  //   console.log("shop loaded", shop);
  //   let shopUI = shop.getShopDisplay();
  //   gameWindow.appendChild(shopUI);

  //   createZombie();
  //   createZombie();
  //   window.setTimeout(createZombie, 500)
  //   // createZombie();


  //   function animate(){
  //     return ()=>{
  //       console.log(game.getZombies())
  //       game.getZombies().forEach((zombie)=>{
  //         zombie.appear();
  //       })

  //     }
  //   }
  //   window.setInterval(animate(), 225);
    


    
    // if(animationloop){
    //   clearInterval(animationloop);
    // }

  //})
  
  
















})
//Create variables here
var dog,happyDog,database,foodS,foodStock,dogImage,happyDogImage,database;
function preload()
{
  //load images here
  dogImage=loadImage("images/dogImg.png");
  happyDogImage=loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500,500);
  database=firebase.database();
  dog=createSprite(250,250,10,10);
  dog.addImage(dogImage);
  dog.scale=0.2;

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);

  for (var i = 5; i < 500; i=i+10) 
  {
  
  var dot = createSprite(i, 5, 3, 3);
  dot.shapeColor = "blue";
  
  }
  for (var i = 5; i < 500; i=i+10) 
  {
  
  var dot1 = createSprite(i, 495, 3, 3);
  dot1.shapeColor = "blue";
  
  }
  for (var i = 5; i < 500; i=i+10) 
  {
  
  var dot1 = createSprite(495,i, 3, 3);
  dot1.shapeColor = "blue";
  
  }
  for (var i = 5; i < 500; i=i+10) 
  {
  
  var dot1 = createSprite(5,i, 3, 3);
  dot1.shapeColor = "blue";
  
  }
  }
  



function draw() {  
background("yellow");

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDogImage);
}
  drawSprites();
  textSize(17);
  fill("red");
  text("I am your Pet 🐶Taffy..😍 I am Hungry ",100,150);
  fill("black");
  text("Note: Press up arrow key to feed your pet Dog Shiro",50,50);
  fill("black");
  text("Milk Bottles Remaining  "+foodS,170,440);
}

  //add styles here


function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}




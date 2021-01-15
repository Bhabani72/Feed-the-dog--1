//Create variables here
var dog, happyDog, database, foodS, foodStock;
var happyDogimg,dogimg;

function preload(){
  happyDogimg=loadImage("images/dogImg1.png",happyDogimg);
  dogimg=loadImage("images/dogImg.png",dogimg);
}

function setup() {
  database=firebase.database();
  createCanvas(500, 500);
  
  dog=createSprite(250,250);
  dog.addImage(dogimg);
  dog.scale=0.2;

foodStock=database.ref('Food');
foodStock.on("value",readStock);
}

function draw() {  
background("yellow");

fill("red");
text("Note:Press Up_Arrow Key To Feed Milk",100,50);

if (keyWentDown(UP_ARROW)){
  writeStock(foodS);
 dog.addImage(happyDogimg);
}

  drawSprites();
}

function readStock(data){
foodS=data.val();
}

function writeStock(x){
  if (x<=0){
    x=0;
  }else {
    x=x-1
  }
  database.ref('/').update({Food:x})
}


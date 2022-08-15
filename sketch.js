var backgroundImg;
var player1 , player2;
var ball;
var player1Img , player2Img;
var ballImg;
var edge; 
var gameState = 0 ;
var score =0;
var player1score=0;
var player2score=0;


function preload(){

player1Img=loadImage ("boy.png");
player2Img=loadImage("girl.png");
backgroundImg=loadImage("bg.jpg");
ballImg=loadImage("ball.png");



}

function setup(){     
  createCanvas(windowWidth-20,windowHeight-30);
  
  player1 = createSprite(20,windowHeight/2);
  //add img to player1
  player1.addImage("player1", player1Img);
  player1.scale = 0.2;

  player2  = createSprite(windowWidth-50,windowHeight/2);
  // add img to player2
  player2.addImage("player2", player2Img);
  player2.scale = 0.7

  ball = createSprite(windowWidth/2,windowHeight/2,30,30);
  //add img to ball
  ball.addImage("ball", ballImg);
  ball.scale = 0.04

  edge = createEdgeSprites();

}

function draw(){
  

  if(gameState===0){
    background("black");
    textSize(30);
    text("INSTRUCTIONS : ",560,80)
    textSize(20)
    text ("PRESS THE ARROWS KEY FOR BOY TO MOVE w,x,a AND d FOR GIRL",350,400)
    text("PRESS enter KEY TO START",550,500)

    if(keyDown ("enter")){
      gameState=1;
    }
  }
  else if(gameState===1){

    background (backgroundImg);

    textSize(20) 
    fill("black")
    text (player1score,650,50)
    text(player2score,700,50)

    if(ball.x<0){
      player2score +=1;
      ball.x = windowWidth/2;
      ball.velocityX = 0;
      ball.y= windowHeight/2;
      ball.velocityY = 0;
    }
    if(ball.x>width){
      player1score +=1;
      ball.x = windowWidth/2;
      ball.velocityX=0;
      ball.y= windowHeight/2;
      ball.velocityY = 0

    }


      if(keyDown("space")){
        ball.velocityX = -11  
        ball.velocityY = -5
      }

      ball.bounceOff(player1)
      ball.bounceOff(player2)

      ball.bounceOff(edge[2])
      ball.bounceOff(edge[3])
      

      player1.bounceOff(edge[2])




      if(keyDown(UP_ARROW)){
        player1.y -= 7;   
      }

      if(keyDown(DOWN_ARROW)){
        player1.y += 7;
    }

      if(keyDown(RIGHT_ARROW)){
      player1.x += 7;
    }

      if(keyDown(LEFT_ARROW)){
      player1.x -= 7;
    }

      if(keyDown("w")){
      player2.y -= 7;   
    }

      if(keyDown("x")){
      player2.y += 7;
    }

      if(keyDown("a")){
      player2.x -= 7;
    }

      if(keyDown("d")){
      player2.x += 7;
    }
  }
  drawSprites ();


}


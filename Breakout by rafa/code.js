var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["bf81422a-59ee-4731-a553-e4a33ee45232"],"propsByKey":{"bf81422a-59ee-4731-a553-e4a33ee45232":{"name":"eightball_1","sourceUrl":"assets/api/v1/animation-library/gamelab/0g3OdHzUFOX2YJG_syVQcF2OsFD9taIo/category_sports/eightball.png","frameSize":{"x":393,"y":394},"frameCount":1,"looping":true,"frameDelay":2,"version":"0g3OdHzUFOX2YJG_syVQcF2OsFD9taIo","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":394},"rootRelativePath":"assets/api/v1/animation-library/gamelab/0g3OdHzUFOX2YJG_syVQcF2OsFD9taIo/category_sports/eightball.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


//sprites
var box1 = createSprite(25, 75, 50, 50);
box1.shapeColor="lightgreen";
var box2 = createSprite(75, 75, 50, 50);
box2.shapeColor="lightblue";
var box3 = createSprite(125, 75, 50, 50);
box3.shapeColor="lightgreen";
var box4 = createSprite(175, 75, 50, 50);
box4.shapeColor="lightblue";
var box5 = createSprite(225, 75, 50, 50);
box5.shapeColor="lightgreen";
var box6 = createSprite(275, 75, 50, 50);
box6.shapeColor="lightblue";
var box7 = createSprite(325, 75, 50, 50);
box7.shapeColor="lightgreen";
var box8 = createSprite(375, 75, 50, 50);
box8.shapeColor="lightblue";


var box9 = createSprite(25, 125, 50, 50);
box9.shapeColor="lightblue";
var box10 = createSprite(75, 125, 50, 50);
box10.shapeColor="lightgreen";
var box11 = createSprite(125, 125, 50, 50);
box11.shapeColor="lightblue";
var box12 = createSprite(175, 125, 50, 50);
box12.shapeColor="lightgreen";
var box13 = createSprite(225,125, 50, 50);
box13.shapeColor="lightblue";
var box14 = createSprite(275, 125, 50, 50);
box14.shapeColor="lightgreen";
var box15 = createSprite(325, 125, 50, 50);
box15.shapeColor="lightblue";
var box16 = createSprite(375, 125, 50, 50);
box16.shapeColor="lightgreen";

var paddle=createSprite(200,390,100,20);
paddle.shapeColor = "white";
var ball=createSprite(200,200,20,20);
ball.setAnimation("eightball_1");
ball.scale = 0.15;

var ponto = 0;

var estadoJogo = "inicio";



// função principal
function draw() {
  background("black");
   start();
  
  drawSprites();
  
  if(estadoJogo == "inicio"){
  textSize(20);
  fill("white");
text("aperte na bola para começar",55,245);
  }
  if(estadoJogo == "play"){
    
    createEdgeSprites(); ball.bounceOff(topEdge); ball.bounceOff(leftEdge); ball.bounceOff(rightEdge);
    
   if(ball.isTouching(box1)){
  ball.bounceOff(box1);
  box1.destroy();
  ponto = ponto +1;
  }
  
   if(ball.isTouching(box2)){
  ball.bounceOff(box2);
  box2.destroy();
   ponto = ponto +1;
  }
  
   if(ball.isTouching(box3)){
  ball.bounceOff(box3);
  box3.destroy();
   ponto = ponto +1;
  }
  
   if(ball.isTouching(box4)){
  ball.bounceOff(box4);
  box4.destroy();
   ponto = ponto +1;
  }
  
   if(ball.isTouching(box5)){
  ball.bounceOff(box5);
  box5.destroy();
   ponto = ponto +1;
  }
  
   if(ball.isTouching(box6)){
  ball.bounceOff(box6);
  box6.destroy();
   ponto = ponto +1;
  }
  
   if(ball.isTouching(box7)){
  ball.bounceOff(box7);
  box7.destroy();
   ponto = ponto +1;
  }
  
   if(ball.isTouching(box8)){
  ball.bounceOff(box8);
  box8.destroy();
   ponto = ponto +1;
  }
  
   if(ball.isTouching(box9)){
  ball.bounceOff(box9);
  box9.destroy();
   ponto = ponto +1;
  }
  
   if(ball.isTouching(box10)){
  ball.bounceOff(box10);
  box10.destroy();
   ponto = ponto +1;
  }
  
   if(ball.isTouching(box11)){
  ball.bounceOff(box11);
  box11.destroy();
   ponto = ponto +1;
  }
  
   if(ball.isTouching(box12)){
  ball.bounceOff(box12);
  box12.destroy();
   ponto = ponto +1;
  }
  
   if(ball.isTouching(box13)){
  ball.bounceOff(box13);
  box13.destroy();
   ponto = ponto +1;
  }
  
   if(ball.isTouching(box14)){
  ball.bounceOff(box14);
  box14.destroy();
   ponto = ponto +1;
  }
  
   if(ball.isTouching(box15)){
  ball.bounceOff(box15);
  box15.destroy();
   ponto = ponto +1;
  }
  
   if(ball.isTouching(box16)){
  ball.bounceOff(box16);
  box16.destroy();
   ponto = ponto +1;
  }
  //textos
  textFont("Smooch Sans");
  fill("yellow");
  textSize(25);
  text("pontos: "+ponto,240,25);



  ball.bounceOff(paddle);
  if(keyDown("left")){
    paddle.x = paddle.x  -5;
    
  }
  if(keyDown("right")){
    paddle.x = paddle.x  +5;
}

if(ball.y > 400){
  fill("red");
  textSize(20);
text("aperte espaço para recomeçar",80,250);
}
if(keyDown("space")){
  ball.x = 200;
  ball.y = 190;
  ball.velocityX = 0;
  ball.velocityY = 0;
}

if (ponto == 16){
  fill("green");
  textSize(60);
 text("fim",70,150) ;
ball.destroy();
  
}

}
// função secundaria
function start(){
  if(mousePressedOver(ball)){
  ball.velocityY = 5;
  ball.velocityX = 2;
  estadoJogo = "play";
}
}
}
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
